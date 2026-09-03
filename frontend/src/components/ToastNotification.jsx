import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function ToastNotification() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
      }}
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              background: '#ffffff',
              borderLeft: `4px solid ${isSuccess ? '#10b981' : isError ? '#ef4444' : '#2bbdb9'}`,
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.05)',
              color: '#0f172a',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            {isSuccess && <CheckCircle2 size={20} color="#10b981" />}
            {isError && <AlertCircle size={20} color="#ef4444" />}
            {!isSuccess && !isError && <Info size={20} color="#2bbdb9" />}

            <span style={{ flex: 1 }}>{toast.message}</span>

            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
