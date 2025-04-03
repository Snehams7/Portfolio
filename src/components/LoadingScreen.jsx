import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState(""); // Text to display
  const [index, setIndex] = useState(0); // Current index of text animation
  const fullText = "......";

  useEffect(() => {
    if (index > fullText.length) {
      setTimeout(() => {
        onComplete();
      }, 1000); // Delay before calling onComplete
      return;
    }

    const interval = setInterval(() => {
      setText(fullText.substring(0, index)); // Update text
      setIndex((prevIndex) => prevIndex + 1); // Increase index
    }, 100);

    return () => clearInterval(interval);
  }, [index, onComplete]); // Run effect when index changes

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {/* Empty div for animation */}
        </div>
      </div>
    </div>
  );
};
 