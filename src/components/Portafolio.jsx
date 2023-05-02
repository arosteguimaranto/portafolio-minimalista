import portafolio from "../data/portafolio"
import { PortafolioItem } from "./PortafolioItem"



export const Portafolio = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center">
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {portafolio.map(project =>(
      
      <PortafolioItem
    
      imgUrl={project.imgUrl}
      title={project.title}
      stack={project.stack}
      link={project.link}
      
      />
    ))}
    </div>
    </div>
  )
}
