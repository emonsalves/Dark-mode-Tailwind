import "./App.css";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="h-screen flex justify-center items-center bg-red-500 dark:bg-green-500">
      <button
        type="button"
        name="button-dark-mode"
        aria-label="button-dark-mode"
        onClick={toggleTheme}
        className="bg-blue-500  text-black font-bold py-2 px-4 rounded-full hover:bg-blue-700 dark:bg-gray-800 dark:text-white"
      >
        CHANGE THEME IN {theme.toUpperCase()} MODE
      </button>
    </div>
  );
}

export default App;
