import React from 'react';

function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full max-w-[500px] bg-white p-3 rounded-lg ">
                {/* Close Button */}
                <button
                    className="absolute rounded-full bg-cream top-2 right-2 bg-gray-300 text-black w-8 h-8 rounded-full flex items-center justify-center z-20"
                    onClick={onClose}
                >
                    X
                </button>

                {/* Modal Content */}
                {children}
            </div>
        </div>
    );
}

export default Modal;
