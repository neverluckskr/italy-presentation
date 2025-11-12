import { useState, useEffect } from 'react';

const icons = {
  info: '🔵',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (e) => {
      const toast = e.detail;
      setToasts(prev => [...prev, toast]);
    };

    const handleRemove = (e) => {
      const { id } = e.detail;
      setToasts(prev => prev.filter(t => t.id !== id));
    };

    window.addEventListener('toast', handleToast);
    window.addEventListener('toast-remove', handleRemove);

    return () => {
      window.removeEventListener('toast', handleToast);
      window.removeEventListener('toast-remove', handleRemove);
    };
  }, []);

  return (
    <div className="fixed top-20 right-5 z-[10001] flex flex-col gap-2.5">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="px-4 py-3 rounded-xl flex items-center gap-3 min-w-[280px] relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderLeft: toast.type === 'success' ? '4px solid rgba(0, 146, 70, 0.8)' : 
                       toast.type === 'error' ? '4px solid rgba(206, 43, 55, 0.8)' :
                       toast.type === 'warning' ? '4px solid rgba(255, 193, 7, 0.8)' :
                       '4px solid rgba(59, 130, 246, 0.8)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
            transform: 'translateX(400px)',
            opacity: 0,
            animation: 'slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            const borderLeftColor = toast.type === 'success' ? 'rgba(0, 146, 70, 0.8)' : 
                                   toast.type === 'error' ? 'rgba(206, 43, 55, 0.8)' :
                                   toast.type === 'warning' ? 'rgba(255, 193, 7, 0.8)' :
                                   'rgba(59, 130, 246, 0.8)';
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.borderLeft = `4px solid ${borderLeftColor}`;
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
          }}
          onMouseLeave={(e) => {
            const borderLeftColor = toast.type === 'success' ? 'rgba(0, 146, 70, 0.8)' : 
                                   toast.type === 'error' ? 'rgba(206, 43, 55, 0.8)' :
                                   toast.type === 'warning' ? 'rgba(255, 193, 7, 0.8)' :
                                   'rgba(59, 130, 246, 0.8)';
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderLeft = `4px solid ${borderLeftColor}`;
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)';
          }}
          onAnimationEnd={() => {
            setTimeout(() => {
              const removeEvent = new CustomEvent('toast-remove', { detail: { id: toast.id } });
              window.dispatchEvent(removeEvent);
            }, 2700);
          }}
        >
          {/* Inner animated glow border */}
          <div
            className="absolute inset-[1px] rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-800 ease-in-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
              backgroundSize: '300% 100%',
              animation: 'italianFlagGradient 5s ease-in-out infinite',
              filter: 'blur(3px)',
              zIndex: 0,
            }}
          />
          
          <span className="text-2xl relative z-10">{icons[toast.type]}</span>
          <span className="text-white text-sm font-semibold relative z-10">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
