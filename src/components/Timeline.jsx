import timeline from "../data/timeline"
import { TimelineItem } from "./TimelineItem"
import { v4 as uuidv4 } from 'uuid';
import { Title } from "./Title";



export const Timeline = () => {

  return (
    <div className='flex flex-col justify-center my-20'>
      <div className="w-full md:w-7/12 flex justify-between items-center">
        <Title>Timeline</Title>
      </div>
     
      {timeline.map(item => (
        <TimelineItem
          key={uuidv4()} // Agrega la clave única aquí
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
      <button
      type='button'
      className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-gray-800 drop-shadow-md hover:stroke-white'
      download
      href="/Portafolio-Minimalista/public/cv-Arostegui-Maranto.pdf"
    >
      Descargar Curriculum
    </button>
    </div>

  )
}

