import React from "react";

function VacanyItem({ vacancy, onID, setModal }) {
  const { id, job_title, duties_and_responsibilities, requirements, offers } =
    vacancy;

  const handleClick = () => {
    onID(id);
    setModal((modal) => !modal);
  };
  return (
    <div className="m-5 border-2 p-4 rounded-lg text-xl">
      <button onClick={handleClick}>{job_title}</button>
    </div>
  );
}

export default VacanyItem;
