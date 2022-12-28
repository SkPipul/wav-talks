import React, { useRef, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Newsfeed = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <img
          className="w-[4rem] h-[4rem] rounded-[50%]"
          src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="input input-bordered w-3/4"
        />
      </div>
      <div className="flex items-center">
        <HiPhoto
          onClick={() => imageRef.current.click()}
          className="text-4xl text-orange-500 ml-20 mr-5 cursor-pointer"
        ></HiPhoto>
        <button className="btn btn-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none">
          Share
        </button>
      </div>
      <div className="hidden">
        <input
          type="file"
          name="myImg"
          ref={imageRef}
          onChange={onImageChange}
        />
      </div>
      <div className="relative">
        {image && (
            <div>
                <RxCross2 onClick={()=> setImage(null)} className="text-2xl cursor-pointer absolute left-[460px] text-white hover:text-red-600"></RxCross2>
                <img className="w-1/2 ml-20" src={image.image} alt="" />
            </div>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
