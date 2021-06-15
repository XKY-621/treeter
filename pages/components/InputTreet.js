import React, { Fragment, useEffect, useState } from "react";
const InputTreet = () => {
  const [content, setContent] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { content };
      const response = await fetch("http://localhost:5000/treets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="bg-white rounded-md shadow-sm p-3 m-4 ">
        <form className=" flex flex-row" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Ecrivez votre treet ici"
            className="flex-grow mx-2 outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="transition duration-300 ease-in-out bg-green-700 text-white rounded-md p-2 text-xs px-3 hover:bg-green-900">
            Treet !
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default InputTreet;
