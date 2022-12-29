import React, { useRef, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import Post from "./Post/Post";

const Newsfeed = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const {data: newsPost = []} = useQuery({
    queryKey: ['newPost'],
    queryFn: () => fetch('http://localhost:5000/posts')
    .then(res => res.json())
  })

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          console.log(imgData.data.url);
        });
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    const imgUrl = onImageChange();
    const form = e.target;
    // // const image = form.image.value;
    const status = form.status.value;
    console.log(imgUrl);
  }

  return (
    <div className="">
      <form onSubmit={handleShare}>
      <div className="flex items-center gap-3">
        <img
          className="w-[3.5rem] h-[3.5rem] rounded-[50%]"
          src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <input
          type="text"
          name="status"
          placeholder="What's on your mind?"
          className="input input-bordered w-3/4"
        />
      </div>
      <div className="flex items-center">
        <HiPhoto
          onClick={() => imageRef.current.click()}
          className="text-4xl text-orange-500 ml-20 mr-5 cursor-pointer"
        ></HiPhoto>
        <button type="submit" className="btn btn-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none">
          Share
        </button>
      </div>
      </form>
      <div className="hidden">
        <input
          type="file"
          name="image"
          ref={imageRef}
          onChange={onImageChange}
        />
      </div>
      <div className="relative">
        {image && (
          <div>
            <RxCross2
              onClick={() => setImage(null)}
              className="text-2xl cursor-pointer absolute left-[460px] text-white hover:text-red-600"
            ></RxCross2>
            <img className="w-1/2 ml-20" src={image.image} alt="" />
          </div>
        )}
      </div>

      <div className="ml-20 my-6">
        {
          newsPost.map( post => <Post
            key={post._id}
            post={post}
          ></Post>)
        }
        
      </div>
      
    </div>
  );
};

export default Newsfeed;
