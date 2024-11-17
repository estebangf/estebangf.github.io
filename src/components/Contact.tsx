'use client'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes integrar un servicio de envío de emails o un backend
    alert("Mensaje enviado con éxito")
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contacto</h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
