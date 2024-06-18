import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Preguntas frecuentes
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 1 }).map((_, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>
                ¿Como deben enviarse las muestras?
              </AccordionTrigger>
              <AccordionContent>
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem key={1} value={"index-1"}>
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
          <AccordionItem key={2} value={"index-2"}>
            <AccordionTrigger>
              ¿Por qué los informes demoran varios días?
            </AccordionTrigger>
            <AccordionContent>
              Los informes tardan una cantidad variable de días debido a que las
              muestras deben ser procesadas por el técnico hasta obtener un
              bloque de tejido que sea posible de cortar en un espesor de micras
              y luego colorearlo para poder ser observado a traves del
              microscopio y definir la necesidad de técnicas especiales.{" "}
              <br></br>
              <br></br>Otros factores que determinan los tiempos son: <br></br>{" "}
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
);
