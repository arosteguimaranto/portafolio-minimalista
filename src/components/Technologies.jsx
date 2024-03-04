import React from 'react'

const Technologies = () => {
  return (
      <div class=" w-full bg-stone p-5 rounded-lg shadow-md flex items-center">
    <div class=" w-full">
        <h2 class="tracking-tight text-3xl dark:text-yellow-300 mb-3 text-center font-mono "><strong>Tecnologias</strong> </h2>
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
  )
}

export default Technologies
