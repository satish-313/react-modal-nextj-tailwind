import { Dispatch, SetStateAction } from "react";

const MainModal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="mt-20 bg-indigo-600 w-1/2 p-3 h-48 rounded-lg">
      <p className="text-xl font-medium text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum
        autem! Quia adipisci perspiciatis, impedit esse facilis nemo,
        praesentium debitis rem temporibus nulla fugiat accusamus incidunt
        asperiores voluptas. Atque, ab!
      </p>

      <button
        onClick={() => setModal(false)}
        className="block mx-auto mt-4 bg-indigo-700 px-3 py-1.5 rounded text-white font-semibold hover:bg-indigo-400"
      >
        Close
      </button>
    </div>
  );
};

const Modal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute inset-0 z-10 bg-gray-300 flex justify-center opacity-90">
      <MainModal setModal={setModal} />
    </div>
  );
};
export default Modal;
