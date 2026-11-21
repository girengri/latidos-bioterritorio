// src/components/AreaCard.jsx
import { motion } from 'motion/react'
import { Leaf } from 'lucide-react'

export default function AreaCard({ area }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-2xl shadow-lg p-6 border-t-4"
      style={{ borderTopColor: area.color }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Leaf className="w-5 h-5" style={{ color: area.color }} />
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: area.color }}>
          {area.categoria}
        </span>
      </div>
      <h3 className="text-xl font-bold text-bosque mb-2">{area.nombre}</h3>
      <p className="text-sm text-gray-600">{area.descripcion}</p>
    </motion.div>
  )
}