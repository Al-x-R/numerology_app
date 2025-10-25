// components/features/pythagorean-square/GridCell.tsx
'use client';

// Названия для ячеек, чтобы не зашивать их в коде
const cellLabels: Record<string, string> = {
  '1': 'Характер',
  '2': 'Энергия',
  '3': 'Интерес',
  '4': 'Здоровье',
  '5': 'Логика',
  '6': 'Труд',
  '7': 'Удача',
  '8': 'Долг',
  '9': 'Память',
};

// Выделяем ячейки 1 и 6 акцентом, как в вашем HTML
const accentCells = ['1', '6'];

interface GridCellProps {
  cellId: string;
  cellValue: string;
  onClick: () => void;
}

export function GridCell({ cellId, cellValue, onClick }: GridCellProps) {
  const label = cellLabels[cellId] || 'Ячейка';
  const isAccent = accentCells.includes(cellId);

  // Динамически подставляем классы Tailwind
  const cellClass = `
    rounded-xl p-4 text-center cursor-pointer hover:border-gray-400 
    transition-all aspect-square flex flex-col justify-center items-center
    ${isAccent ? 'card-bg-accent' : 'card-bg'}
  `;

  const valueClass = `
    text-3xl font-bold
    ${isAccent ? 'accent-text' : ''}
  `;

  return (
    <div id={`cell-${cellId}`} className={cellClass} onClick={onClick}>
      <span className="text-xs text-gray-400 block mb-1">{label}</span>
      <span id={`matrix-${cellId}`} className={valueClass}>
        {cellValue}
      </span>
    </div>
  );
}
