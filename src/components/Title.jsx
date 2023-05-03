import { children } from 'react'

export const Title = ({children}) => {
  return (
    <h1
    className=' text-2xl font-bold underline
     underline-offset-8 decoration-4 mb-5 text-stone-900'
    > 
    {children}
    </h1>
  )
}
