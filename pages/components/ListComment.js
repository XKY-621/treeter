import React, { Fragment, useEffect, useState } from "react";

const ListComment = ({ treet }) => {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/comment/${treet.treet_id}`
      );
      const jsonData = await response.json();

      setComments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <Fragment>
      <div>
        <div className="border-t border-gray-100 p-1 flex flex-row"></div>
        {comments.rows ? (
          comments.rows.map((comment) => (
            <div key={comment.id} className=" p-3 flex flex-row">
              <div className="bg-gray-300 h-8 w-8 rounded-md flex-none"></div>
              <div
                id={"com_" + comment.id}
                className="bg-gray-50 rounded-md text-sm text-gray-800 px-3 pt-1 pb-3 ml-3 flex-grow"
              >
                <div>
                  <span className="font-bold text-black text-sm mr-3">
                    {comment.name}
                  </span>
                  <span className="text-xs text-gray-400">15 avril 2019</span>
                </div>
                <div>{comment.content}</div>
              </div>
            </div>
          ))
        ) : (
          <div>no comment</div>
        )}
      </div>
    </Fragment>
  );
};
export default ListComment;
