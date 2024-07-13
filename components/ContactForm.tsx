import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Check, MoveRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert } from '@/components/ui/alert'

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.'
  }),
  email: z.string().email({
    message: 'Por favor, ingrese una dirección de correo electrónico válida.'
  }),
  asunto: z.string().min(2, {
    message: 'El asunto debe tener al menos 2 caracteres.'
  }),
  mensaje: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.'
  })
})

export const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    type: '',
    message: ''
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    }
  })

  async function onSubmit(values) {
    setSubmissionStatus({ type: 'info', message: 'Enviando...' })
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log('Success:', data)
      setSubmissionStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito!'
      })
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      setSubmissionStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, intente de nuevo.'
      })
    }
  }

  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <div>
                <Badge>Contacto</Badge>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
                  Contáctenos
                </h4>
                <p className='max-w-sm text-left text-lg leading-relaxed tracking-tight text-muted-foreground'>
                  Envíenos un mensaje y nos pondremos en contacto con usted lo
                  antes posible.
                </p>
                <div className='mt-4 flex flex-col gap-2 text-lg leading-relaxed tracking-tight text-muted-foreground'>
                  <p>
                    <strong>Horario: </strong>Lunes a Viernes de 9AM a 6PM
                  </p>
                  <p>
                    <strong>Dirección: </strong>
                    <a
                      href='https://www.google.com/maps/search/?api=1&query=2+de+Mayo+1468+CP11600+Montevideo+Uruguay'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      2 de Mayo 1468 CP11600 Montevideo - Uruguay
                    </a>
                  </p>
                  <p>
                    <strong>Teléfono: </strong>+598-26285394
                  </p>
                  <p>
                    <strong>Celular: </strong>+598-91325971
                  </p>
                  <p>
                    <strong>E-mail: </strong>laboratorio@diagnosticosrl.com.uy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex w-full max-w-sm flex-col gap-4 rounded-md border p-8'>
              <p className='text-xl font-semibold'>Contáctenos</p>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <div className='grid w-full max-w-sm items-center gap-1'>
                  <Label htmlFor='nombre'>Nombre</Label>
                  <Input
                    id='nombre'
                    {...form.register('nombre')}
                    aria-invalid={
                      form.formState.errors.nombre ? 'true' : 'false'
                    }
                  />
                  {form.formState.errors.nombre && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors.nombre.message}
                    </p>
                  )}
                </div>
                <div className='grid w-full max-w-sm items-center gap-1'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    {...form.register('email')}
                    aria-invalid={
                      form.formState.errors.email ? 'true' : 'false'
                    }
                  />
                  {form.formState.errors.email && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div className='grid w-full max-w-sm items-center gap-1'>
                  <Label htmlFor='asunto'>Asunto</Label>
                  <Input
                    id='asunto'
                    {...form.register('asunto')}
                    aria-invalid={
                      form.formState.errors.asunto ? 'true' : 'false'
                    }
                  />
                  {form.formState.errors.asunto && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors.asunto.message}
                    </p>
                  )}
                </div>
                <div className='grid w-full max-w-sm items-center gap-1'>
                  <Label htmlFor='mensaje'>Mensaje</Label>
                  <Textarea
                    id='mensaje'
                    {...form.register('mensaje')}
                    aria-invalid={
                      form.formState.errors.mensaje ? 'true' : 'false'
                    }
                  />
                  {form.formState.errors.mensaje && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors.mensaje.message}
                    </p>
                  )}
                </div>
                <Button type='submit' className='w-full gap-4'>
                  Enviar <MoveRight className='h-4 w-4' />
                </Button>
              </form>
              {submissionStatus.message && (
                <Alert
                  variant={
                    submissionStatus.type === 'error'
                      ? 'destructive'
                      : 'default'
                  }
                  className='mt-4'
                >
                  {submissionStatus.message}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
