import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet";

// components
import { Loader, Alert } from "../components";

import { Fox } from "../models";
// import useAlert from "../hooks/useAlert";
import { SITE_NAME } from "../constants";

// contact
const Contact = () => {
  // states
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // hooks
  // const { alert, showAlert } = useAlert();

  // handle link focus (for animation)
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Contact Me</title>
      </Helmet>

      {/* contact section */}
      <section className="relative flex lg:flex-row flex-col max-container lg:h-screen">
        {/* show alert if needed */}
        {alert.show && <Alert {...alert} />}

        {/* get in touch */}
        <div className="flex-1 min-w-[50%] flex flex-col">
          {/* head text */}
          <h1 className="head-text">Get in Touch</h1>

          {/* contact details */}
          <div className="mt-14 space-y-6">
            {/* email */}
            <div className="text-black-500 font-semibold">
              <label htmlFor="email">Email:</label>
              <a
                href="mailto:garrymittal98@gmail.com"
                id="email"
                className="block text-lg text-blue-500"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                garrymittal98@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-black-500 font-semibold">
              <label htmlFor="linkedin">LinkedIn:</label>
              <a
                href="https://www.linkedin.com/in/garry-mittal/"
                id="linkedin"
                className="block text-lg text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                linkedin.com/in/garry-mittal/
              </a>
            </div>
          </div>
        </div>

        {/* Three.js Fox Model */}
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5], // Camera position in 3D space
              fov: 75, // Field of view
              near: 0.1, // Near clipping plane
              far: 1000, // Far clipping plane
            }}
          >
            {/* Directional Light for realistic lighting */}
            <directionalLight intensity={2.5} position={[0, 0, 1]} />

            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Suspense for handling loading state */}
            <Suspense fallback={<Loader />}>
              {/* Fox Model */}
              <Fox
                currentAnimation={currentAnimation} // Current animation state
                position={[0.5, 0.35, 0]} // Initial position in 3D space
                rotation={[12.6, -0.6, 0]} // Initial rotation
                scale={[0.5, 0.5, 0.5]} // Initial scale
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
