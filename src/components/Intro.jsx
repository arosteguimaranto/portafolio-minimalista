

export const Intro = () => {
  return (
    <div className='flex items-center  justify-center flex-col  pt-20 pb-6 '>
    <h2 id="inicio" className=' text-center md:text-7xl text-5xl  dark:text-white mb-1 md:mb-3 tracking-tighter animate-pulse font-bold'> Arostegui Maranto</h2>
    <br/>
    <p className=' tracking-tight text-3xl mb-3  dark:text-yellow-300   font-mono'> <strong> Desarrollador Web </strong> </p>
    <br/>
    
    <div class="justify-center w-full">
    <ul class="text-xl  flex flex-wrap justify-center p-3 dark:bg-slate-100/80 bg-slate-950 text-white dark:text-black tracking-tight font-semibold  border rounded-lg ">
       {/* <li class="mx-5 hover:text-yellow-200 "><a href="#inicio"> Inicio </a></li>*/}
        <li class="mx-5 dark:hover:text-zinc-50    hover:text-yellow-300"><a href="#proyectos"> Proyectos</a> </li>
        <li class="mx-5 dark:hover:text-zinc-50  hover:text-yellow-300"><a href="#contacto"> Contacto</a></li>
          
    </ul>
</div>

  

    </div>
  )
}
