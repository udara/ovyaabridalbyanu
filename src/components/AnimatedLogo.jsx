import React from 'react';
import '../css/CursiveWritingAnimation.css'; // Move the CSS into a separate file

const AnimatedLogo = () => {
    return (
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
            <defs>
                <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#baa68e', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#bf9467', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#a18360', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path className="cursive-path"
                  d="M53.38,138.37c-24.15.85-29.54-26.17-21.5-45.2-15.53-10.12-9.47-33.6,4.26-42.49,25.89-19.42,72.05-6.7,68.54,30.76,6.89-3.7,12.17-10.42,16.33-15.64,3.1,4.52-12.31,17.17-16.79,19.78-2.15,25.07-24.55,51.81-50.83,52.79ZM57.18,95.7c13.21.04,28.69-4.29,40.6-10.58,7.22-67.4-91.6-40.73-63.83,3.22,7.61-14.48,26.6-41.72,45.2-29.67-18.33-1.62-31.69,18.91-39.33,33.7,4.68,2.22,10.46,3.33,17.36,3.33ZM54.3,135.61c22.33-1.41,38.78-25.89,42.67-46.34-17.18,8.99-40.7,13.83-58.76,7.13-6.99,15.63-4.68,39.75,16.1,39.21Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M111.57,132.16c-11.39-.75-4.65-14.84-2.53-21.85-3.91.42,6.08-14.45,0-17.6,3.35-.16,7.25-2.47,9.49-.23,2.07,10.49-6.5,22.48-7.07,32.66,3.45,11.17,14.9-7.62,16.56-12.3-1.36-7.21-1.31-22.36,8.16-23.69,1.46,0,2.19.65,2.19,1.96-1.62,6.63-5.38,16.25-8.4,23,3.09,9.09,11.3,2.22,13.34-4.94.92,0,1.38.34,1.38,1.03-2.01,7.17-11.34,15.22-15.87,6.1-3.58,6.82-8.8,15.65-17.25,15.87Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M127.44,168.04c-11.32.99-14.04-9.99-7.42-17.08,8.9-10.38,24.84-10.91,37.2-15.01,4.22-7.32,7.28-18.08,9.77-25.88-3.47,6.21-8,14.53-13.97,18.97-3.81,2.96-9.17,3.31-12.54-.4-3.92-5.54,1.64-13.07,4.2-18.46-4.05.65,4.33-11.86,4.71-13.92,1.94-5.9,8.39-4.66,13-4.71-8.5,7.38-11.84,19.52-16.45,29.55-2.57,8.31,3.12,10.15,8.63,3.1,6.99-8.39,13.27-20.37,18.17-30.13,1.37-3.69,7.79-2.27,10.81-2.53-10.98,10.5-12.23,28.55-18.52,42.44,12.19-3.87,17.08-13.39,22.08-24.84,3.75.2-3.19,8.88-3.22,10.35-4.49,9.01-11.01,13.88-20.7,17.71-7.72,13.36-18.29,30.71-35.77,30.82ZM124.68,165.74c13.24-1.6,23.77-15.6,30.36-26.1-10.58,3.37-25.54,4.64-32.72,13.8-3.95,4.8-5.15,12.32,2.36,12.31Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M212.08,131.7c-7.95.41-7.27-9.2-5.64-14.95-18.59,30.98-31.82,6.12-14.49-15.41,6.18-8.56,19.52-15.96,28.4-7.48,1.4,1.18.87,3.81-1.27,3.22-7.03-17.53-39.76,26.6-27.14,31.17,8.93-1.65,13.8-14.59,18.17-21.39,3.3-6.9,5.47-7.89,12.65-6.79-19.01,20.84-11.64,46.87,5.52,9.09,5.31-1.16-10.78,24.98-16.21,22.54Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M253.25,131.7c-7.95.41-7.27-9.2-5.64-14.95-18.59,30.98-31.82,6.12-14.49-15.41,6.18-8.56,19.52-15.96,28.4-7.48,1.4,1.18.87,3.81-1.27,3.22-7.03-17.53-39.76,26.6-27.14,31.17,8.93-1.65,13.8-14.59,18.17-21.39,3.3-6.9,5.47-7.89,12.65-6.79-19.01,20.84-11.64,46.87,5.52,9.09,5.31-1.16-10.78,24.98-16.21,22.54Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M302.82,135.84c-35.48-.81-18.84-41.11,21.96-12.76,13.45-13.52,20.02-33.63,30.42-50.03,5.1-8.98,12.6-17.52,19.61-25.19-24.35-3.5-56.19-1.11-73.83,18.05-11.18,14.1,2.79,30.35,18.06,21.45,3.9-2.46,7.01-6.87,7.13-10.98,0-.54.38-.8,1.15-.8,5.28,8.53-9.54,17.87-17.59,17.13-23.63-1.12-22.49-30.04-3.56-38.87,21.19-11.69,48.18-13.33,71.41-8.51,5.6-4.75,14.83-7.87,4.14.92,36.7,7.42,33.5,38.34-2.07,40.71,55.04,19.21,1.04,68.56-52.55,40.48-7.44,5.6-15.53,8.4-24.26,8.4ZM300.52,132.27c8.29.51,15.31-2.15,21.73-6.9-36.18-22.68-38.99,5.68-21.73,6.9ZM361.47,132.5c16.35.93,39.49-14.76,29.79-32.26-5.61-8.22-19.4-10.48-27.37-13.4-3.85-1.16-.56-4.03,1.96-3.79,28.87,6.93,53.93-25.35,14.49-34.04-17.64,23.77-29.17,55.78-50.71,76.36,9.5,3.9,21.21,7.26,31.85,7.13Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M409.42,108.81c1.87-4.16,3.88-10.58,5.52-15.87,2.34-4.41.53-12.13,5.63-13.57,7.93,2.12,2.81,12.63-2.53,15.41,5.2.47,10.69.19,15.87-.46,2.07,7.28-17.68,29.76-8.74,34.04,6.22-2.2,10.21-11.49,13.92-19.2,3.41.7-1.17,5.35-1.78,7.82-3.22,8.81-18.47,23.89-21.22,6.9-1.92-10.37,20.56-26.56-.34-26.34-2.26,5.82-3.21,8.04-5.06,12.65-1.23,0-1.65-.46-1.26-1.38Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M442.31,131.35c-20.45-1.76,6.59-32.72.35-39.44,2.07.42,9.09-1.69,9.54,1.38-2.57,8.06-8.36,17.75-10.98,26.11-3.3,6.8.04,12.69,6.78,7.53,5.15-4.25,8.64-11.76,11.33-17.77,5.2.17-10.85,24.81-17.02,22.19ZM452.55,84.55c-6.03-.44-3.69-9.27,1.5-8.97,6.43.18,3.9,9.38-1.5,8.97Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M485.67,131.35c-7.06.21-8.64-7.76-7.02-13.22-3.45,5-7.54,13.05-14.6,13.11-4.8-.04-8.5-3.61-8.16-9.09.28-15.7,17.28-38.88,34.61-29.67,4.37-8.36,9.53-18.85,13.34-27.25,2.33-7.34,7.01-6.24,12.88-5.75-11.46,17.16-23.35,39.08-31.17,58.42-3.24,6.51-1.27,14.48,5.87,8.28,4.38-4.21,8.32-11.69,10.69-17.02,5.1-.14-10.66,24.76-16.44,22.19ZM464.85,127.9c11.22-3.93,18.02-23.09,24.72-33.58-9.72-9.37-36.84,29.52-24.72,33.58Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M527.07,131.7c-7.95.41-7.27-9.2-5.64-14.95-18.59,30.98-31.82,6.12-14.49-15.41,6.18-8.56,19.52-15.96,28.4-7.48,1.4,1.18.87,3.81-1.26,3.22-7.03-17.53-39.76,26.6-27.14,31.17,8.93-1.65,13.8-14.59,18.17-21.39,3.3-6.9,5.47-7.89,12.65-6.79-19.01,20.84-11.64,46.87,5.52,9.09,5.31-1.16-10.78,24.98-16.21,22.54Z"
                  fill="#020202"/>
            <path className="cursive-path"
                  d="M548.69,131.7c-22.56,1.35,9.53-64.5,17.88-70.44,20.55-10.37,1.59,24.89-2.99,31.11-3.72,5.98-8.41,11.58-14.09,16.79-11.2,30.25,10.56,22.39,18.29,0,5.08-.32-9.96,25.03-19.09,22.54ZM550.41,105.48c6.7-7.18,25.47-32.67,22.08-41.74-10.59,9.79-16.27,28.67-22.08,41.74Z"
                  fill="#020202"/>
            {/* Add more paths as needed */}
        </svg>
    );
};

export default AnimatedLogo;
