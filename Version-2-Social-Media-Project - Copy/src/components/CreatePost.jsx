

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  // const {addPost} = useContext(PostStoreContext);

  return (
    <>

      <Form className="create-post" method="POST">
        
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id Here :
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space between each"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};
export const createPostAction = async (data) => {

  //method to get all details
  const formData = await data.request.formData();

  //method to get only details of Form data;
  const postData = Object.fromEntries(formData);
  
  //tags return is of string type so to convert into array
  postData.tags = postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post)=>{
      console.log("Got response from server", post);
  });

  return redirect("/");
}

export default CreatePost;
