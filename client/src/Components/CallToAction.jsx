import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-5 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-white dark:bg-gray-800 shadow-lg animate-slideIn'>
      <div className='flex-1 justify-center flex flex-col px-5'>
        <h2 className='text-3xl font-extrabold text-teal-600 dark:text-teal-400 mb-2 animate-bounce'>
        Effortless Publishing Blogs!
        </h2>
        <p className='text-gray-500 dark:text-red-300 mb-4'>
          Go With Trends 😊
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none transform hover:scale-105 transition-transform duration-300'>
          <a href='http://localhost:5173/projects' target='_blank' rel='noopener noreferrer' className='text-white'>
          Support Your Favourite Creators ❤️
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img
          src='https://c4.wallpaperflare.com/wallpaper/603/260/908/programmers-programming-motivational-code-text-hd-wallpaper-preview.jpg'
          alt='JavaScript'
          className='rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'
        />
      </div>
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 1s ease-out;
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
