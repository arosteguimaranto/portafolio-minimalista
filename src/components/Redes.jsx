import { FaGithub,  FaInstagram } from 'react-icons/fa';

export const Redes = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
    <a href="https://github.com/arosteguimaranto"><FaGithub size={50} /></a>
    <a href="https://www.instagram.com/arosteguimaranto/"><FaInstagram size={50} /></a>
  </div>
  )
}
