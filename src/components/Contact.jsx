import { Title } from "./Title"


export const Contact = () => {
  return (
    <div id="contacto" className='flex flex-col border shadow-md dark:shadow-inner dark:shadow-white rounded-xl mb-10 w-full mt-9 mx-auto dark:bg-zinc-950 '>
  
    <div className='flex p-2 m-8 justify-center items-center'
    >
      <form action='https://getform.io/f/0252185f-0dc8-4d49-adfd-261e95979db0'
        method='POST'
        className='flex flex-col w-full md:w-7/12'>
       
        <h2 className=" max-w-fit rounded-xl text-3xl font-bold p-1 underline underline-offset-8 dark:text-yellow-300 mb-1 ">Trabajemos juntos</h2>
        <br/>
        <input
          type=' text'
          name='name'
          placeholder='Nombre'
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
        <br/>
        <button
          type='submit'
          className='text-center  inline-block
        px-8 py-3 w-max text-base  font-medium rounded-md text-white dark:hover:bg-yellow-300 hover:bg-yellow-300  hover:text-black bg-slate-950 dark:bg-slate-50 dark:text-black
        hover:stroke-white'
        >
          Work With Me
        </button>

      </form>
    </div>
    </div>
  )
}
