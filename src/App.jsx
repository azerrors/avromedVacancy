import React, { useState } from "react";
import { vacancies } from "../db.js";
import getVacancyById from "../services.js";
import VacanyItem from "./components/VacanyItem";
import Modul from "./ui/Modul.jsx";
import Form from "./ui/Form.jsx";

function App() {
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(false);

  function getId(id) {
    setId(id);
  }

  const details = getVacancyById(id);

  return (
    <div>
      <div className="text-center uppercase  text-sky-500 text-xl font-semibold bg-sky-100  tracking-wider  p-5">
        Avromed Vacancy
      </div>

      <main className=" flex  flex-col items-center justify-center md:mt-20 ">
        {vacancies?.map((vacancies) => (
          <VacanyItem
            vacancy={vacancies}
            key={vacancies.id}
            onID={getId}
            setModal={setModal}
          />
        ))}
      </main>

      {modal && (
        <div className="flex justify-center ">
          <Modul details={details} setModal={setModal} setForm={setForm} />
        </div>
      )}
      {/* {form && (
        <div className="flex justify-center ">
          <Form setForm={setForm} details={details} />
        </div>
      )} */}
    </div>
  );
}

export default App;
