// components/features/pythagorean-square/DateInputForm.tsx
'use client';

import React from 'react';

// Определяем props, которые компонент принимает
interface DateInputFormProps {
  date: string;
  setDate: (date: string) => void;
  onSubmit: () => void;
  error: string;
}

export function DateInputForm({
  date,
  setDate,
  onSubmit,
  error,
}: DateInputFormProps) {
  // Обработчик нажатия Enter в поле ввода
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div id="inputSection" className="w-full space-y-6">
      <div className="text-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto accent-text"
        >
          <path d="M7 3v18M3 7h18M3 12h18M3 17h18M17 3v18"></path>
        </svg>
        <h1 className="text-3xl font-bold tracking-tight">Код Даты</h1>
        <p className="text-lg text-gray-400">
          Рассчитайте свой Квадрат Пифагора
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Введите вашу дату рождения
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="date-input" // Стили для .date-input нужно будет добавить в globals.css
            max="2999-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          id="calculateButton"
          onClick={onSubmit}
          className="w-full accent-bg text-white font-bold py-3 px-4 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
        >
          Рассчитать
        </button>
        {error && (
          <p id="errorText" className="text-red-400 text-center text-sm">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
