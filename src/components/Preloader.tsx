import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0f0d] text-[#00ff99]">
      <Code2 className="w-16 h-16 mb-8 animate-pulse" />
      <div className="text-xl font-bold mb-4">
        <span className="inline-block">Compilando portfolio</span>
        <span className="animate-pulse">...</span>
      </div>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00ff99] transition-all duration-300 ease-out shadow-lg shadow-[#00ff99]/50"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-sm text-gray-400">{progress}%</div>
    </div>
  );
}
