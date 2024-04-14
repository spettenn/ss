import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 shadow transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-800"
    >
      {darkMode ? (
        <svg
          className="size-5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m7-9h2m-16 0H3m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 12.728l1.414 1.414M4.222 19.778l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      ) : (
        <svg
          className="size-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2L12 12M12 12l0 10M22 12L12 12M12 12L2 12M16.24 7.76L19.07 4.93M12 12l4.24-4.24M7.76 7.76L4.93 4.93M12 12 7.76 7.76M7.76 16.24L4.93 19.07M12 12l-4.24 4.24M16.24 16.24L19.07 19.07M12 12l4.24 4.24"
          />
        </svg>
      )}
      {/* <span className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-300">
        {darkMode ? 'Dark' : 'Light'} Mode
      </span> */}
    </button>
  );
}
