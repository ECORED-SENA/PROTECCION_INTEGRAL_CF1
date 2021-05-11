export const global = {
  componenteFormativo:
    'Contexto sobre la estrategia de alertas del programa Familias en Acción',
  descripcionCurso:
    'El Gobierno Nacional trabaja desarrollando estrategias y metodologías específicas para la prevención y superación de la pobreza en Colombia; en este marco se encuentra el programa de transferencias monetarias condicionadas y consecuentemente, las estrategias de seguimiento garantes de su aplicación como un aporte a la erradicación de la pobreza.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Pobreza',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Pobreza monetaria',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Pobreza multidimensional',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Ruta para la superación de la pobreza',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Programas de transferencias monetarias en Colombia',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Familias en Acción',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Jóvenes en Acción',
          hash: 't_2_2',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo:
        'Estrategia de alertas para la permanencia escolar y protección integral de niños, niñas y adolescentes de Familias en Acción',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Conceptos de la estrategia',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Actores involucrados',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Actividad didáctica',
          hash: 't_3_3',
        },
      ],
    },
  ],
  subMenu: [
    /*{
      nombreRuta: 'actividad',
      icono: 'far fa-question-circle',
      titulo: 'Actividad didáctica',
      desarrolloContenidos: true,
    },*/
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'María Camila Garcia Santamaría',
    cargo: 'Líder del Equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor Metodológico y Pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'William Mogollón Marín',
      cargo: 'Consultor',
      centro: 'CORPROGRESO',
    },
    {
      nombre: 'Jairo Fernando Contreras Gutiérrez',
      cargo: 'Profesional Prosperidad Socia',
      centro: 'Oficina Asesora de Planeación',
    },
    {
      nombre: 'Martha Cecilia Arcila Aponte',
      cargo: 'Profesional Especializada Prosperidad Social',
      centro: 'DTMC Grupo de Pilotaje y Escalamiento',
    },
    {
      nombre: ['Ana Francisca Uribe Cárdenas', 'Omayra Hoyos Rojas'],
      cargo: 'Profesional Prosperidad Social',
      centro:
        'Equipo de Verificación. Programa Familias en Acción Dirección de Transferencias Monetarias Condicionadas',
    },
    {
      nombre: 'Claudia Pureza Perdomo Gómez',
      cargo: 'Profesional Especializada Prosperidad Social',
      centro:
        'GIT Territorios y Poblaciones Dirección de Transferencias Monetarias Condicionadas',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñadora instruccional',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Dayra Maritza Paz Calderón',
      cargo: 'Diseñadora y Evaluadora Instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Corrector de Estilo',
      centro: 'Centro para la Comunicación de la Industria Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del Equipo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte Organizacional',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: [
        'Adriana Ariza',
        'Angela Maldonado',
        'Gilberto Junior Rodríguez Rodríguez',
        'Jesus Antonio Vecino Valero',
        'Luis Gabriel Urueta Álvarez',
        'Maria Carolina Tamayo',
        'Wilson Andres Arenales Cáceres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Zuleidy María Ruíz Torres',
      cargo: 'Diseño Web y Producción Audiovisual',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: ['Daniel Ricardo Mutis Gómez', 'Ricardo Alfonso González Vargas'],
      cargo: 'Desarrollo Front-End',
    },
    {
      nombre: 'Veimar Celis Meléndez',
      cargo: 'Revisores de contenido',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Barzán, A., Quintero, M. L., y Hernández, A. L. (2011). Evolución del Concepto de pobreza y el enfoque multidimensional para su estudio. Quiviera, 1, 207-219.',
  },
  {
    referencia:
      'Congreso de Colombia. (8 de enero de 2019). Ley 1948 de 2019. Por medio de la cual se adoptan criterios de política pública para la promoción de la movilidad social y se regula el funcionamiento del Programa Familias en Acción.',
    link:
      'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30036083',
  },
  {
    referencia:
      'DANE. (2014). Metodología Índice de Pobreza Multidimensional (IPM). Departamento Administrativo Nacional de Estadística.',
  },
  {
    referencia:
      'DANE. (2018). Manual de conceptos, Censo Nacional de Población y Vivienda 2018. Departamento Administrativo Nacional de Estadística.',
  },
  {
    referencia:
      'DANE. (2019). Encuesta Nacional de Calidad de Vida. Departamento Administrativo Nacional de Estadística. ',
  },
  {
    referencia:
      'DANE. (2020). Boletín técnico - Pobreza monetaria en Colombia, año 2019. Departamento Administrativo Nacional de Estadística.',
  },
  {
    referencia: 'DANE. (2020). Glosario - ingresos y gastos.',
    link:
      'https://www.dane.gov.co/index.php/estadisticas-por-tema/pobreza-y-condiciones-de-vida/glosario-ingresos-y-gastos',
  },
  {
    referencia:
      'DANE. (2020). Metodología general Encuesta Nacional de Presupuestos de los Hogares -ENPH. Departamento Administrativo Nacional de Estadística.',
  },
  {
    referencia:
      'DANE. (2020). Pobreza multidimensional en Colombia (2018-2019). Comunicado de prensa. Bogotá D.C. Departamento Administrativo Nacional de Estadística.',
  },
  {
    referencia:
      'Defensoría de la Niñez. (s. f.). ¿Qué se entiende por vulneración de derechos? ',
    link:
      'https://www.defensorianinez.cl/preguntas_frecuentes/que-se-entiende-por-vulneracion-de-derechos/#:~:text=El%20concepto%20de%20%E2%80%9Cvulneraci%C3%B3n%20de,no%2C%20dependiendo%20de%20nuestra%20legislaci%C3%B3n',
  },
  {
    referencia:
      'DNP - Conpes. (2000). Documento Conpes 3081: Plan Colombia, red de apoyo social: programas de subsidios condicionados y capacitación laboral de jóvenes desempleados de bajos recursos. Departamento Nacional de Planeación - Consejo de Política Económica y Social.',
  },
  {
    referencia:
      'DNP - Conpes. (2012). Documento Conpes Social 150: Metodologías oficiales y arreglos institucionales para la medición de la pobreza en Colombia. Departamento Nacional de Planeación - Consejo Social de Política Económica y Social.',
    link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Social/150.pdf',
  },
  {
    referencia:
      'DNP. (2019). Bases Plan Nacional de Desarrollo 2018 - 2022. Departamento Nacional de Planeación.',
  },
  {
    referencia: 'DPS. (2020). Jóvenes en Acción. ',
    link:
      'https://prosperidadsocial.gov.co/sgpp/transferencias/jovenes-en-accion/',
  },
  {
    referencia:
      'DNP. (2019). Evaluación de impacto Familias en Acción. Departamento Nacional de Planeación, Dirección de Seguimiento y Evaluación de Políticas Públicas.',
  },
  {
    referencia:
      'DPS. (2019). Manual operativo Familias en Acción. Departamento Administrativo para la Prosperidad Social.',
    link:
      'http://centrodedocumentacion.prosperidadsocial.gov.co/2020/Familias-en-Accion/Manuales/M-GI-TM-3-MANUAL-OPERATIVO-FAMILIAS-EN-ACCIO%CC%81N-V5.pdf',
  },
  {
    referencia:
      'DPS. (2020). Lineamientos estrategia de alertas para la permanencia escolar y protección integral de niños, niñas y adolescente de Familias en Acción. Prosperidad Social.',
  },
  {
    referencia:
      'DPS. (2020). Observatorio de pobreza, diseño conceptual. Departamento de Prosperidad Social.',
  },
  {
    referencia:
      'DPS. (2020). Pobreza monetaria extrema en Colombia, análisis de la población en pobreza extrema en el 2018. Departamento de Prosperidad Social.',
  },
  {
    referencia:
      'Instituto Colombiano de Bienestar Familiar. (27 de diciembre de 2010). Resolución 5929 de 2010. Por la cual se aprueba los lineamientos técnico administrativos de ruta de actuaciones y modelo de atención para el restablecimiento de derechos de los niños, niñas y adolescentes y mayores de 18 años con discapacidad, con sus derechos amenazados, inobservados o vulnerados.',
    link:
      'https://www.icbf.gov.co/sites/default/files/resolucion_5929_de_2010.pdf',
  },
  {
    referencia:
      'ONU. (1995). Declaración Cumbre Mundial sobre Desarrollo Social. Organización de las Naciones Unidas.',
  },
  {
    referencia:
      'Prosperidad Social. (2020). Lineamientos del componente de bienestar comunitario. Programa Familias en Acción. Dirección de Transferencias Monetaria Condicionadas.',
  },
  {
    referencia:
      'Rama Judicial. (s. f.). Sistema de responsabilidad penal juvenil. ',
    link:
      'https://www.ramajudicial.gov.co/web/portal-ninos-y-ninas/sistema-de-responsabilidad-penal-para-adolescentes',
  },
  {
    referencia:
      'SNBF. (2015). Manual operativo Sistema Nacional de Bienestar Familiar. Instituto Colombiano de Bienestar Familiar.',
  },
]

export const glosario = [
  {
    termino: 'Amenaza',
    significado:
      'consiste en toda situación de inminente peligro o de riesgo para el ejercicio de los derechos de todos los niños, las niñas o los adolescentes. En tanto, la vulneración es toda situación de daño, lesión o perjuicio que impide el ejercicio pleno de los derechos de los niños, niñas y adolescentes (Resolución 5929 de 2010).',
  },
  {
    termino: 'corresponsabilidad',
    significado:
      'se entiende como la responsabilidad compartida entre el Gobierno nacional, las entidades territoriales y las familias participantes, quienes asumen una serie de compromisos para la implementación y operación del Programa Familias en Acción y el logro de los objetivos establecidos (DPS, 2019).',
  },
  {
    termino: 'Enlace municipal Familias en Acción',
    significado:
      'actúa como el delegado directo del alcalde para los procesos operativos y representante del programa en la respectiva jurisdicción. Coordina y apoya la ejecución de las acciones del componente de bienestar comunitario (DPS, 2019).',
  },
  {
    termino: 'Familias en Acción',
    significado:
      'es un programa de Transferencias Monetarias Condicionadas (TMC) que inicia su operación a finales del año 2000, con el fin de mitigar el impacto de la recesión económica sobre las familias más pobres del país. Orientado a la entrega de incentivos, condicionados a las asistencias a las atenciones en salud individuales, de los niños y niñas en primera infancia y a la asistencia escolar de los niños, niñas y adolescentes en edad escolar (DPS, 2019).',
  },
  {
    termino: 'Hogar',
    significado:
      'Persona o grupo de personas, parientes o no, que ocupan la totalidad o parte de una vivienda; atienden necesidades básicas con cargo a un presupuesto común y generalmente comparten las comidas. También constituyen un hogar las personas que se asocian para vivir bajo el mismo techo, aunque no compartan las comidas. En una vivienda pueden encontrarse varios hogares si existen grupos de personas que viven en una parte de la vivienda y preparan sus comidas por separado. También pueden estar constituidos por personas no parientes, como tres (3) amigos que se asocian para compartir el lugar de alojamiento. Los empleados del servicio doméstico y sus familiares, los trabajadores y sus familiares forman parte del hogar siempre y cuando duerman en la misma vivienda donde trabajan (DANE, 2018).',
  },
  {
    termino: 'Índice de pobreza multidimensional',
    significado:
      'indicador oficial mediante el cual se mide el nivel de pobreza según dimensiones que reflejan las privaciones que enfrenta un hogar. Este índice brinda información sobre incidencia, brecha y severidad de la pobreza. Se emplea para el diseño y seguimiento de la política pública (DPS, 2019).',
  },
  {
    termino: 'Ingreso mensual disponible',
    significado:
      'son los ingresos que recibe una persona llevados a mes después de restar las deducciones de ley a los ingresos por salario y los aportes que hacen a la seguridad social los independientes y rentistas. La sumatoria de los ingresos de las personas que componen la unidad de gasto, da como resultado el ingreso disponible del hogar (DANE, 2020).',
  },
  {
    termino: 'Inobservancia',
    significado:
      'consiste en el incumplimiento, omisión o negación de acceso a un servicio, o de los deberes y responsabilidades ineludibles que tienen las autoridades administrativas, judiciales, tradicionales nacionales o extranjeras, actores del Sistema Nacional de Bienestar Familiar, sociedad civil y personas naturales, de garantizar, permitir o procurar el ejercicio pleno de los derechos de los niños, niñas o adolescentes nacionales y extranjeros que se encuentren en el territorio colombiano o fuera de él (SNBF, 2015).',
  },
  {
    termino: 'Línea de pobreza',
    significado:
      'es el resultado de combinar dos elementos, a saber: el valor de la canasta básica de alimentos (línea de pobreza extrema) y el coeficiente de Orshansky. Es la multiplicación del valor de la línea a de pobreza extrema por el coeficiente de Orshansky (DANE, 2020).',
  },
  {
    termino: 'Pobreza',
    significado:
      'condición caracterizada por una privación severa de necesidades humanas básicas, incluyendo alimentos, agua potable, instalaciones sanitarias, salud, vivienda, educación e información. La pobreza depende no sólo de ingresos monetarios sino también del acceso a servicios (ONU, 1995).',
  },
  {
    termino: 'Pobreza extrema monetaria',
    significado:
      'ocurre cuando el ingreso mensual per cápita de un hogar se sitúa por debajo de la línea de indigencia (pobreza extrema) monetaria (DANE, 2020).',
  },
  {
    termino: 'Pobreza monetaria',
    significado:
      'ocurre cuando el ingreso mensual per cápita de un hogar se sitúa por debajo de la línea de pobreza monetaria (DANE, 2020).',
  },
  {
    termino: 'Sisbén',
    significado:
      'sistema de información diseñado por el Gobierno nacional para identificar a las familias, hogares o individuos potenciales participantes de programas sociales. Su objetivo es establecer un mecanismo técnico, objetivo, equitativo y uniforme de identificación de posibles participantes del gasto social para ser usado por las entidades territoriales y ejecutores de política social del orden nacional (DPS, 2019).',
  },
  {
    termino: 'Transferencias monetarias',
    significado:
      'incentivos en las familias beneficiarias mediante el condicionamiento de una transferencia económica en diferentes servicios como salud, nutrición y educación entre otros.',
  },
  {
    termino: 'Vulneración de derechos',
    significado:
      'corresponde a cualquier trasgresión a los derechos de niños, niñas y adolescentes establecidos en la Convención de los Derechos del Niño, la cual puede ser constitutiva de delito o no, dependiendo de nuestra legislación. Independientemente de ello, cualquier vulneración de derechos es grave, por lo que los Estados deben realizar todas las acciones destinadas a prevenir estos hechos y a entregar mecanismos de restitución de derechos una vez ya vulnerados (Defensoría de la Niñez, s. f.).',
  },
]

export const complementario = [
  {
    texto:
      'DPS. (2020). Lineamientos estrategia de alertas para la permanencia escolar y protección integral de niños, niñas y adolescente de Familias en Acción. Prosperidad Social.',
    tipo: 'Documento PDF',
    descarga: '/downloads/Anexo_2_Lineamientos_estrategia_de_alertas.pdf',
  },
  {
    texto:
      'DNP - Conpes. (2012). Documento Conpes Social 150: Metodologías oficiales y arreglos institucionales para la medición de la pobreza en Colombia. Departamento Nacional de Planeación - Consejo Social de Política Económica y Social.',
    tipo: 'Página web',
    link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Social/150.pdf',
  },
  {
    texto:
      'DPS. (2019). Manual operativo familias en acción. Departamento Administrativo para la Prosperidad Social.',
    tipo: 'Página web',
    link:
      'http://centrodedocumentacion.prosperidadsocial.gov.co/2020/Familias-en-Accion/Manuales/M-GI-TM-3-MANUAL-OPERATIVO-FAMILIAS-EN-ACCIO%CC%81N-V5.pdf',
  },
]
