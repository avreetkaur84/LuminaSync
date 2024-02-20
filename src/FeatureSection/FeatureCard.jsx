import React from "react";

function FeatureCard() {
  return (
    <div className="w-full bg-neutral-200">
      <div className="flex gap-x-8 mx-24">
        <div className="my-12 mx-4 bg-white w-80">
          <div
            className="relative h-36 bg-cover bg-center flex items-center text-slate-200"
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLGah5IiRBUCmHFSpbaNS_AFNrKjLvBLtrhMVLliunMWbnPHbu6WAO1SRxQ&s)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-xl font-bold leading-tight mb-4">
                Personalized Lighting
              </h1>
            </div>
          </div>
          <div className="p-3 m-2 font-semibold">
            Adaptive lighting for natural ambiance. Activity-based settings for
            every moment. Custom scenes for every mood.
          </div>
          <div className="flex justify-center items-center m-2">
          <div class="flex justify-center items-center bg-red-500 text-white w-24 h-8 rounded-full">
            <button>Learn More</button>
          </div>
          </div>
        </div>

        <div className="my-12 mx-4 bg-white w-80">
          <div
            className="relative h-36 bg-cover bg-center flex items-center text-slate-200"
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgbMttsZjj62JcX6Xs-Oa6QAyYup-rSDz0A&usqp=CAU)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-xl font-bold leading-tight mb-4">
                Energy Monitoring
              </h1>
            </div>
          </div>
          <div className="p-3 m-2 font-semibold">
              Real-time & historical data. Cost analysis with electricity rates. Predictive efficiency for smart optimization.
          </div>
          <div className="flex justify-center items-center m-2">
          <div class="flex justify-center items-center bg-red-500 text-white w-24 h-8 rounded-full">
            <button>Learn More</button>
          </div>
          </div>
        </div>

        <div className="my-12 mx-4 bg-white w-80">
          <div
            className="relative h-36 bg-cover bg-center flex items-center text-slate-200"
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3X4sKnCX7gO8FfD27Zw0L5yC79uLXKDeprnYSJ_voa8XYduvPy1pX1aZIAJ-wkUKp7-o&usqp=CAU)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-xl font-bold leading-tight mb-4">
                Voice Control
              </h1>
            </div>
          </div>
          <div className="p-3 m-2 font-semibold">
              Hands-free control with Google Assistant and Alexa. Adjust brightness, color, and scenes using just your voice.
          </div>
          <div className="flex justify-center items-center m-2">
          <div class="flex justify-center items-center bg-red-500 text-white w-24 h-8 rounded-full">
            <button>Learn More</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
