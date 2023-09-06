import React from "react";

const page = () => {
  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        My Todo List
      </h1>
      <form>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Task Here.."
        />
      </form>
    </>
  );
};

export default page;
