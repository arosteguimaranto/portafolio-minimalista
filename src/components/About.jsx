import React from 'react'

export const About = () => {
  return (
    <div class=" bg-stone rounded-lg dark:shadow-inner dark:shadow-white shadow-md flex items-center">
    <div class="w-1/3">
  {/*<img  src="/assets/123.png" alt="Imagen" class="w-full h-auto rounded-full  origin-top-left "/>*/}
    </div>
    <div class="sm:w-3/3 p-12 text-left ml-4">
        <h2 class=" tracking-tighter text-2xl font-bold dark:text-yellow-300 mb-2">¿Quien soy?</h2>    
        <p class=" tracking-tighter text-lg font-mono dark:text-white"><strong>Hola,</strong> soy Dylan, un aprendiz autodidacta apasionado por la tecnologia y el desarrollo web, con habilidades prácticas cultivadas en proyectos y cursos en línea.</p>
    </div>
    <br/>
</div>
  )
}
