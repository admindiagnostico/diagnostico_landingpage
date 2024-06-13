import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature6 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Laboratorio de Anatomía Patológica
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">La anatomía patológica</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                es la rama de la medicina que se ocupa del estudio de las
                enfermedades humanas, por medio de técnicas morfológicas.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">El fin último</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                de esta especialidad es el diagnóstico correcto de biopsias,
                piezas quirúrgicas, citologías y autopsias. Leer más:
                https://www.diagnosticosrl.com/
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">La anatomía patológica</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                es una especialidad médica que posee un cuerpo doctrinal de
                carácter básico que determina que sea, por una parte, una
                disciplina académica autónoma y, por otra, una unidad funcional
                en la asistencia médica. Leer más:
                https://www.diagnosticosrl.com/
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
