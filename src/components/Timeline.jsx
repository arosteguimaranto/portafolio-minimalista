import timeline from "../data/timeline"
import { TimelineItem } from "./TimelineItem"
import { v4 as uuidv4 } from 'uuid';
import { Title } from "./Title";
import cvAros from '/src/ArosCV-E4.pdf'



export const Timeline = () => {



  return (
    <div className=' max-w-3xl flex flex-col md:flex-row justify-center my-20 '>
      <div className=" w-full md:w-7/12">

        <Title>Timeline</Title>

        {timeline.map(item => (
          <TimelineItem
            key={uuidv4()} // Agrega la clave única aquí
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}

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

