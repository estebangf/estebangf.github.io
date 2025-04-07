// 'use client'
// import { useState } from 'react'

const Contact = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Aquí puedes integrar un servicio de envío de emails o un backend
  //   alert("Mensaje enviado con éxito")
  // }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contacto</h2>
        {/* <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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
        </form> */}
        <div className="flex flex-col flex-wrap md:flex-row items-center gap-y-8 py-6 bg-white rounded-lg shadow-md mt-10">
          <a href="https://www.linkedin.com/in/fernandez-esteban" target="_blank" className="flex flex-col md:w-1/2 items-center gap-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition">
            <img src="/LinkedIn.webp" alt="LinkedIn" className="h-8 w-8 mx-auto" />
            <span className="w-full">fernandez-esteban</span>
          </a>
          <a href="mailto:esteban.fernandez93@outlook.com.ar" target="_blank" className="flex flex-col md:w-1/2 items-center gap-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition">
            <img src="/mail.png" alt="Mail" className="h-8 w-8 mx-auto" />
            <span className="w-full">esteban.fernandez93@outlook.com.ar</span>
          </a>
          <a href="tel:+5492944617548" target="_blank" className="flex flex-col md:w-1/2 items-center gap-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition">
            <img src="/phone.png" alt="Teléfono" className="h-8 w-8 mx-auto" />
            <span className="w-full">+54 9 2944617548</span>
          </a>
          <a href="https://wa.me/5492944617548" target="_blank" className="flex flex-col md:w-1/2 items-center gap-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition">
            <img src="/whatsapp.png" alt="WhatsApp" className="h-8 w-8 mx-auto" />
            <span className="w-full">+54 9 2944617548</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
