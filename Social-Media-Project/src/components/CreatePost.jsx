import { useContext, useRef } from "react";
import { PostStoreContext } from "../store/PostStore";

const CreatePost = () => {

  const {addPost} = useContext(PostStoreContext)

  const userIdElement = useRef();
  const postTittleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTittle = postTittleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTittleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
      title :postTittle,
      body :postBody,
      userId : userId,
      reactions :reactions,
      tags :tags,
    }),
  })
  .then(res => res.json())
  .then((post)=>{
      console.log("Got response from server", post);
      addPost(post);
  });
  }

  //addPost(userId,postTittle,postBody,reactions,tags);

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id Here :
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title : 
          </label>
          <input
            type="text"
            ref={postTittleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today...."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text" rows="4"
            ref={postBodyElement}
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions :  
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags :  
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space between each"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
