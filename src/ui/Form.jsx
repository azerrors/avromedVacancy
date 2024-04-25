import React from "react";

function Form({ setForm }) {
  return (
    <div className="absolute top-28 bg-white w-80 rounded-md p-5  md:top-5  md:w-[80rem]  md:h-[44rem]">
      <span
        className="absolute right-10 top-3 text-3xl cursor-pointer"
        onClick={() => setForm((form) => !form)}
      >
        x
      </span>

      <form action="" className="flex flex-col">
        <div className="flex flex-col my-2 gap-1">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            className="border-stone-200 border focus:outline-none p-1"
          />
        </div>

        <div className="flex flex-col my-2 gap-1">
          <label htmlFor="">Surname:</label>
          <input
            type="text"
            className="border-stone-200 border focus:outline-none p-1"
          />
        </div>

        <div className="flex flex-col my-2 gap-1">
          <label htmlFor="">Attached</label>
          <p></p>
        </div>

        <div className="flex flex-col my-2 gap-1">
          <label htmlFor="">Send Cv:</label>
          <input
            type="file"
            className="border-stone-200 border focus:outline-none p-1 "
          />
        </div>

        <button className="border border-stone-300 mt-5 bg-white font-medium px-5 py-3 uppercase rounded-xl">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
