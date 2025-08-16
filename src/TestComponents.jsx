import React from 'react';

const TestComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tailwind Test</h2>
        <p className="text-gray-600 mb-6">If you can see this styled box with gray text on a white background, Tailwind is working!</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Blue Button
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Red Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;