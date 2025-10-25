// components/ui/Modal.tsx
'use client';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center p-4"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        // Close by clicking on the background
        if ((e.target as HTMLElement).id === 'modal-backdrop') {
          onClose();
        }
      }}
    >
      <div
        id="modalContent"
        className="modal-bg w-full max-w-md rounded-t-2xl p-6 space-y-4 modal-slide-in"
      >
        {children}
      </div>
    </div>
  );
}
