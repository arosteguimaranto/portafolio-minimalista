import { Title } from "./Title"


export const Contact = () => {
  return (
    <div className='flex flex-col mb-10 max-w-3xl mt-9 mx-auto'>
    <h1 className=' font-mono text-lg max-w-3xl mb-6' >Si está buscando un desarrollador web dedicado y motivado, no dude en ponerse en contacto conmigo. 
    <br/> Estoy ansioso por poner mis habilidades y pasión en acción para ayudar a su empresa a alcanzar sus objetivos en línea.</h1>
    <br/>
      <div className=' flex  justify-center items-center'
      >
        <form action='https://getform.io/f/0252185f-0dc8-4d49-adfd-261e95979db0'
          method='POST'
          className='flex flex-col w-full md:w-7/12'>
         
          <Title>Trabajemos juntos</Title>
          <input
            type=' text'
            name='name'
            placeholder=' Nombre'
            className='p-2 bg-transparent
            border-2 rounded-md
            focus:outline-none'
          />
          <input
            type=' text'
            name='email'
            placeholder=' correo@correo.com'
            className='my-2 p-2 bg-transparent
          border-2 rounded-md
          focus:outline-none'
          />

          <textarea
            name='message'
            placeholder=' Ingresa tu mensaje'
            rows='10'
            className='p-2 mb-4 bg-transparent
            border-2 rounded-md
            focus: outline-none'
          />
          <button
            type='submit'
            className='text-center inline-block
          px-8 py-3 w-max text-base font-medium rounded-md text-white bg-slate-950 dark:bg-slate-50 dark:text-black
          hover:stroke-white'
          >
            Work With Me
          </button>

        </form>
      </div>
    </div>
  )
}
