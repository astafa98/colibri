import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
  ];

  let postElements = posts.map((p) => (
    <Post message={p.message} likecounts={p.likesCount} />
  ));

  return (
    <div>
      <div>
        <h2>My posts</h2>
      </div>
      <div>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
        ></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className="{s.posts}">{postElements}</div>
    </div>
  );
};

export default MyPosts;
