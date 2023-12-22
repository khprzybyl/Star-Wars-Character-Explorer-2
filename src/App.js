import { useState, useEffect } from 'react';
import { Table } from './components/Table';

export const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className=" h-screen bg-blue-200 flex justify-center items-center flex-col gap-6 dark:bg-black">
      <h1 className="text-3xl font-bold underline">
        Starwars Characters Explorer
      </h1>
      <button
        className="bg-green-500 p-4 rounded-3xl"
        onClick={handleToggleTheme}
      >
        {' '}
        Dark Mode
      </button>
      <Table />
    </div>
  );
};
