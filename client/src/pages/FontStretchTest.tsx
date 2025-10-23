import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FontStretchTest() {
  const [stretch, setStretch] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true);
    // Animate through different widths
    setTimeout(() => setStretch(50), 0);
    setTimeout(() => setStretch(100), 1000);
    setTimeout(() => setStretch(150), 2000);
    setTimeout(() => {
      setStretch(100);
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Font-Stretch Animation Test
        </h1>

        {/* Manual Control Test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Manual Control
          </h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Font Stretch: {stretch}%
            </label>
            <input
              type="range"
              min="25"
              max="151"
              value={stretch}
              onChange={(e) => setStretch(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div
            className="text-6xl font-bold uppercase text-center mb-4"
            style={{
              fontFamily: '"Roboto Flex", sans-serif',
              fontStretch: `${stretch}%`,
              transition: 'font-stretch 0.3s ease',
            }}
          >
            YOUR PATH TO TRADING MASTERY
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Current font-stretch: {stretch}%</p>
            <p className="mt-2">
              25% = Ultra Condensed | 100% = Normal | 151% = Ultra Expanded
            </p>
          </div>
        </div>

        {/* Framer Motion Animation Test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Framer Motion Animation
          </h2>

          <div className="mb-6 flex gap-4">
            <button
              onClick={handleAnimate}
              disabled={isAnimating}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnimating ? 'Animating...' : 'Animate'}
            </button>
            <button
              onClick={() => setStretch(100)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Reset
            </button>
          </div>

          <motion.div
            className="text-6xl font-bold uppercase text-center mb-4"
            style={{
              fontFamily: '"Roboto Flex", sans-serif',
            }}
            animate={{
              fontStretch: `${stretch}%`,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            YOUR PATH TO TRADING MASTERY
          </motion.div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Status: {isAnimating ? '🔄 Animating...' : '✅ Ready'}</p>
            <p className="mt-2">
              Animation sequence: 100% → 50% → 100% → 150% → 100%
            </p>
          </div>
        </div>

        {/* Word-by-Word Animation Test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Word-by-Word Dramatic Effect
          </h2>

          <div className="text-6xl font-bold uppercase text-center mb-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            {['YOUR', 'PATH', 'TO', 'TRADING', 'MASTERY'].map((word, index) => {
              const widths = [50, 100, 75, 100, 150]; // Condensed, normal, slightly condensed, normal, expanded
              return (
                <motion.span
                  key={index}
                  style={{
                    display: 'inline-block',
                    fontFamily: '"Roboto Flex", sans-serif',
                    fontStretch: '100%',
                  }}
                  animate={{
                    fontStretch: `${widths[index]}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            <p>Each word animates to a different width:</p>
            <p className="mt-2">
              YOUR (50%) • PATH (100%) • TO (75%) • TRADING (100%) • MASTERY (150%)
            </p>
          </div>
        </div>

        {/* Debug Info */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-200">
            ℹ️ Debug Information
          </h3>
          <div className="text-sm text-yellow-800 dark:text-yellow-300 space-y-2">
            <p>
              <strong>Font Family:</strong> Roboto Flex (variable font)
            </p>
            <p>
              <strong>Width Axis Range:</strong> 25% to 151%
            </p>
            <p>
              <strong>Method:</strong> Using <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">font-stretch</code> CSS property
            </p>
            <p>
              <strong>Font Declaration:</strong> Custom @font-face with <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">font-stretch: 25% 151%</code> descriptor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

