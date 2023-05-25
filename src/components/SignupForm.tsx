import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import { toast } from "react-toastify";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signatureRef = useRef<SignatureCanvas | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signatureRef.current) {
      const signatureData: string | null = signatureRef.current.toDataURL();

      if (signatureData) {
        const signatureBlob: Blob | null = await new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            if (context) {
              context.drawImage(image, 0, 0);
              canvas.toBlob(resolve);
            } else {
              resolve(null);
            }
          };
          image.src = signatureData;
        });

        if (signatureBlob) {
          // Create a FormData object
          const formData = new FormData();

          // Append the signature image file to the FormData object
          formData.append("signature", signatureBlob, "signature.png");

          console.log("signature blob appended to form", formData.get("signature"));
        }
      }
    }

    if (!firstName || !lastName || !email || !password || !signatureRef.current) {
      toast.warning("All fields required!");
      return;
    }

    // Print form values in the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(signatureRef.current?.toDataURL());

    toast.success("Data successfully submitted!");

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    signatureRef.current?.clear();
  };

  const handleClear = () => {
    signatureRef.current?.clear();
  };

  return (
    <div className="w-[90%] md:w-[680px] mx-auto mt-20 flex flex-col gap-1 animate__animated animate__fadeInLeft">
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
        <h1 className="font-medium uppercase text-3xl mb-5 animate__animated animate__bounce animate__repeat-2">
          Buyer's Information
        </h1>
        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-5">
          <p className="text-center mb-3">Signature Upload</p>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{ width: 646, height: 200, className: "signature-canvas" }}
          />
        </div>

        <button type="button" onClick={handleClear}>
          Clear
        </button>

        <button className="bg-black text-white w-[95%] py-2 rounded mt-2 hover:bg-[#333] mx-auto animate__animated animate__jackInTheBox animate__repeat-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
