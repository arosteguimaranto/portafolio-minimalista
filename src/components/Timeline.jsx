import timeline from "../data/timeline"
import { TimelineItem } from "./TimelineItem"
import { v4 as uuidv4 } from 'uuid';
import { Title } from "./Title";
import cvAros from '/src/ArosCV-E4.pdf'



export const Timeline = () => {



  return (
    <div className='bg-stone p-8 rounded-lg  shadow-lg flex items-center '>
      <div className=" text-mono md:w-7/12 w-2/3  ml-4">

       <h1 className=" tracking-tighter text-2xl font-bold mb-2"> Cursos y Certificaciones</h1>
        <h2 className=" tracking-tighter text-2xl font-bold mb-2">2021</h2>
       {timeline.map(item => (
        <div key={uuidv4()} className="my-4">
            <p className="font-bold">{item.title}</p>
            {/*<p className="text-gray-500">{item.year}</p>*/}
        </div>
    ))}
    


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

