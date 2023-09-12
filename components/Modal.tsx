import React from "react";

function Modal({ isOpen, closeModal, videoSrc }) {
  if (!isOpen) {
    return null; // Return null when the modal is closed
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </button>

        {/* Video iframe (replace with your video source) */}
        <iframe
          width="560"
          height="315"
          src={videoSrc} // Use the video source passed as a prop
          frameBorder="0"
          allowFullScreen
          title="Video"
        ></iframe>

        {/* Details */}
        <h2 className="text-xl font-semibold mt-4">Video Details</h2>
        <p>Insert your video details here.</p>
      </div>
    </div>
  );
}

export default Modal;
