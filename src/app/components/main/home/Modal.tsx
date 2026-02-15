'use client'
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Contenedor del modal */}
      <div className="relative bg-card-light rounded-xl shadow-lg p-6 z-10 w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <h3 className="text-black text-lg font-bold mb-4 text-center">Deja tu comentario</h3>
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
        >
          <IoCloseCircleOutline />
        </button>

        {children}
      </div>
    </div>
  );
};