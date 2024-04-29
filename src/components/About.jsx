import React from 'react'

export const About = () => {
  return (
    <div className=" bg-stone rounded-lg dark:shadow-inner dark:shadow-white shadow-md flex items-center">
    <div className="w-1/3">
  {/*<img  src="/assets/123.png" alt="Imagen" className="w-full h-auto rounded-full  origin-top-left "/>*/}
    </div>
    <div className="sm:w-3/3 p-12 text-left ml-4">
        <h2 className=" tracking-tighter text-2xl font-bold dark:text-yellow-300 mb-2">¿Quien soy?</h2>    
        <p className=" tracking-tighter text-lg font-mono dark:text-white"><strong>Hola, soy Dylan</strong> Desarrollador apasionado con enfoque en tecnología y creación de soluciones digitales innovadoras,
        contando con 2 años de experiencia en desarrollo frontend y 1 año en backend. Mis habilidades
        prácticas han sido perfeccionadas a través de proyectos personales, proyectos Freelance y cursos en línea, donde he
        adquirido destreza en HTML, CSS, JavaScript, React, Tailwind, Node.js, Supabase y SQL.</p>
    </div>
    <br/>
</div>
  )
}
