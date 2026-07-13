import { useState } from "react";

type Props = {
  onSuccess: () => void;
};

export default function Verification({ onSuccess }: Props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const verifyUser = () => {
    if (
      name.trim().toLowerCase() === "lovia" &&
      dob.trim() === "13/07"
    ) {
      onSuccess();
    } else {
      alert("Oops! Wrong details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md"> 
        <h1 className="text-2xl font-bold mb-6 text-center">
          A Special Surprise 🎁
        </h1>

        <input
          type="text"
          placeholder="Enter your first name"
          className="border w-full p-3 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="your date of birth in the format 10/12"
          className="border w-full p-3 mb-4 rounded"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button
          onClick={verifyUser}
          className="bg-pink-500 text-white w-full py-3 rounded"
        >
          Unlock Surprise
        </button>
      </div>
    </div>
  );
}