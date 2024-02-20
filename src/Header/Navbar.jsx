import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="bg-gray-800 font-semiwhite flex justify-between items-center w-full h-14">
        <div className="m-4 flex gap-x-4">
          <div className="logo">
            <img
              src="https://cdn.gencraft.com/prod/user/397dcc33-5f32-4065-bc5a-d25a6d5db3fa/ca0c8d79-92b3-479a-8419-a0be6c49ca02/image/image0_0.jpg?Expires=1707020593&Signature=NALMMLldbtgDrUm5sdK-DdfvFP2cenDrOYvcw9GO7M4GPGJUmCj9h1YV3p~jIuTyOb6behqdyzIljuYMIQycpcLUPgQSzXJukmH-qI8oBB~Fsm0QRmLVl7ZO642t9nNqXJqG8t5FtJNWMK0z78tAd6BLuvHP581Ov7iHvtMZdHfAN9e-60Rar7LQaB7OJ~dd3imxKSr5Xh01zNcKFBOpLiwdppeCI1A~MCn9040rY0bYlqLPoLfFn7bzRWo0HO7HrHMN3Pz15YA5QKSMfgp76sinH8Q9gxDqurbgyyo9h6-mb4tGmD9-rVM71rWAHdBsAPFc1W76csd0HRd96fMJnQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"
              alt="Logo"
              className="h-8 w-8"
            />
          </div>
          <div className="font-bold text-xl text-white">LuminaSync</div>
        </div>
        <div className="bg-gray-800">
          <div className="flex">
            <ul className="flex gap-x-5">
              <li>
                <NavLink to="/" className="text-white text-lg font-semibold hover:scale-90 transition-transform cursor-pointer">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/personalizeLighting" className="text-white text-lg font-semibold hover:scale-90 transition-transform cursor-pointer">
                  Personalise Lighting
                </NavLink>
              </li>
              <li>
                <NavLink to="/energyChart" className="text-white text-lg font-semibold hover:scale-90 transition-transform cursor-pointer">
                  Energy Chart
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" className="text-white text-lg font-semibold hover:scale-90 transition-transform cursor-pointer">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="m-4">
          <button className="m-2 rounded-md py-1 px-2 bg-blue-600 text-white text-gray-800 font-semibold border border-gray-800 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            Sign in
          </button>
          <button className="m-2 rounded-md py-1 px-2 bg-blue-600 text-white text-gray-800 font-semibold border border-gray-800 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;