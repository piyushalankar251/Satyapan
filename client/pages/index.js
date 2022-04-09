import Head from 'next/head'
import Image from 'next/image'
import Modal from './components/WalletConnect/Modal'
import { useState } from 'react'
import individualLogo from '../public/Individual.png'
import organizationLogo from '../public/organization.png'


export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [organization, setOrganization] = useState(false)
  const [individual, setIndividual] = useState(false)
  return (
    <div >
      <Head>
        <title> Certified-Cliché</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid xl:grid-cols-2 xxl:gap-0 lg:gap-0 md:gap-0 lg:grid-cols-2 md:grid-cols-2 col-span-1 '>
        <div className='bg-[#4A3CED] h-[calc(100vh-353px)] grid place-items-center  ' >

          <div className=' transform motion-safe:hover:scale-110 ' >

            <button onClick={() => {
              setOpenModal(true); setOrganization(true)

            }}>
              <Image
                src={organizationLogo}
                width="125.25x"
                height="125.25px"

              />

            </button>

            <div className='text-[#ffffff] font-bold font-sans text-2xl text-center mt-2'>Organization</div>
          </div>

        </div>
        <div className=' h-[calc(100vh-353px)]   grid place-items-center'>
          <div className='transform motion-safe:hover:scale-110  '>

            <button onClick={() => { setOpenModal(true); setIndividual(true) }}>
              <Image
                src={individualLogo}
                width="125.25x"
                height="125.25px"


              />
            </button>

            <div className='text-[#4A3CED] font-bold font-sans text-2xl text-center mt-2'>Individual</div>
          </div>
        </div>

      </div>
      {openModal && <Modal org={organization} ind={individual} />}
    </div>
  )
}


