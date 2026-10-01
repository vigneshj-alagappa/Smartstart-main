import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export function PopupImage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
      style={{ zIndex: 9999 }}
    >
      <div
        className="popup-image-container"
        role="dialog"
        aria-modal="true"
        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
      >
        <button
          className="modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0px',
            background: 'white',
            borderRadius: '50%',
            padding: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 10
          }}
        >
          <X size={24} color="#333" />
        </button>
        <img
          src={asset('images/Admission_Flashcard.png')}
          alt="Smart Start Admission"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        />
      </div>
    </div>
  );
}
