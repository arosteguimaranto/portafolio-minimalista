

export const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col  pt-20 pb-6'>
   
    <h2 className='text-4xl text-center md:text-7xl dark:text-white mb-1 md:mb-3 tracking-tighter animate-pulse font-bold'> Arostegui Maranto</h2>
    <p className=' tracking-tight md:text-xl mb-3  font-mono '> <strong> Desarrollador Web </strong> </p>
    <div>
    <p className=' text-lg text-center max-w-1xl mb-6 font-mono'> 
    </p>

    </div>
    <div class=" text-center w-full">
    
    <ul class=" flex flex-wrap justify-center p-0 dark:bg-slate-100/80 bg-stone-950 text-white dark:text-black tracking-tighter font-mono hover:text-yellow-300  border rounded">
      <li class="mx-5 flex-none">Html </li>
      <li class="mx-5 flex-none">Css</li>
      <li class="mx-5 flex-none">Javascript</li>
      <li class="mx-5 flex-none">React</li>
      <li class="mx-5 flex-none"> Node Js</li>
      <li class="mx-5 flex-none">Testing </li>
      <li className="mx-5 flex-none">Next Js</li>
      <li class="mx-5 flex-none">SQL </li>
      <li className="mx-5 flex-none">Tailwind</li>
      <li class="mx-5 flex-none ">GitHub </li>
    </ul>
  </div>

  <div class=" bg-stone p-8 rounded-lg  shadow-lg flex items-center">
        
        <div class="w-1/3">
            <img  src="../../public/assets/dylan.png" alt="Imagen" class="w-full h-auto   origin-top-left rotate-12 "/>
        </div>
       
        <div class="w-2/3 ml-4">
           
            <h2 class=" tracking-tighter text-xl font-bold mb-2">¿Quien soy?</h2>
            
            <p class=" tracking-tighter font-mono dark:text-white"><strong>Hola,</strong> soy Dylan, un aprendiz autodidacta apasionado por desarrollo web y  la tecnologia, con habilidades prácticas cultivadas en proyectos y cursos en línea.</p>
        </div>
    </div>


    <div class="bg-stone p-8 rounded-lg shadow-lg flex items-center">
    <div class="w-2/3 ml-4">
        <h2 class="tracking-tighter text-xl text-left font-bold mb-2">Tecnologias que manejo </h2>
         
    </div>
</div>

    </div>
  )
}
