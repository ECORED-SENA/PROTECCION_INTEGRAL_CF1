<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src="@/assets/curso/tema_1/img_1.png") 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p La erradicación de la pobreza es uno de los retos más importantes para los gobiernos a nivel global, dado sus devastadores efectos sobre la calidad de vida de las personas y el crecimiento de la sociedad. La dificultad para acceder a bienes y servicios que garanticen el bienestar y desarrollo humano tienen incidencia en fenómenos tales como inseguridad, insalubridad y analfabetismo, entre otros, los que se han acrecentados en la actual coyuntura, donde diferentes iniciativas productivas se han visto afectadas, disminuyendo la generación de empleo, ingresos y por ende de riqueza para la sociedad, la que resulta necesaria para el desarrollo de programas de educación, salud, seguridad y atención a la población más vulnerable.
                

    p.mb-5 En este marco, uno de los elementos al que mayor atención se le debe prestar radica en el significativo número de niños, niñas y adolescentes que ven comprometido su proceso de desarrollo humano y se enfrentan a una sociedad cada vez más cambiante, sin la preparación adecuada y en condiciones de vida precarias, estimulando la apertura de brechas que reducen la posibilidad a sectores importantes de la población para generar oportunidades de movilidad social para sí mismos, lo cual no solo tiene impacto en el ritmo de evolución de la sociedad en la actualidad, sino también en su proyección hacia el futuro.

    .row.align-items-center.mb-5
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_1/img_2.png")
      .col-lg-8
        p La situación llega a escenarios en donde generaciones enteras de personas en el mundo, desde su mismo nacimiento, ya se encuentran en un entorno que les dificulta el desarrollo de sus capacidades y el goce efectivo de sus derechos, lo que sin duda alguna puede ser considerado como una situación de desigualdad sobre la cual deben adelantarse acciones que permitan su corrección. Esto quiere decir que la superación de la pobreza es también un tema de superación de desigualdades y de protección de los derechos humanos, que debe ser incluida en las agendas públicas de los gobiernos para garantizar la existencia de recursos suficientes para la formulación, implementación, seguimiento y evaluación de estrategias en tal materia.

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_1/img_22.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Revisar la siguiente infografía informativa acerca del programa Familias en Acción.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Infografia_Familias_en_accion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta--boton.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Texto que describa la imagen')
          
        .h3.text-center Transferencias Monetarias Condicionadas (TMC)
        p.text-center Establecen unos condicionamientos en materia de salud y educación para los hogares, orientados a proteger a los jóvenes que hacen parte de éstos, como requisitos para poder acceder a un incentivo económico

      .col-md.tarjeta.tarjeta--boton.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='Texto que describa la imagen')
          
        .h3.text-center Componente de bienestar comunitario
        p.text-center Tiene por objeto contribuir al fortalecimiento del capital humano y la formación de competencias ciudadanas y comunitarias, a través de dos líneas de acción: la participación social y la articulación institucional (DPS, 2019).

    
    p.mb-5 De esta manera, en aras de garantizar la protección de los derechos niños, niñas y adolescentes, resulta de gran importancia garantizar que los hogares participantes cumplan con los requisitos que justifican el incentivo, por lo que se dispone de la estrategia para la permanencia escolar y la protección integral de niños, niñas y adolescentes, la cual se apoya en una estrategia de alertas diseñada para ubicar los casos en los que no se atienden a éstos, realizar un seguimiento que permita identificar las causas de tal incumplimiento, y activar los mecanismos que permitan la protección y restablecimiento de derechos de los niños, niñas y adolescentes cuando se está presentando alguna amenaza, vulneración o inobservancia.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-lg-4
          img.img-a(src="@/assets/curso/tema_1/img_6.png")
        .col-lg-8
          p Teniendo en cuenta lo anterior, en el presente componente formativo se profundiza en estos conceptos, de tal manera que el aprendiz al finalizar el estudio, tendrá la posibilidad de comprender el impacto que la pobreza tiene en la sociedad colombiana, las iniciativas adelantadas desde el sector público para mitigarlas y cómo operan dichas iniciativas en favor de la protección de los niños, niñas y adolescentes, garantizando las condiciones que permitan el máximo goce de sus derechos y desarrollo pleno de sus capacidades.

    .h4.mb-5.text-center Esquema del documento

    img.img-a(src="@/assets/curso/tema_1/img_7.png")



</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
