import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/mteusgsouza' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/mateus-gonçalves-5b0315160' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/mteusgsouza' },
]
function Social() {
  return (
    socials.map((social, index) => (
      <Link key={index} href={social.path} target='_blank'>
        {social.icon}
      </Link>
    ))
  )
}

export default Social