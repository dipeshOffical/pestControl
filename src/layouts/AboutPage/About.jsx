import React from 'react';
import MissionStatement from './MissionStatement';
import ImageSection from './ImageSection';

const Layout = () => {
  return (
    <div className="bg-blue-900 text-white">
      <header className="py-4 bg-blue-800">
        {/* Header content */}
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        SafeNest Clean & Pest
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl">
        At SafeNest Clean & Pest, we're dedicated to creating cleaner, safer spaces. With years of experience in pest control and cleaning, we deliver reliable, eco-friendly solutions tailored to each client's needs. Our team is committed to using safe, non-toxic products and methods that protect your home or business while ensuring effective results.
      </p>
    </div>
          <ImageSection />
        </div>
      </main>

      <footer className="bg-blue-800 py-4">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;