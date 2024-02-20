import React from "react";
import { useState } from "react";
import CustomizationSection from "./CustomisationToggle/CustomizationSection";
import AdaptiveCustomization from "./CustomisationToggle/AdaptiveCustomization";
import SceneCustomization from "./CustomisationToggle/SceneCustomization";

function CardsPersonalizeLighting() {
  const [showCustomization, setShowCustomization] = useState(false);
  const [activityCustomization, setActivityCustomization] = useState(false);
  const [sceneCustomization, setSceneCustomization] = useState(false);

  const apadtiveToggleCustomization = () => {
    setShowCustomization(!showCustomization);
  };

  const activityToggleCustomization = () => {
    setActivityCustomization(!activityCustomization);
  };

  const sceneToggleCustomization = () => {
    setSceneCustomization(!sceneCustomization);
  };

  return (
    <div className="">
    <div className="flex justify-between mx-20 my-12">
      <div className="w-80 h-68">
        <div className="bg-white rounded-lg shadow-md p-6 bg-gradient-to-r from-purple-300 to-pink-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Adaptive Lighting
          </h2>
          <p className="text-sm text-black mb-4 text-justify h-36">
            Experience lighting that adjusts to the time of day effortlessly.
            From the invigorating brightness of morning to the soothing glow of
            night, our Adaptive Lighting system ensures your space is always
            beautifully lit, no matter the hour.
          </p>
          <div className="flex justify-center">
            <button onClick={apadtiveToggleCustomization} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Customize Lighting
            </button>
          </div>
        </div>
      </div>

      <div className="w-80">
        <div className="bg-white rounded-lg shadow-md p-6 bg-gradient-to-r from-purple-300 to-pink-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Activity-Based Lighting</h2>
          <p className="text-sm text-black mb-4 text-justify h-36">
            Enhance your environment with lighting that adapts to your
            activities. Whether it's reading, relaxing, or entertaining, our
            Activity-Based Lighting system ensures the perfect ambiance for
            every moment.
          </p>
          <div className="flex justify-center">
            <button onClick={activityToggleCustomization} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Customize Lighting
            </button>
          </div>
        </div>
      </div>

      <div className="w-80">
        <div className="bg-white rounded-lg shadow-md p-6 bg-gradient-to-r from-purple-300 to-pink-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Scene Creation</h2>
          <p className="text-sm text-black mb-4 text-justify h-36">
            Elevate your space with custom lighting scenes tailored to your mood
            and activities. Whether it's a cozy night in or a lively gathering
            with friends, our Scene Creation feature allows you to craft the
            perfect ambiance with ease.
          </p>
          <div onClick={sceneToggleCustomization} className="flex justify-center">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Customize Scenes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="m-6">
      {showCustomization && <CustomizationSection/>}
      {activityCustomization && <AdaptiveCustomization/>}
      {sceneCustomization && <SceneCustomization/>}
    </div>

    </div>
  );
}

export default CardsPersonalizeLighting;
