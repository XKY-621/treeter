import React, { Fragment, useEffect, useState } from "react";
import ListComment from "./ListComment";

const Treet = ({ treet }) => {
  const [content, setContent] = useState("");
  const onClickComment = async (e) => {
    e.preventDefault();
    try {
      const body = { content };
      const parentTreet = treet.treet_id;
      const response = await fetch("http://localhost:5000/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: body,
          parentTreet: parentTreet,
        }),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div
        key={treet.treet_id}
        className="bg-white rounded-md shadow-sm m-4 p-3 flex flex-col"
      >
        <div className="flex flex-row item-center">
          <div className="bg-gray-300 w-8 h-8 rounded-md m-2 cursor-pointer"></div>
          <div className="flex flex-col">
            <span className="font-bold cursor-pointer">{treet.name}</span>
            <span className="text-gray-300 text-sm">13 june 2021</span>
            <div />
          </div>
        </div>
        <div>
          <p className="m-2 text-sm mb-4">{treet.content}</p>
        </div>
        <div className="border-t border-gray-100 flex">
          <input
            type="text"
            placeholder="Répondez à ce treet !"
            className="flex-grow mx-2 outline-none bg-gray-50 my-3 border border-gray-100 rounded-md text-xs p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={onClickComment}
            className="transition duration-300 ease-in-out hover:bg-green-800 hover:text-white text-xs text-black bg-gray-100 rounded-md my-3 p-2"
          >
            Commente !
          </button>
        </div>
        <div className="flex flex-col">
          <ListComment treet={treet} />
        </div>
      </div>
    </Fragment>
  );
};
export default Treet;
