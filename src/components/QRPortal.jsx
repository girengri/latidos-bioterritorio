// src/components/QRPortal.jsx
import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'motion/react'

export default function QRPortal() {
  return (
    <section className="py-20 px-6 bg-bosque text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 rounded-2xl shadow-2xl"
        >
          <QRCodeSVG
            value="https://runap.parquesnacionales.gov.co/"
            size={180}
            bgColor="#FFFFFF"
            fgColor="#1B4332"
            level="H"
          />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Escanea y explora</h2>
          <p className="text-fondo/80 mb-4">
            Este código QR te llevará al Registro Único Nacional de Áreas Protegidas (RUNAP), donde podrás consultar la información oficial de las 19 áreas del SIDAP Caldas.
          </p>
          <p className="text-sm text-fondo/60">
            En la versión completa de la maleta, cada tarjeta tendrá su propio QR con audios, fichas técnicas y enlaces al portal SIDAP Caldas.
          </p>
        </div>
      </div>
    </section>
  )
}