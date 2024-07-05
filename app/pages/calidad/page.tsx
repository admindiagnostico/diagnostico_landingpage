// import React from 'react'
// import { Badge } from '@/components/ui/badge'
// import { GlareCard } from '@/components/ui/glare-card'

// const Feature4: React.FC = () => (
//   <div className='w-full py-20 lg:py-40'>
//     <div className='container mx-auto'>
//       <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
//         <div className='flex flex-1 flex-col gap-4'>
//           <div>
//             <Badge>Platform</Badge>
//           </div>
//           <div className='flex flex-col gap-2'>
//             <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
//               This is the start of something new
//             </h2>
//             <div className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm'>
//               <p>
//                 La calidad en Anatomía Patológica se define como un{' '}
//                 <strong>Informe final, completo, preciso y a tiempo</strong>.
//               </p>
//               <p>
//                 En Diagnostico SRL contamos con habilitación del MSP, con los
//                 recursos técnicos, con la infraestructura y los sistemas
//                 necesarios para asegurar los procesos de generación de informes
//                 y la trazabilidad de los especímenes en todas sus etapas a
//                 efectos de brindar un diagnóstico de excelencia en Anatomía
//                 Patológica.
//               </p>
//               <p>
//                 Disponemos además de sistemas automatizados para el
//                 procesamiento de tejidos, coloración de láminas y para las
//                 técnicas de Inmunohistoquímica (IHQ) e Hibridación in Situ,
//                 participamos en los controles de calidad del{' '}
//                 <strong>Colegio Americano de Patólogos (CAP)</strong> para
//                 marcadores predictivos de IHQ y en los controles de calidad del{' '}
//                 <strong>NordiQC</strong> para las técnicas de hibridización in
//                 situ.
//               </p>
//               <p>
//                 Invertimos permanentemente en actividades científicas y de
//                 capacitación para los profesionales y funcionarios que integran
//                 el laboratorio; como parte de las iniciativas de mejora continua
//                 que llevamos adelante se nos ha otorgado el "Certificado UNIT de
//                 Sistema de Gestión de la Calidad, conforme a la norma{' '}
//                 <strong>UNIT-ISO9001:2015</strong>" número CS559 a nombre de
//                 Diagnóstico SRL.
//               </p>
//               <br></br>
//               <p>
//                 Conducir el laboratorio de esta forma implica una inversión
//                 permanente la cual realizamos con la convicción de que es la
//                 forma correcta de hacer las cosas en beneficio de los pacientes,
//                 de los médicos y de las instituciones que confían en nosotros.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* <div className='aspect-video h-full w-full flex-1 rounded-md bg-muted'>
//         </div> */}
//         {/* <GlareCard className='flex flex-col items-center justify-center'>
//           <img
//             className='absolute inset-0 h-full w-full object-cover'
//             src='https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//           />
//         </GlareCard> */}

//       </div>
//     </div>
//   </div>
// )

// export default Feature4

// import React from 'react'
// import NextImage from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { GlareCard } from '@/components/ui/glare-card'
// import GlareCard2 from '@/components/ui/GlareCard2'
// import GlareCard3 from '@/components/ui/GlareCard3'
// import GlareCard4 from '@/components/ui/GlareCard4'

// const Feature4: React.FC = () => {
//   const backgroundStyle = {
//     '--step': '5%',
//     '--rainbow':
//       'repeating-linear-gradient(45deg, rgb(255,119,115) calc(var(--step) * 1), rgba(255,237,95,1) calc(var(--step) * 2), rgba(168,255,95,1) calc(var(--step) * 3), rgba(131,255,247,1) calc(var(--step) * 4), rgba(120,148,255,1) calc(var(--step) * 5), rgb(216,117,255) calc(var(--step) * 6), rgb(255,119,115) calc(var(--step) * 7))',
//     backgroundSize: '400% 400%',
//     animation: 'rainbow-move 10s linear infinite'
//   } as React.CSSProperties

//   return (
//     <div className='w-full py-20 lg:py-40'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
//           <div className='flex flex-[2] flex-col gap-4'>
//             <div>
//               <Badge>Platform</Badge>
//             </div>
//             <div className='flex flex-col gap-2'>
//               <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
//                 This is the start of something new
//               </h2>
//               <div className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm'>
//                 <p>
//                   La calidad en Anatomía Patológica se define como un{' '}
//                   <strong>Informe final, completo, preciso y a tiempo</strong>.
//                 </p>
//                 <p>
//                   En Diagnostico SRL contamos con habilitación del MSP, con los
//                   recursos técnicos, con la infraestructura y los sistemas
//                   necesarios para asegurar los procesos de generación de
//                   informes y la trazabilidad de los especímenes en todas sus
//                   etapas a efectos de brindar un diagnóstico de excelencia en
//                   Anatomía Patológica.
//                 </p>
//                 <p>
//                   Disponemos además de sistemas automatizados para el
//                   procesamiento de tejidos, coloración de láminas y para las
//                   técnicas de Inmunohistoquímica (IHQ) e Hibridación in Situ,
//                   participamos en los controles de calidad del{' '}
//                   <strong>Colegio Americano de Patólogos (CAP)</strong> para
//                   marcadores predictivos de IHQ y en los controles de calidad
//                   del <strong>NordiQC</strong> para las técnicas de
//                   hibridización in situ.
//                 </p>
//                 <p>
//                   Invertimos permanentemente en actividades científicas y de
//                   capacitación para los profesionales y funcionarios que
//                   integran el laboratorio; como parte de las iniciativas de
//                   mejora continua que llevamos adelante se nos ha otorgado el
//                   "Certificado UNIT de Sistema de Gestión de la Calidad,
//                   conforme a la norma <strong>UNIT-ISO9001:2015</strong>" número
//                   CS559 a nombre de Diagnóstico SRL.
//                 </p>
//                 <br />
//                 <p>
//                   Conducir el laboratorio de esta forma implica una inversión
//                   permanente la cual realizamos con la convicción de que es la
//                   forma correcta de hacer las cosas en beneficio de los
//                   pacientes, de los médicos y de las instituciones que confían
//                   en nosotros.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <GlareCard className='flex flex-col items-center justify-center'>
//             <div className='relative h-full w-full overflow-hidden rounded-xl'>
//               <div
//                 className='absolute inset-0 z-10 opacity-60 mix-blend-color-dodge'
//                 style={{
//                   background: `var(--rainbow)`,
//                   ...backgroundStyle
//                 }}
//               />
//               <NextImage
//                 src='/assets/iso/CS_559.png'
//                 alt='CS 559 Image'
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 quality={100}
//               />
//             </div>
//           </GlareCard> */}
//           <div className='flex flex-1'>
//             <GlareCard className='flex flex-col items-center justify-center'>
//               <img
//                 className='absolute inset-0 h-full w-full object-cover'
//                 src='/assets/iso/CS_559.png'
//               />
//             </GlareCard>
//           </div>
//           {/* <div className='h-[546px] w-[323px] flex-1'>
//             <GlareCard2
//               imageSrc='/assets/iso/CS_559.png'
//               alt='CS 559 Image'
//               className='h-full w-full'
//             />
//           </div> */}
//           {/* <div className='flex-1'>
//             <GlareCard3
//               title='Certificado'
//               subtitle='New Year'
//               koreanText='CS 551'
//               flowerImageUrl='/assets/iso/CS_559.png'
//               // flowerImageUrl='https://secure.img1-fg.wfcdn.com/im/14067021/resize-h800-w800%5Ecompr-r85/1085/108596652/Elegant+Tiger+Lilies+Stems.jpg'
//             />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Feature4

// import { Badge } from '@/components/ui/badge'
// import { GlareCard } from '@/components/ui/glare-card'
// import NextImage from 'next/image'

// export const Feature4 = () => (
//   <div className='w-full py-20 lg:py-40'>
//     <div className='container mx-auto'>
//       <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
//         <div className='flex flex-1 basis-1/2 flex-col gap-4'>
//           <div>
//             <Badge>Platfaorm</Badge>
//           </div>
//           <div className='flex flex-col gap-2'>
//             <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
//               This is the start of something new
//             </h2>
//             <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm'>
//               Managing a small business today is already tough. Avoid further
//               complications by ditching outdated, tedious trade methods. Our
//               goal is to streamline SMB trade, making it easier and faster than
//               ever. Managing a small business today is already tough. Avoid
//               further complications by ditching outdated, tedious trade methods.
//               Our goal is to streamline SMB trade, making it easier and faster
//               than ever. Managing a small business today is already tough. Avoid
//               further complications by ditching outdated, tedious trade methods.
//               Our goal is to streamline SMB trade, making it easier and faster
//               than ever.
//             </p>
//           </div>
//         </div>
//         <div className='aspect-video h-full w-full flex-1 basis-1/4 rounded-md bg-muted'></div>
//         {/* <GlareCard className='flex flex-col items-center justify-center'>
//           <NextImage
//             src='/assets/iso/CS_559.png'
//             alt='CS 559 Image'
//             fill
//             style={{ objectFit: 'cover' }}
//             quality={100}
//           />
//         </GlareCard>{' '} */}
//       </div>
//     </div>
//   </div>
// )

// export default Feature4
import { Badge } from '@/components/ui/badge'
import { GlareCard } from '@/components/ui/glare-card'
import NextImage from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export const Feature4 = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto flex flex-col gap-14'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href='/' passHref legacyBehavior>
              <BreadcrumbLink>Inicio</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Calidad</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
        <div className='flex flex-col gap-4 lg:w-2/3'>
          {' '}
          {/* Changed from flex-1 to lg:w-2/3 */}
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
              This is the start of something new<br></br>
              <br></br>
            </h2>
            <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground'>
              La calidad en Anatomía Patológica se define como un Informe final,
              completo, preciso y a tiempo.<br></br>
              <br></br>En Diagnostico SRL contamos con habilitación del MSP, con
              los recursos técnicos, con la infraestructura y los sistemas
              necesarios para asegurar los procesos de generación de informes y
              la trazabilidad de los especímenes en todas sus etapas a efectos
              de brindar un diagnóstico de excelencia en Anatomía Patológica.
              <br></br>
              <br></br>
              Disponemos además de sistemas automatizados para el procesamiento
              de tejidos, coloración de láminas y para las técnicas de
              Inmunohistoquímica (IHQ) e Hibridación in Situ, participamos en
              los controles de calidad del Colegio Americano de Patólogos (CAP)
              para marcadores predictivos de IHQ y en los controles de calidad
              del NordiQC para las técnicas de hibridización in situ.
              <br></br>
              <br></br>
              Invertimos permanentemente en actividades científicas y de
              capacitación para los profesionales y funcionarios que integran el
              laboratorio; como parte de las iniciativas de mejora continua que
              llevamos adelante se nos ha otorgado el "Certificado UNIT de
              Sistema de Gestión de la Calidad, conforme a la norma
              UNIT-ISO9001:2015" número CS559 a nombre de Diagnóstico SRL.
              <br></br>
              <br></br>
              Conducir el laboratorio de esta forma implica una inversión
              permanente la cual realizamos con la convicción de que es la forma
              correcta de hacer las cosas en beneficio de los pacientes, de los
              médicos y de las instituciones que confían en nosotros.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>

        <GlareCard className='flex flex-col items-center justify-center'>
          <div className='h-full w-full p-4'>
            {' '}
            {/* Add padding here */}
            <div className='relative h-full w-full'>
              <NextImage
                src='/assets/iso/CS_559.png'
                alt='CS 559 Image'
                fill={true}
                style={{ objectFit: 'contain' }}
                quality={100}
              />
            </div>
          </div>
        </GlareCard>
        {/* Changed from flex-1 to lg:w-1/3 */}
      </div>
    </div>
  </div>
)
export default Feature4
