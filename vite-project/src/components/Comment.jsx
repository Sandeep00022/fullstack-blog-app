import React, { useEffect, useState } from "react";
import moment from "moment";

export const Comment = ({ comment }) => {
  const [user, setUser] = useState(null);
  console.log("here", comment);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [comment]);
  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shirnk-0 mr-3">
        <img
          className="w-10 h-10 rounded-full bg-gray-200"
          src={user && user.profilePicture}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="flex  items-center mb-1">
          <span className="font-bold mr-1 text-xss truncate">
            {user ? `@${user.username}` : `anonymous user`}
          </span>
          <span className="text-gray-500 text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-gray-500 pb-2">{comment.content}</p>
      </div>
    </div>
  );
};
