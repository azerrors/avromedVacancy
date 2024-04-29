import React from "react";
import { MdOutlineClose } from "react-icons/md";

function Modul({ details, setModal, setForm }) {
  const {
    id,
    job_title,
    form,
    duties_and_responsibilities,
    requirements,
    offers,
  } = details;
  return (
    <div className=" bg-sky-100 rounded-md p-5 absolute md:top-5 top-0 md:w-[80rem] min-h-[47rem] md:min-h-[39rem] ">
      <span
        className="absolute right-5 top-3 text-3xl cursor-pointer"
        onClick={() => setModal((modal) => !modal)}
      >
        <MdOutlineClose />
      </span>

      <header className="text-center text-xl font-medium mb-5">
        {job_title}
      </header>

      <div>
        <h4 className="font-semibold border-b-2 border-stone-600 ">
          Duties and Responsibilities:
        </h4>

        <ul>
          {duties_and_responsibilities.map((duties) => (
            <li className="my-2">- {duties}</li>
          ))}
        </ul>

        <h4 className="font-semibold border-b-2 border-stone-600">
          Requirements:
        </h4>
        <div>
          <div className="flex flex-col mb-4">
            {requirements.education && (
              <div>
                <span>-Education: </span>
                <span>{requirements.education}</span>
              </div>
            )}

            {requirements.work_experience && (
              <div>
                <span>-Work Experience: </span>
                <span>{requirements.work_experience}</span>
              </div>
            )}
          </div>

          <p className="font-semibold border-b-2 border-stone-600">Skills:</p>
          <ul>
            {requirements.skills.map((skills) => (
              <li className="my-2">- {skills}</li>
            ))}
          </ul>
        </div>

        {offers === [] && (
          <div>
            <h4 className="font-semibold border-b-2 border-stone-600">
              Offers:{" "}
            </h4>

            <ul>
              {offers.map((offer) => (
                <li className="my-2">- {offer}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center p-2">
        <button
          onClick={() => setForm((form) => !form)}
          className="border hover:-translate-y-2 active:translate-y-1 transition-all duration-200 border-stone-200 bg-white font-medium px-5 py-3 uppercase rounded-xl"
        >
          <a href={form}>Contact Us</a>
        </button>
      </div>
    </div>
  );
}

export default Modul;
