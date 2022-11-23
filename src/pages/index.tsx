import { FC, useRef, useState, MouseEvent, FormEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "NodeJs",
    "Python",
    "HTML",
    "CSS",
  ]);

  const modalToggle = () => {
    setShowModal(!showModal);
  };
  const addSkill = (s: string) => {
    setSkills([...skills, s]);
  };

  return (
    <div>
      <Head>
        <title>next modal tailwind</title>
        <meta name="description" content="React modal with tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center p-2">
        <button
          onClick={modalToggle}
          className="mt-2 border px-5 py-1.5 bg-blue-400 rounded-lg font-semibold text-white hover:bg-blue-700"
        >
          Add List
        </button>
      </div>
      {showModal ? (
        <ReactModal toggle={modalToggle} addSkill={addSkill} />
      ) : null}
      <h3 className="text-2xl font-semibold underline text-gray-700">
        My skills :{" "}
      </h3>

      <div className="py-1 5" />
      <ul className="list-disc ml-10">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const ReactModal: FC<{ toggle: () => void; addSkill: (s: string) => void }> = ({
  toggle,
  addSkill,
}) => {
  const modalRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [close, setClose] = useState(false);

  const closeHelper = async () => {
    setClose(true);
    await new Promise((r) => setTimeout(r, 1000));
    toggle();
  };

  const closeModalBackground = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeHelper();
    }
  };

  const Submit = (e: FormEvent) => {
    e.preventDefault();
    const skill = inputRef.current?.value;
    if (skill !== undefined && skill?.trim() !== "") {
      addSkill(skill!);
    }
    closeHelper();
  };

  return (
    <div
      ref={modalRef}
      onClick={(e) => closeModalBackground(e)}
      className="absolute inset-0 z-10 flex flex-col items-center"
    >
      <div className="h-1/5" />
      <div
        className={`bg-indigo-700 sm:w-1/2 h-40 p-3 rounded-lg relative modal-body-animation ${
          close ? "modal-body-animation-close" : ""
        }`}
      >
        <button
          onClick={closeHelper}
          className="absolute top-0 right-0 text-xl font-semibold text-red-500 px-3"
        >
          X
        </button>
        <h3 className="text-xl font-semibold text-white text-center">
          Add your new skill
        </h3>
        <div className="py-1 5" />
        <form onSubmit={(e) => Submit(e)}>
          <input
            className="block w-1/2 mx-auto px-2 py-1.5 rounded outline-none"
            type="text"
            placeholder="add skill"
            ref={inputRef}
          />
          <button className="block mx-auto mt-2 py-1.5 px-3 rounded text-white font-semibold border hover:bg-indigo-400">
            Add skill
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
