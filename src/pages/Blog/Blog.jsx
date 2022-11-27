import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="">
             <h3 className='text-2xl font-bold text-white'>Common Question && Answers</h3>
            </div> 
            <div className="">
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
            </div>
        </>
    );
};

export default Blog;