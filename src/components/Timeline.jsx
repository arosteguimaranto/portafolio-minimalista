import timeline from "../data/timeline"
import { TimelineItem } from "./TimelineItem"
import { v4 as uuidv4 } from 'uuid';
import { Title } from "./Title";
import cvAros from '/src/ArosCV-E4.pdf'



export const Timeline = () => {
  const year24 = timeline.filter(item => item.category === '2024');
  const year23 = timeline.filter(item => item.category === '2023');
  const year22 = timeline.filter(item => item.category === '2022');
  


  return (
    <div className='bg-stone  p-8 rounded-lg  shadow-md flex items-center '>
    <br/>
      <div className=" text-mono  dark:text-black md:w-7/12 w-2/3  ml-4">

       <h1 className="   max-w-fit rounded-xl text-2xl font-bold p-1 mb-1  bg-zinc-300"> Cursos y Certificaciones</h1>
       <h2 className="  tracking-tighter bg-zinc-300 max-w-fit rounded-xl text-2xl font-bold p-1 mb-1">2024</h2>
       {
        
        year24.map(item => (
          <div key={uuidv4()} className="m-2">
              <p className="font-mono  dark:text-white"><strong>{item.title}</strong></p>
          </div>

        ))
       }
       <h2 className="  tracking-tighter bg-zinc-300 max-w-fit rounded-xl text-2xl font-bold p-1 mb-1">2023</h2>
       {
        
        year23.map(item => (
          <div key={uuidv4()} className="m-2">
          <p className="font-mono  dark:text-white "><strong> {item.title} </strong></p>
          </div>

        ))
       }
       <h2 className=" tracking-tighter bg-zinc-300 max-w-fit rounded-xl text-2xl font-bold p-1 mb-">2022</h2>
       {
        
        year22.map(item => (
          <div key={uuidv4()} className="m-2">
          <p className="font-mono  dark:text-white"><strong> {item.title}</strong></p>
          </div>

        ))
       }
        <h2 className="  tracking-tighter bg-zinc-300 max-w-fit rounded-xl text-2xl font-bold p-1 mb-1">2021</h2>
        <p className="font-mono  dark:text-white text-xl"><strong>Primer "Hello World"</strong></p>
      


        { /*timeline.map(item => (
          <TimelineItem
            key={uuidv4()} // Agrega la clave única aquí
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        )) */}

        { /*<a
          
          className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-gray-800 drop-shadow-md hover:stroke-white'
          href="/public/ArosCV-E4.pdf"
          download={cvAros}
          >
          Descargar Curriculum
        </a> */}
      </div>
    </div>

  )
}

