

export const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col  pt-20 pb-6'>
    <h2 id="inicio" className='text-4xl text-center  md:text-7xl  dark:text-white mb-1 md:mb-3 tracking-tighter animate-pulse font-bold'> Arostegui Maranto</h2>
    <br/>
    <p className=' tracking-tight text-3xl mb-3  font-mono'> <strong> Desarrollador Web </strong> </p>
    <br/>
    
    <div class="justify-center w-full">
    <ul class="text-xl  flex flex-wrap justify-center p-3 dark:bg-slate-100/80 bg-slate-950 text-white dark:text-black tracking-tight font-semibold  border rounded-lg ">
        <li class="mx-5 hover:text-yellow-200 "><a href="#inicio"> Inicio </a></li>
        <li class="mx-5  hover:text-yellow-200"><a href="#proyectos"> Proyectos</a> </li>
        <li class="mx-5  hover:text-yellow-200"><a href="#contacto"> Contacto</a></li>
        
        
    </ul>
</div>
<br/>
<br/>
  

  <div class=" bg-stone p-8 rounded-lg  shadow-lg flex items-center">
        <div class="w-1/3">
            <img  src="/assets/123.png" alt="Imagen" class="w-full h-auto rounded-full origin-top-left "/>
        </div>
        <div class="w-2/3  ml-4">
            <h2 class=" tracking-tighter text-2xl font-bold mb-2">¿Quien soy?</h2>    
            <p class=" tracking-tighter text-lg font-mono dark:text-white"><strong>Hola,</strong> soy Dylan, un aprendiz autodidacta apasionado por la tecnologia y el desarrollo web, con habilidades prácticas cultivadas en proyectos y cursos en línea.</p>
        </div>
        <br/>
    </div>
    <br/>
    <div class=" w-full bg-stone p-5 m-5 rounded-lg shadow-lg flex items-center">
    <div class=" w-full">
        <h2 class="tracking-tight text-3xl mb-3 text-center font-mono "><strong>Tecnologias</strong> </h2>
        <ul class=" text-xl  flex flex-wrap  justify-around dark:bg-slate-100/80 bg-stone-950 text-white dark:text-black tracking-tight font-semibold  hover:text-yellow-300 transform hover:scale-110 duration-300 border rounded-lg  ">
        <li class="my-2 p-1 flex-none ">Html </li>
        <li class="my-2 p-1 flex-none">Css</li>
        <li class="my-2 p-1 flex-none">Javascript</li>
        <li class="my-2 p-1 flex-none">React</li>
        <li class="my-2 p-1 flex-none"> Node Js</li>
        <li class="my-2 p-1 flex-none">Testing </li>
        <li class="my-2 p-1 flex-none">Next Js</li>
        <li class="my-2 p-1 flex-none">SQL </li>
        <li class="my-2 p-1 flex-none">Tailwind</li>  
        <li class="my-2 p-1 flex-none ">GitHub </li>
        
      </ul>
    </div>
</div>

    </div>
  )
}
