import React from 'react'

function HeroSectionPersonalizeLighting() {
    return (
            <section
              className="bg-cover bg-center h-80 flex items-center relative"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=sph')`,
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-50"
                style={{
                  zIndex: '-1',
                }}
              ></div>
        
              <div className="container mx-auto px-4 text-center text-blue-800 relative z-10">
                <h1 className="text-4xl font-bold mb-4">Personalize Your Lighting Experience</h1>
                <p className="text-lg mb-8">Craft the perfect lighting for any mood, activity, or time of day.</p>
        
                <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Start Personalizing
                </button>
              </div>
            </section>
      );
}

export default HeroSectionPersonalizeLighting