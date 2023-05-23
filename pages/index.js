import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'
import HeroBanner from '@/components/HeroBanner'
import TimeLine from '@/components/TimeLine'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <TimeLine/>
    </>
  )
}
