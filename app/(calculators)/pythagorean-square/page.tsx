// app/(calculators)/pythagorean-square/page.tsx
'use client';

import { useState } from 'react';
import { CalculationResult } from '@/lib/types';
import { calculatePythagoreanSquare } from '@/lib/calculators/pythagoreanSquare';

import { DateInputForm } from '@/components/features/pythagorean-square/DateInputForm';
import { ResultsDisplay } from '@/components/features/pythagorean-square/ResultsDisplay';

export default function PythagoreanSquarePage() {
  // Managing the state: date and calculation result
  const [date, setDate] = useState<string>('');
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    if (!date) {
      setError('Пожалуйста, введите дату рождения.');
      return;
    }

    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) {
        setError('Некорректный формат даты.');
        return;
      }

      const year = dateObj.getFullYear();
      if (year < 1000 || year > 2999) {
        setError('Пожалуйста, введите год между 1000 и 2999.');
        return;
      }

      const calcResults = calculatePythagoreanSquare(dateObj);
      setResults(calcResults);
      setError('');
    } catch (e) {
      setError('Ошибка при расчете. Попробуйте снова.');
      console.error(e);
    }
  };

  const handleBack = () => {
    setResults(null);
    setDate('');
    setError('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!results ? (
        <DateInputForm
          date={date}
          setDate={setDate}
          onSubmit={handleCalculate}
          error={error}
        />
      ) : (
        <ResultsDisplay
          results={results}
          date={date}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
