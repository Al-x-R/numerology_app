// components/features/pythagorean-square/ResultsDisplay.tsx
'use client';

import { CalculationResult } from '@/lib/types';
import { SquareGrid } from './SquareGrid'; // Импортируем нашу сетку

interface ResultsDisplayProps {
  results: CalculationResult;
  date: string;
  onBack: () => void;
}

export function ResultsDisplay({
  results,
  date,
  onBack,
}: ResultsDisplayProps) {
  const { matrix, workingNumbers } = results;

  // Форматируем дату для отображения
  const formattedDate = new Date(date).toLocaleDateString('ru-RU');

  return (
    <div id="resultsSection" className="w-full space-y-8 fade-in">
      {/* Шапка */}
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-2xl font-bold" id="profileName">
            Мой Анализ
          </h2>
          <p className="text-gray-400" id="profileDate">
            {formattedDate}
          </p>
        </div>
        <button
          id="backButton"
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Квадрат Пифагора (теперь это отдельный компонент) */}
      <SquareGrid matrix={matrix} />

      {/* Дополнительные числа */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-300">
          Дополнительные числа
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="card-bg rounded-xl p-5">
            <span className="text-xs text-gray-400 block">1-е раб. число</span>
            <span id="work-1" className="text-2xl font-bold">
              {workingNumbers[0]}
            </span>
          </div>
          <div className="card-bg rounded-xl p-4">
            <span className="text-xs text-gray-400 block">2-е раб. число</span>
            <span id="work-2" className="text-2xl font-bold">
              {workingNumbers[1]}
            </span>
          </div>
          <div className="card-bg rounded-xl p-4">
            <span className="text-xs text-gray-400 block">3-е раб. число</span>
            <span id="work-3" className="text-2xl font-bold">
              {workingNumbers[2]}
            </span>
          </div>
          <div className="card-bg rounded-xl p-4">
            <span className="text-xs text-gray-400 block">4-е раб. число</span>
            <span id="work-4" className="text-2xl font-bold">
              {workingNumbers[3]}
            </span>
          </div>
          <div className="card-bg-accent rounded-xl p-4 col-span-2">
            <span className="text-xs text-gray-400 block">Число Судьбы</span>
            <span id="fate" className="text-3xl font-bold accent-text">
              {workingNumbers[1]}{' '}
              {/* В классике "Число Судьбы" - это 2-е рабочее число */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
