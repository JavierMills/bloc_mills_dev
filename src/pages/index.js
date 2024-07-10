import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffects from '@/components/TransitionEffects'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../../public/images/profile/cosmos.png'
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafilio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffects />
     <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
       <Layout className='pt-0 md:pt-16 sm:pt-8'>

        <div className='flex items-center justify-between w-full lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            {/* priority hace que cuando se carge la paguina la imagen tenga una alta prioridad en mostrarse  */}
            <Image src={profilePicture} alt="Javier Mills" className='w-full h-auto lg:hidden md:inline-block md:w-full'
             priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 50vw"/>
          </div>
          {/* Contenedor que alvergara los botones asi como el texto animado  */}
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            {/* Colocamos el texto animado  */}
            <AnimatedText title="Turning Vision Into Reality With Code And Design." 
            className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
            {/* Colocamos el texto que no estara animado  */}
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications . 
                Explore my latest projects and articles, showcasing my expertise in React.js, Angular, Docker, SalesForce, Appian, 
                Typescript, Next.js, Jenkins, VeraCode, Tailwind, Boostrap, JavaScript, Node.js, Java, SpringBoot and web development." 

            </p>
            {/* Colocamos lo botones  */}
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent 
              
              hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2 md:px-4 md:text-base
              " download={true}>Resume <LinkArrow  className={"w-6 ml-1"}/></Link>


              <Link href="mailto:javier_bouncing@hotmail.com" target={"_blank"} className="ml-8 text-lg forn-medium capitalize 
              text-dark underline dark:text-light md:text-base
              ">Contact</Link>
            </div>
          </div>
        </div>

       </Layout>
       {/* Boton de HireMe que estara dando vueltas  */}
       <HireMe />
       <div className='absolute right-8 bottom-8 inline-block w-24'>
         {/* Colocamos la imagen del foco  */}
    <Image src={lightBlub} alt="JavierMills" className="w-full h-auto- md:hidden"/>
       </div>
     </main>
    </>
  )
}