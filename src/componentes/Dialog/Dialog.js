import React from 'react';
import './Dialog.css'; // Importando o CSS para o diálogo

export function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="dialog-close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
