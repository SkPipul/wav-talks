import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';

const Post = ({ post }) => {
    const { image, status } = post;
    return (
        <div className="card w-3/4 bg-base-100 shadow-xl my-7">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
          <h3 className="font-serif">{status}</h3>
            <div className="card-actions items-center ml-3 gap-5">
              <div className="text-2xl cursor-pointer"><BsHeart></BsHeart></div>
              <div className="text-2xl cursor-pointer"><BiCommentDetail></BiCommentDetail></div>
            </div>
          </div>
        </div>
    );
};

export default Post;