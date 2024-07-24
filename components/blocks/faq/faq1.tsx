import { Check, PhoneCall, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const FAQ1 = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <div>
              <Badge variant='outline'>FAQ</Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
                Preguntas frecuentes
              </h4>
              {/* <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg'>
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p> */}
            </div>
            <div className=''>
              <Link href='/pages/contacto' passHref legacyBehavior>
                <Button className='gap-4' variant='outline'>
                  ¿Mas preguntas? Contactenos <User className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {Array.from({ length: 1 }).map((_, index) => (
            <AccordionItem key={index} value={'index-' + index}>
              <AccordionTrigger>
                ¿Cómo deben enviarse las muestras?
              </AccordionTrigger>
              <AccordionContent>
                Un buen diagnóstico depende del procesamiento de la muestra. El
                primer paso, crucial, es la fijación adecuada del material. El
                mismo debe ser colocado inmediatamente en el medio de fijación
                luego de su extracción. Si el material se estropea durante el
                proceso, es muy difícil el diagnóstico de rutina y puede hacer
                imposible la aplicación de técnicas de alta complejidad que
                requieren de una perfecta preservación del material. El fijador
                de uso rutinario es formol al 10%, preferentemente formol buffer
                (tamponado).
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem key={1} value={'index-1'}>
            <AccordionTrigger>
              ¿Cuanto tiempo puede permanecer el material en el fijador?
            </AccordionTrigger>
            <AccordionContent>
              El tiempo mínimo de fijación depende del tamaño de la pieza, lo
              importante es que el volumen del fijador sea 10 veces superior al
              del material. Biopsias pequeñas insumen un tiempo mínimo de 6
              horas. No hay un tiempo máximo ya que el fijador preserva el
              material para estudio de rutina, pero lo ideal es que no sea mayor
              a 72hrs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key={2} value={'index-2'}>
            <AccordionTrigger>
              ¿Por qué los informes demoran varios días?
            </AccordionTrigger>
            <AccordionContent>
              Los informes tardan una cantidad variable de días debido a que las
              muestras deben ser procesadas por el técnico hasta obtener un
              bloque de tejido que sea posible de cortar en un espesor de micras
              y luego colorearlo para poder ser observado a traves del
              microscopio y definir la necesidad de técnicas especiales.{' '}
              <br></br>
              <br></br>Otros factores que determinan los tiempos son: <br></br>{' '}
              Tipo de muestra: citología, biopsia, pieza quirúrgica. <br></br>
              <br></br>
              Calidad de la muestra: algunas muestras como las que contienen
              hueso requieren un proceso más largo. Las muestras con defectos de
              fijacion deben ser retratadas <br></br>
              <br></br>Técnicas requeridas: los informes de material que
              requieren de técnicas de alta complejidad tardan más que los que
              se realizan sólo con técnicas de rutina. <br></br>
              <br></br>La solicitud del estudio completa con todos los datos
              clínicos es también un elemento importante para la elaboración del
              diagnóstico, cuanto mas información, mejor.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
)
