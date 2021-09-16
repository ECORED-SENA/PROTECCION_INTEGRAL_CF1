<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Pobreza

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h3.mb-0 El concepto de pobreza es dinámico.  
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p No ha sido el mismo a lo largo del tiempo ni en todos los lugares, ya que se ha venido ajustando en la medida en que se ha profundizado su análisis, permitiendo la vinculación de nuevas variables y actores. Su comprensión pasa en muchas ocasiones por las formas con las que se cuenta para su medición, así como los resultados que estos ejercicios puedan arrojar (DPS, 2020), por lo que puede contar con interpretaciones asociadas a las diferentes dinámicas locales. A pesar de ello, es importante destacar la existencia de iniciativas que requieren de la generalización de conceptos, como medio para la unificación de criterios que favorezcan los ejercicios de medición y análisis, así como la posterior formulación de estrategias de mayor alcance, tales como la Organización de Naciones Unidas (ONU), quienes en la Cumbre Mundial sobre Desarrollo Social de 1995 la definieron como:
    .row.mb-5
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.p-4.mb-3
          .bloque-texto-b__texto.h3.mb-0 La condición caracterizada por una privación severa de necesidades humanas básicas, incluyendo alimentos, agua potable, instalaciones sanitarias, salud, vivienda, educación e información
          span.mb-3 - (ONU, 1995)
    p.mb-5 La siguiente figura describe el desarrollo concepto de pobreza.
    .h5.mb-5.text-center Concepto de pobreza
    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='Texto que describa la imagen')
      figcaption Nota: con base en Barzán, Quintero y Hernández (2011).

    TabsC.tarjeta.tarjeta--azul.mb-5
      .py-3.py-md-4(titulo="Años 40")
        .row
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_1/img_31.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            .h4 Años 40
            p Se centraban en el ingreso como variable de medición.             
      .py-3.py-md-4(titulo="Décadas 60 y 70")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_32.png', alt='Texto que describa la imagen')
          .col-md-6
            .h4 Décadas de los 60 y 70
            p Toma fuerza el enfoque de necesidades básicas, el cual empieza a proporcionar una mirada multidimensional al vincular nuevas variables al análisis, lo que resulta de gran utilidad para la formulación e implementación de políticas públicas.        
      .py-3.py-md-4(titulo="Siglo XX")
        .row
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_1/img_33.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            .h4 Dos últimas décadas del siglo XX
            p El enfoque de necesidades básicas continúa consolidándose, ampliando sus posibilidades para caracterizar la pobreza con información sobre el desarrollo de las “capacidades” humanas que no se ven reflejadas en el ingreso, lo cual ha permitido en diferentes lugares su oficialización en los marcos normativos, tal como sucedió con el índice de Necesidades Básicas Insatisfechas (NBI), que se extendió en Latinoamérica debido a las contribuciones de la Comisión Económica Para América Latina y el Caribe (CEPAL), (Barzán Ojeda, Quintero Soto, & Hernández Espitia, 2011).   
          

      .py-3.py-md-4(titulo="Nuevo milenio")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_34.png', alt='Texto que describa la imagen')
          .col-md-6
            .h4 Principios del nuevo milenio
            p El estudio multidimensional de la pobreza ya se encuentra mucho más arraigado, contando con iniciativas como los Objetivos de Desarrollo del Milenio (ODM), firmada por 189 países, y la presentación del índice de Pobreza Multidimensional (IPM), el cual fue adoptado como metodología de medición de pobreza en varios países.  


    p.mb-5 Para conocer mejor la evolución del concepto de pobreza, revisar la siguiente línea de tiempo y analizar cada periodo y sus características más relevantes.

    p.mb-5 En Colombia, con respecto a la medición de la pobreza se ha seguido la clasificación propuesta por Amartya Sen, quien considera que puede hacerse de manera directa e indirecta: 

    .row.mb-5
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.p-4.mb-3
          .bloque-texto-b__texto.h3.mb-0 La medición directa evalúa los resultados de satisfacción (o no privación) que tiene un individuo respecto a características que se consideran vitales como salud, educación, empleo, entre otras. Por la otra, la medición indirecta evalúa la capacidad de adquisición de bienes y servicios que tienen los hogares
          span.mb-3 - (DANE, 2020)          

    p.mb-5 En esta línea, el documento Conpes 150 indica que en Colombia se reconocen dos metodologías: una basada en los ingresos monetarios, conocida como pobreza monetaria (indirecta), y otra en las dimensiones estructurales que la determinan (directa), denominada pobreza multidimensional, las cuales no son excluyentes en sí mismas y, por el contrario, en conjunto permiten una comprensión más amplia del fenómeno (DNP - Conpes, 2012). 

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/tema_2/img_4.png') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Ambas metodologías permiten entender cómo los hogares en situación de pobreza presentan dificultades para garantizar la mejora de su nivel y calidad de vida, así como el correcto desarrollo de las capacidades que como seres humanos deben tener sus integrantes, y en la medida en la que se profundiza, fomenta el desarrollo de otros fenómenos como desnutrición, infraconsumo#[sup 1], inseguridad, bajos niveles educativos, inserción inestable al sector productivo y condiciones de habitabilidad y salubridad precarias, las cuales no solamente tienen efecto en la satisfacción de una serie de necesidades básicas materiales, sino también en varios aspectos de naturaleza no material, tales como la autorrealización personal, movilidad y participación social, así como de derechos humanos, entre otros, que se entrelazan en una relación interdependiente que garantiza su permanente reproducción (DNP - Conpes, 2012).

    .subref.mb-5
      p #[sup 1] A nivel social, el infraconsumo hace referencia a una situación en la cual la capacidad de adquirir productos por parte de los hogares es inferior a la producción existente, lo que conlleva a un aumento de las existencias en las empresas que conlleva a una reducción drástica de los precios, afectaciones a la estabilidad de las empresas y por ende de sus plazas de trabajo, es decir, puede generar desempleo, disminución de la capacidad adquisitiva de los hogares y una reducción en la producción. 
    
    p.mb-3 Finalmente, dentro de este mismo concepto es importante resaltar a aquellas personas u hogares cuyas privaciones llegan al punto de no poder garantizar la satisfacción de su necesidad más básica, la de alimentarse, quienes se consideran ubicados en una categoría denominada pobreza extrema y por tanto requieren de atención especial por parte del Estado debido a su nivel mayor de vulnerabilidad#[sup 2].

    .subref.mb-5
      p #[sup 2] “El Departamento Administrativo para la Prosperidad Social, entidad responsable a nivel nacional de diseñar, coordinar e implementar políticas públicas para la superación de la pobreza y la equidad social, ha venido dirigiendo sus esfuerzos en erradicar la pobreza extrema de Colombia, trabajo que requiere no solo del rediseño de sus programas sino de la articulación con otras entidades nacionales y territoriales en el marco de una renovada propuesta institucional denominada Ruta para la Superación de la Pobreza” (DPS, 2020).

    p.mb-5 A continuación, se presentan cada una de estas metodologías, así como su estado para el año 2019:

    .h5.text-center.mb-5 Modelos de medición de pobreza en Colombia.

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota: con base en Barzán, Quintero y Hernández (2011).

    .titulo-segundo
      #t_1_1.h4 1.1	Pobreza monetaria

    p.mb-5 La pobreza monetaria:

    .row.mb-5
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.p-4.mb-3
          .bloque-texto-b__texto.h3.mb-0 Ocurre cuando el ingreso mensual per cápita de un hogar se sitúa por debajo de la línea de pobreza monetaria
          span.mb-3 - (DANE, 2020)

    .row.align-items-center.mb-5
      .col-lg-8
        p.mb-3 Para su comprensión es importante considerar que el ingreso mensual per cápita#[sup 3]  es la cantidad de ingresos que percibe un hogar en este período de tiempo dividido entre el número de sus integrantes, y que la línea de pobreza monetaria es un umbral que determina el nivel de ingresos per cápita mínimo con el cual debe contar un hogar para adquirir una canasta básica de bienes alimentarios y no alimentarios que les garantice su supervivencia e identificar la distancia existente entre los hogares más pobres y el umbral. 

        p Para una mejor comprensión revisar el siguiente ejemplo.

      .col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_10.png")

    

    .subref.mb-5
      p #[sup 3] “Ingreso per cápita de la unidad de gasto: es el resultado de dividir el ingreso corriente disponible de la unidad de gasto entre el número de personas que conforman la unidad de gasto”. La unidad de gasto “equivale a los miembros del hogar diferentes al servicio doméstico y sus familiares, pensionistas y otros trabajadores dedicados al hogar”. (DANE, 2020).


    p.mb-5 Esto significa que si los ingresos percibidos por el hogar en un determinado período de tiempo son inferiores al costo definido por el umbral, el hogar es considerado como pobre monetario. En el caso de la pobreza monetaria extrema, el límite del umbral está determinado por el valor que representa el ingreso mínimo per cápita necesario para cubrir el costo de una canasta básica de alimentos, que tenga los requerimientos calóricos adecuados (DANE, 2020). 

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-lg-4
          img.img-a(src="@/assets/curso/tema_1/img_11.png")
        .col-lg-8
          p La línea de pobreza y pobreza extrema no es estática, es decir que puede variar de acuerdo con los cambios que se pueden presentar en los hábitos de consumo de los hogares, en su nivel de ingreso per cápita e incluso en la variación de las metodologías para su medición. De aquí es posible inferir que la línea de pobreza no es la misma en todo tiempo y lugar, por lo que se requiere acudir a herramientas estadísticas, tales como la Gran Encuesta Integrada de Hogares (GEIH), que proporciona los insumos para identificar el ingreso de los hogares, y la Encuesta Nacional de Presupuesto de los Hogares (ENPH), la cual permite obtener información sobre el monto y la distribución de los gastos de los hogares colombianos (DANE, 2020), con el fin de garantizar la actualización de la información. 

    p.mb-3 En Colombia, para el año 2019 se estableció el límite para la pobreza monetaria extrema en $137.350,00 y para pobreza monetaria en $327.674,00. En un hogar compuesto por cuatro personas, por ejemplo, para estar por encima de la línea de pobreza extrema monetaria se requiere que sus ingresos sumados sean superiores a $549.400,00 para superar la línea de pobreza extrema y de $1.310.696,00 para estar por encima de la línea de pobreza monetaria#[sup 4], de otro modo, hará parte del 35,7% de hogares que de acuerdo con el Departamento Administrativo Nacional de Estadística (DANE), se encuentran en situación de pobreza monetaria a 2019, y el 9,6% que están en pobreza extrema monetaria.

    .subref.mb-5
      p #[sup 4] El valor asignado a la línea de pobreza señalado corresponde al total nacional, sin embargo, puede variar de acuerdo con la ubicación. Para 2019, la línea de pobreza en cabeceras municipales se estableció en $361.594,00, en centros poblados y rural disperso en $210.969,00, en las 13 ciudades principales y sus áreas metropolitanas en $400.698,00 (DANE, 2020). 

    .row.align-items-start.mb-5
      .col-lg-6
        .h5.text-center Incidencia pobreza monetaria en Colombia 2018 - 2019.
        p.mt-3 La incidencia o tasa de pobreza monetaria mide el porcentaje de la población pobre respecto al total de la población de un territorio.
        figure.mt-5
          img.img-a(src='@/assets/curso/tema_1/img_12.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
          figcaption.mt-2 Nota: DANE (2020). Cálculos con base en la Gran Encuesta Integrada de 
            br 
            | Hogares 2018-2019.
      .col-lg-6
        .h5.mb-5 Distribución del ingreso per cápita de la unidad de gasto y líneas de pobreza monetaria y pobreza monetaria extrema.
        figure
          img.img-a(src='@/assets/curso/tema_1/img_13.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
          figcaption.mt-3 Nota: DANE (2020). Cálculos con base en la Gran Encuesta Integrada de Hogares.


    .titulo-segundo
      #t_1_2.h4 1.2	Pobreza multidimensional

    p.mb-5 La definición de la pobreza a partir de los ingresos si bien ha sido una herramienta útil para la formulación de políticas públicas, resulta insuficiente para la identificación de la totalidad de factores que intervienen en el fenómeno y la manera en la que lo hacen, por lo que en Colombia se ha trabajado para la adopción de modelos que tengan en consideración otras dimensiones, tomando como fundamento los aportes de Amartya Sen, la Comisión Sarkosy y más recientemente los del Oxford Poverty & Human Development Initiative. Estos últimos propusieron en 2007 el Índice de Pobreza Multidimensional (IPM), el cual entiende que la pobreza en cada hogar o sociedad no se presenta por las mismas razones, por lo que no se puede medir por medio de un mismo parámetro (ingresos), adicionalmente, proporciona una mayor variedad de factores de análisis que permiten la formulación de políticas públicas de mayor alcance (DANE, 2014). 


    .bloque-texto-a.p-4.p-md-5.mb-3
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/tema_1/img_35.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4           
            p.mt-3 El IPM se ajusta a las características de la pobreza de cada país donde es adoptado, disponiendo para el análisis un grupo de dimensiones cuya capacidad de acceso por parte de los hogares es la que determina cuántas y cuáles privaciones tiene, y por ende su situación de pobreza o no#[sup 5]. Para el caso colombiano, el Conpes 150 de 2012, Metodologías oficiales y arreglos institucionales para la medición de la pobreza en Colombia, reconoce cinco (5) dimensiones:

    .subref.mb-5
      p #[sup 5] “Para el cálculo del IPM se utiliza al hogar como unidad de análisis. Esto quiere decir que las personas al interior de un hogar experimentan simultáneamente las privaciones y no cada persona de forma aislada” (DNP - Conpes, 2012).

    .row.justify-content-center.mb-5
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_1/img_14.png").img-fluid
              .card__copy 
                .h5.mb-3 1. Condiciones educativas del hogar
                p Es medida a través del logro educativo y alfabetización de mayores de 15 años, lo cual sugiere que los hogares tienen retos importantes para educar a los miembros más jóvenes y en algunos casos completar la educación de los mayores.
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_1/img_15.png").img-fluid
              .card__copy 
                .h5.mb-3 2. Condiciones de la niñez y juventud
                p La primera infancia contempla la franja poblacional desde la gestación hasta los 5 años. Otras variables como el rezago escolar, la inasistencia escolar y el trabajo infantil, son flagelos que deben enfrentar muchos de los hogares en Colombia. La falta de ingresos hace que los niños, niñas y los jóvenes abandonen el sistema escolar con el objetivo de aportar recursos económicos a sus hogares.
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_1/img_16.png").img-fluid
              .card__copy 
                .h5.mb-3 3. Trabajo
                p La superación de la pobreza a través de la inclusión social involucra la garantía de un empleo formal y de estabilidad laboral. Estas dos condiciones son aseguradores de un ingreso presente y futuro, que permite condiciones de vida dignas para trabajadores y futuros pensionados.  
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_1/img_16.png").img-fluid
              .card__copy 
                .h5.mb-3 4. Salud y acceso a servicios públicos domiciliarios
                p El derecho a la salud significa que los Gobiernos deben crear las condiciones que permitan a todas las personas vivir lo más saludablemente posible. El estado de salud individual y colectiva en una sociedad condiciona de manera profunda e inevitable su desarrollo intelectual, económico, productivo y social.
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_1/img_17.png").img-fluid
              .card__copy 
                .h5.mb-3 5. Condiciones de la vivienda
                p Contemplar las condiciones de la vivienda responde a que el acceso a los servicios públicos domiciliarios permite un pleno desarrollo de las actividades del hogar y mejora el bienestar de los individuos (DANE, 2014). 

    .h5.text-center.mb-3 Pobreza multidimensional, dimensiones e indicadores.

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota: con base en Barzán, Quintero y Hernández (2011).

    p.mb-5 Para la medición, cada una de estas dimensiones cuenta con un el mismo valor de 0,2, lo que sumados da un total de 1,0. En cada dimensión hay un grupo de indicadores (15 en total), los cuales cuentan con una ponderación diferente, pero sumados en cada una de sus dimensiones da el valor de 0,2. Un hogar es considerado pobre multidimensional cuando presenta al menos el 0,33 (33%) de privaciones en los 15 indicadores y cinco (5) dimensiones que componen el ejercicio de medición (DNP - Conpes, 2012).

    .row.align-items-center.mb-5
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_20.png")
      .col-lg-8
        p De acuerdo con lo anterior, para el año 2019 se identifica que en Colombia el 17,5 % de hogares se encuentran en situación de pobreza multidimensional, siendo la zona rural dispersa y centros poblados donde mayormente se encuentra concentrada. En materia de dimensiones e indicadores, las privaciones con mayor porcentaje de hogares son trabajo informal (72,9 %), bajo logro educativo (44 %) y rezago escolar (25,8 %). 

    .row.align-items-center.mb-3
      .col-lg-8
        p Lo anterior significa que en Colombia la mayor parte de los hogares perciben un ingreso proveniente del desarrollo de una actividad informal, que cerca de la mitad de los hogares cuentan con un jefe de hogar con menos de nueve (9) años de escolaridad, y alrededor de una cuarta parte de los hogares cuentan con miembros que se encuentran cursando un grado inferior al que deberían acorde con su edad, lo que se traduce en dificultades para contar con un servicio de salud, de pensiones y caja de compensación familiar con los beneficios que tiene la población cotizante, limitaciones para la generación de oportunidades laborales y productivas para la movilización social y una subvaloración de la educación como vehículo del progreso personal, familiar y comunitario que solamente aporta a la reproducción de estos mismos patrones. 
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_21.png")

    p.mb-5 Los indicadores de trabajo infantil (1,7%), material inadecuado de paredes exteriores (2,6%) e inasistencia escolar (2,7%) representan el menor porcentaje de hogares. 

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_1/img_22.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Revisar la siguiente tabla donde se presenta el porcentaje de hogares por indicador en los años 2018 y 2019.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Tabla1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .h5.text-center.mb-3 Pobreza multidimensional en Colombia (2019).

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_23.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).

    p.mb-5 Estos datos permiten identificar y evaluar las acciones que en materia de políticas públicas ya se han adelantado, se están adelantando o se deberían adelantar con el fin de garantizar la mejora de la calidad de vida de los hogares más vulnerables y un ambiente que permita un adecuado desarrollo humano.


    .titulo-segundo
      #t_1_3.h4 1.3	Ruta para la superación de la pobreza

    p.mb-3 En este marco, desde Prosperidad Social se propone la Ruta para la Superación de la Pobreza#[sup 6], una iniciativa orientada al aumento de las oportunidades de inclusión social y productiva para hogares en situación de pobreza, que permita la superación de privaciones sociales y de las barreras en la generación de ingresos sostenibles, lo cual será posible por medio de una oferta integral y concurrente, así como de una caracterización detallada de hogares y territorio, en donde se identifican las necesidades de inclusión social y productiva y se prioriza el conjunto de intervenciones.

    .subref.mb-5
      p #[sup 6] La Ruta de Superación de Pobreza es una iniciativa que se encuentra en fase de diseño, por lo que algunos de los componentes acá señalados podrían cambiar en su intensión o funcionamiento.

    p.mb-5 Los hogares focalizados para ingresar en la Ruta son:

    .row.justify-content-center.mb-5
      .col-lg-8
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
          .list__txt
            p.m-top Aquellos en situación de pobreza extrema monetaria y pobreza multidimensional.
        hr.bd-hr
      .col-lg-8
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
          .list__txt
            p.m-top Los que se encuentran en pobreza monetaria extrema y no estén en pobreza multidimensional. 
        hr.bd-hr
      .col-lg-8
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
          .list__txt
            p.m-top Quienes se encuentran en pobreza monetaria y pobreza multidimensional.
      
    .h4.mb-5 Revisar con detenimiento la siguiente figura donde se presentan los cuadrantes de pobreza.

    .h5.text-center.mb-5 Cuadrantes de pobreza.

    figure.mb-5
      img.mb-2.img-a(src='@/assets/curso/tema_1/img_25.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota: con base en Prosperidad Social (2020).

    p.mb-3 Para su desarrollo, la Ruta establece como punto de partida la Estrategia Red Unidos, en la cual los hogares son caracterizados para identificar los factores que determinan su situación de pobreza y posteriormente podrán ser enrutados a los diferentes programas con los que cuenta Prosperidad Social, de acuerdo con los criterios de focalización y presupuestales de cada uno de ellos. Esto permite que los hogares experimenten un proceso de vinculación social y productiva en donde puedan garantizar el acceso prioritario a programas de educación, salud y complementarios que les permita trabajar sus habilidades para la vida y oportunidades productivas; lo cual, acompañado a la debida infraestructura social y un incentivo al consumo, hará que los hogares tengan las herramientas para salir de su situación de pobreza. Finalmente, se lleva a cabo la evaluación del recorrido realizado, los programas en los que ha participado y los resultados obtenidos, con el fin de vincular el hogar a la oferta pública restante que les permita continuar con su proceso de manera sostenida.

    p.mb-3 En este transcurso los participantes hacen parte de un proceso que incluye cinco (5) líneas de acción:

    p.mb-5 Con esto se busca aportar al cumplimiento de las metas relacionadas con la superación de la pobreza que propone el Plan Nacional de Desarrollo 2018 - 2022, tales como la superación de la pobreza monetaria extrema por parte de 1,5 millones de personas, 2,9 millones de personas que superen la pobreza monetaria y 2,5 millones de personas que superen la multidimensional (DNP, 2019).

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="1. Apoyo al consumo")
        p Busca aligerar la carga que recae sobre los hogares en condición de pobreza al carecer de un ingreso que posibilite su subsistencia, por medio de transferencias monetarias condicionadas y no condicionadas, además de apoyo a las unidades productivas para autoconsumo, tales como los programas:

        .row.mt-5
          .col-12.col-md-4
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Familias en Acción
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Jóvenes en Acción
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Compensación del IVA
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Ayudas de emergencia. Caso 2020: Ingreso Solidario.           
            hr.bd-hr 
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Colombia Mayor
            hr.bd-hr                                   
          .col-auto
            img(src="@/assets/curso/tema_1/img_26.png").m-auto

      .row(titulo="2. Habilidades para la vida")
        p Enfocada en la apropiación de un conjunto básico de conocimientos por parte de los participantes, que sean el punto de partida para la implementación posterior de las diferentes acciones de inclusión social y productiva necesarias para la superación de la pobreza. Para tal efecto se dispone de iniciativas en materia de:

        .row.align-items-center.mt-5
          .col-lg-4
            img.img-a(src="@/assets/curso/tema_1/img_27.png").img-fluid
          .col-12.col-md
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Formación para el emprendimiento.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Formación en habilidades para la empleabilidad.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Ahorro y aseguramiento.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Cuidado del medio ambiente, manejo y prevención del riesgo de desastres.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Habilidades sociales y comunicativas.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top Autocuidado
            hr.bd-hr
          
      .row(titulo="3. Infraestructura social")
        .row.align-items-center
          .col-lg-8
            p Busca el mejoramiento de las condiciones de habitabilidad de los hogares y de su entorno para su inclusión social por medio de la entrega de incentivos monetarios o en especie para adecuaciones.
          .col-lg-4
            img.img-a(src="@/assets/curso/tema_1/img_28.png").img-fluid

      .row(titulo="4. Oportunidades productivas")
        p Orientada a la gestión de acciones que, de manera gradual, contribuyan al fortalecimiento de las estrategias de generación de ingresos de los hogares:

        .row.align-items-center.mt-5
          .col-lg-4
            img.img-a(src="@/assets/curso/tema_1/img_29.png").img-fluid
          .col-12.col-md
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top #[strong Empleabilidad:] orientada a la gestión y colocación laboral, enrutamiento a la Red de Prestadores del Servicio Público de Empleo; esquemas de pagos por resultados. 
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top #[strong Cierre de brechas para la empleabilidad:] prestación de servicios personales e institucionales que posibiliten el acceso de la población al mercado laboral formal.
            hr.bd-hr
            .list
              .list__item
                .list__item__icon
                  img.img-a(src="@/assets/curso/tema_1/img_24.png").img-fluid
              .list__txt
                p.m-top #[strong Emprendimiento y proyectos productivos inclusivos:] acompañamiento para la formulación e implementación de planes de negocio para la creación de unidades productivas, promoción de instrumentos financieros flexibles, acompañamiento técnico para la sostenibilidad de las unidades productivas y provisión de infraestructura productiva.  
    .h5.text-center.mb-3 Ruta de Superación de Pobreza - Prosperidad Social.       

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_30.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption Nota: con base en Prosperidad Social (2020).




</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
