// components/features/pythagorean-square/SquareGrid.tsx
'use client';

import { useState } from 'react';
import { MatrixData, Interpretation } from '@/lib/types';
import { getInterpretation } from '@/lib/data/pythagoreanInterpretations';
import { InterpretationModal } from './InterpretationModal';
import { GridCell } from './GridCell';

interface SquareGridProps {
  matrix: MatrixData;
}

export function SquareGrid({ matrix }: SquareGridProps) {
  const [modalContent, setModalContent] = useState<Interpretation | null>(null);
  const [modalValue, setModalValue] = useState<string>('');

  const openModal = (cellId: string, cellValue: string) => {
    const content = getInterpretation(cellId, cellValue);
    setModalContent(content);
    setModalValue(cellValue);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  // Преобразуем объект matrix в массив для удобного рендеринга
  const gridCells = Object.entries(matrix); // [ ['1', '111'], ['2', '2'], ... ]

  return (
    <>
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-300">
          Психоматрица (Квадрат Пифагора)
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {gridCells.map(([id, value]) => (
            <GridCell
              key={id}
              cellId={id}
              cellValue={value || '—'}
              onClick={() => openModal(id, value || '—')}
            />
          ))}
        </div>
      </div>

      <InterpretationModal
        isOpen={!!modalContent}
        onClose={closeModal}
        content={modalContent}
        value={modalValue}
      />
    </>
  );
}
