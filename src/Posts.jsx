import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-4">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-3" key={post.id}>
              <div className="d-flex align-items-center">
                <img
                  className="dp"
                  src={post.user.profile_pic}
                  alt="Profile Pic"
                />
                <h5>{post.user.username}</h5>
              </div>
              <img className="image" src={post.image} alt="post" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts...</div>
      )}
    </div>
  );
}

export default Posts;



//  {
//    posts.map((post) => (
//      <div key={post.id}>
//        <p>{post.user.username}</p>
//        <img
//          src={post.user.profile_pic}
//          alt="profile"
//          style={{ width: "50px", height: "50px", display: "block" }}
//        />
//      </div>
//    ));
//  }