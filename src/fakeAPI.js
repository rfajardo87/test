const states = [
    { id: 1, name: 'Aguascalientes' },
    { id: 2, name: 'Baja California' },
    { id: 3, name: 'Baja California Sur' },
    { id: 4, name: 'Campeche' },
    { id: 5, name: 'Chiapas' },
    { id: 6, name: 'Mexico City' },
    { id: 7, name: 'Chihuahua' },
    { id: 8, name: 'Coahuila' },
    { id: 9, name: 'Colima' },
    { id: 10, name: 'Durango' },
    { id: 11, name: 'Guanajuato' },
    { id: 12, name: 'Guerrero' },
    { id: 13, name: 'Hidalgo' },
    { id: 14, name: 'Jalisco' },
    { id: 15, name: 'Mexico' },
    { id: 16, name: 'Michoacan' },
    { id: 17, name: 'Morelos' },
    { id: 18, name: 'Nayarit' },
    { id: 19, name: 'Nuevo Leon' },
    { id: 20, name: 'Oaxaca' },
    { id: 21, name: 'Puebla' },
    { id: 22, name: 'Queretaro' },
    { id: 23, name: 'Quintana Roo' },
    { id: 24, name: 'San Luis Potosi' },
    { id: 25, name: 'Sinaloa' },
    { id: 26, name: 'Sonora' },
    { id: 27, name: 'Tabasco' },
    { id: 28, name: 'Tamaulipas' },
    { id: 29, name: 'Tlaxcala' },
    { id: 30, name: 'Veracruz' },
    { id: 31, name: 'Yucatan' },
    { id: 32, name: 'Zacatecas' },
  ];
  
  export const getStates = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(states);
      }, 2000)
    );