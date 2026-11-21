import { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      localStorage.setItem('bioterritorio_user', nombre);
      onLogin(nombre);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#F1FAEE]">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full border-t-8 border-[#2D6A4F]">
        <User className="w-16 h-16 text-[#2D6A4F] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-center text-[#1B4332] mb-2">Únete a la Misión</h2>
        <p className="text-center text-gray-500 mb-8">Registra tu nombre de guardián del Bioterritorio para guardar tu progreso.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre o apodo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-lg"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1B4332] transition-colors cursor-pointer"
          >
            Comenzar Exploración <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}