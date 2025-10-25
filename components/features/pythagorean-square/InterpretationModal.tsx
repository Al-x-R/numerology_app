// components/features/pythagorean-square/InterpretationModal.tsx
'use client';

import { Modal } from '@/components/ui/Modal'; // Наша базовая модалка
import { Interpretation } from '@/lib/types';

interface InterpretationModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Interpretation | null;
  value: string; // Значение ячейки, (напр. "111")
}

export function InterpretationModal({
  isOpen,
  onClose,
  content,
  value,
}: InterpretationModalProps) {
  if (!content) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Шапка модального окна */}
      <div className="flex justify-between items-center">
        <div>
          <h3 id="modalTitle" className="text-xl font-bold">
            {content.title}
          </h3>
          <p id="modalSubtitle" className="text-lg accent-text font-semibold">
            Ваше значение: {value}
          </p>
        </div>
        <button
          id="closeModal"
          onClick={onClose}
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      {/* Контент модального окна */}
      <div
        id="modalText"
        className="text-gray-300 max-h-[40vh] overflow-y-auto pr-2"
        // Вставляем HTML-описание
        dangerouslySetInnerHTML={{ __html: content.description }}
      />
    </Modal>
  );
}
