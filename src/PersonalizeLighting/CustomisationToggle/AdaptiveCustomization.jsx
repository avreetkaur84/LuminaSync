import React from "react";

function AdaptiveCustomization() {
  return (
    <div>
      <div className="rounded-3xl bg-gradient-to-r from-gray-100 to-stone-100 w-full h-auto flex flex-wrap justify-between px-6 py-5">

        <div className="p-4 mb-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLaQ77v-1aBr1WT4ZqT8lxpELdjMtSPxEUQ&usqp=CAU')`,
            }}
          ></div>

          <div className="relative z-10">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-80 h-auto bg-white bg-opacity-65">
              <h2 className="text-2xl font-bold text-red-500 text-center pt-4">
                Reading
              </h2>
              <div className="px-4 py-2">Light Settings</div>

              <div className="flex justify-between mt-4 mx-8 py-3">
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Save
                </button>
                
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mb-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcurAxhw20tBkuw-xFZu-442rUvUqUZpk_kuWyVfBOij7DPYfsjU3f5FASm62s2j9018&usqp=CAU')`,
            }}
          ></div>

          <div className="relative z-10">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-80 h-auto bg-white bg-opacity-65">
              <h2 className="text-2xl font-bold text-red-500 text-center pt-4">
                Exercise
              </h2>
              <div className="px-4 py-2">Light Settings</div>

              <div className="flex justify-between mt-4 mx-8 py-3">
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Save
                </button>
                
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mb-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9A0A2xKf3kQgaGsEIBgdTV8fpdcPVDexH5w&usqp=CAU')`,
            }}
          ></div>

          <div className="relative z-10">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-80 h-auto bg-white bg-opacity-65">
              <h2 className="text-2xl font-bold text-red-500 text-center pt-4">
                Watching TV
              </h2>
              <div className="px-4 py-2">Light Settings</div>

              <div className="flex justify-between mt-4 mx-8 py-3">
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Save
                </button>
                
                <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdaptiveCustomization;