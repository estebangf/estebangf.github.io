const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold text-gray-100">Gracias por visitar mi portafolio</h2>
        <p className="mt-2 text-sm text-gray-400">
          Este sitio fue diseñado y desarrollado con <span className="text-blue-500">React</span>, <span className="text-blue-500">TypeScript</span>, y <span className="text-blue-500">Tailwind CSS</span>.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://clip-to.vercel.app/IJi2ylq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.07 3.3 9.38 7.9 10.9.58.1.8-.26.8-.58v-2.15c-3.23.7-3.9-1.56-3.9-1.56-.52-1.3-1.25-1.64-1.25-1.64-1.02-.7.07-.68.07-.68 1.12.08 1.7 1.15 1.7 1.15 1 .17.8 1.34.8 1.34 1.62.84 3.23.6 4-.46.16-.76.42-1.16.76-1.42-2.56-.3-5.26-1.28-5.26-5.66 0-1.26.45-2.28 1.2-3.07-.1-.3-.5-1.54.2-3.23 0 0 .96-.3 3.14 1.16.9-.26 1.86-.38 2.82-.38.96 0 1.92.12 2.82.38 2.18-1.46 3.14-1.16 3.14-1.16.7 1.7.3 2.93.2 3.23.75.79 1.2 1.8 1.2 3.07 0 4.4-2.7 5.36-5.26 5.66.43.37.8 1.1.8 2.2v3.24c0 .32.22.68.8.58A10.48 10.48 0 0 0 23.5 12c0-6.27-5.24-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a href="https://clip-to.vercel.app/uf57oX9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.5c-.966 0-1.5-.75-1.5-1.5s.534-1.5 1.5-1.5c.966 0 1.5.75 1.5 1.5s-.534 1.5-1.5 1.5zm13.5 10.5h-3v-4.5c0-1.134-.366-2-1.5-2-.853 0-1.134.5-1.5 1v5.5h-3v-9h3v1.5c.5-.75 1.24-1.5 2.5-1.5 2 0 3 1.5 3 4v5.5z" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">© 11-2024 Esteban Fernández. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
