import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es requerido."),
  responsibleName: z.string().min(1, "El nombre del responsable es requerido."),
  email: z.string().email("Email inválido.").min(1, "El email es requerido."),
  phone: z.string().optional(),
  position: z.string().optional(),
  industry: z.string().min(1, "El sector es requerido."),
  employeeCount: z.string().min(1, "El número de empleados es requerido."),
});

const industryOptions = [
  "Manufactura",
  "Servicios",
  "Retail",
  "Construcción",
  "Alimentos y Bebidas",
  "Tecnología",
  "Financiero",
  "Salud",
  "Educación",
  "Otro",
];

const employeeCountOptions = [
  "1-10 empleados",
  "11-50 empleados",
  "51-200 empleados",
  "201-500 empleados",
  "501+ empleados",
];

const DiagnosticoESG = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      responsibleName: "",
      email: "",
      phone: "",
      position: "",
      industry: "",
      employeeCount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="bg-gradient-to-br from-navy to-navy/90 py-12 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-navy mb-8">
            Déjanos tus datos para darte un seguimiento profesional
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de la empresa *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese el nombre de su empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="responsibleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo del responsable *</FormLabel>
                      <FormControl>
                        <Input placeholder="Su nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email empresarial *</FormLabel>
                      <FormControl>
                        <Input placeholder="correo@empresa.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono de contacto</FormLabel>
                      <FormControl>
                        <Input placeholder="+52 818 000 0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo o posición</FormLabel>
                      <FormControl>
                        <Input placeholder="Director, Gerente, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sector/Industria *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione su sector" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industryOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de empleados *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione el tamaño de su empresa" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {employeeCountOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-center pt-4">
                <Button type="submit" size="lg" variant="cta">ENVIAR</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticoESG;
