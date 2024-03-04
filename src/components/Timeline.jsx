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
      <div className=" text-mono  dark:text-black md:w-7/12 ">
    <br/>
       <h1 className="   max-w-fit rounded-xl text-3xl font-bold p-1 underline underline-offset-8 dark:text-yellow-300 mb-1 "> Cursos y Certificaciones</h1>
      <br/>
       <h2 className="  tracking-tighter bg-stone-950  dark:bg-slate-100/80 dark:text-black text-white max-w-fit rounded-xl text-xl font-bold p-1 mb-1">2024</h2>
       {
        
        year24.map(item => (
          <div key={uuidv4()} className="m-2">
              <p className="font-mono  dark:text-white"><strong>{item.title}</strong></p>
          </div>

        ))
       }
       <h2 className="  tracking-tighter bg-stone-950  dark:bg-slate-100/80 dark:text-black text-white max-w-fit rounded-xl text-xl font-bold p-1 mb-1">2023</h2>
       {
        
        year23.map(item => (
          <div key={uuidv4()} className="m-2">
          <p className="font-mono  dark:text-white "><strong> {item.title} </strong></p>
          </div>

        ))
       }
       <h2 className=" tracking-tighter bg-stone-950 dark:bg-slate-100/80 dark:text-black text-white max-w-fit rounded-xl text-xl font-bold p-1 mb-">2022</h2>
       {
        
        year22.map(item => (
          <div key={uuidv4()} className="m-2">
          <p className="font-mono  dark:text-white"><strong> {item.title}</strong></p>
          </div>

        ))
       }
        <h2 className="  tracking-tighter bg-stone-950  dark:bg-slate-100/80 dark:text-black text-white max-w-fit rounded-xl text-xl font-bold p-1 mb-1">2021</h2>
        <p className="font-mono  dark:text-white text-xl"><strong>Primer "Hello World"</strong></p>
      


     
      </div>
    </div>

  )
}

