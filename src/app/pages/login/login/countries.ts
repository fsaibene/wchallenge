export interface Country {
  name: string;
  provinces: string[];
}
export const COUNTRIES = [
  {
    name: 'Argentina',
    provinces: ['Buenos Aires', 'Chaco', 'Río Negro', 'Entre Rios', 'La Pampa']
  },
  {
    name: 'Chile',
    provinces: ['Santiago', 'La Serena', 'Osorno', 'Concepcion', 'Valdivia']
  },
  {
    name: 'Uruguay',
    provinces: ['Artigas', 'Canelones', 'Cerro Lago', 'Colonia', 'Durazno']
  },
  {
    name: 'Paraguay',
    provinces: ['Amambay', 'Asunción', 'Boquerón', 'Caazapa', 'Cordillera']
  },
  {
    name: 'Perú',
    provinces: ['Lima', 'Callao', 'Cusco', 'Junín', 'Pasco']
  }
] as Country[]

