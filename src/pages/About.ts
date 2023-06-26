export default class About extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
        width:100%;
      }
      .about{
        padding-top: 60px;
        display: grid; 
        background: #343434;
      }
      h1{
        color: skyblue;
        font-size: 4vmin;
      }
      h2{
        color: yellow;
        font-size: 3vmin;
      }
      p{
        color: silver;
        font-size: 2vmin;
        padding: 3vmin;
        max-width: 50%;
        margin: 0 auto;
      }
      :is(h1,p,h2){
        text-align: center;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
  }
  ready() {
    const arr =  [
      "En un vasto mundo de código, me encuentro caminando con humildad y determinación. Soy un programador Front End Junior, con un amor inquebrantable por el JavaScript nativo. Con cada línea de código que escribo, busco mejorar y aprender de las experiencias que se presentan en mi camino.",
      "Mi nombre es Juan Antonio Valdivia Camacho. Me considero afortunado de formar parte de esta comunidad de apasionados por la tecnología, donde puedo explorar mi creatividad y desafiar mis habilidades día a día. Mi enfoque principal es construir interfaces web cautivadoras y funcionales, brindando a los usuarios experiencias memorables.",
      "Como principiante, reconozco que tengo mucho por aprender. Sin embargo, mi dedicación y compromiso son inquebrantables. Aprecio cada oportunidad que se me presenta para crecer y trabajar en equipo con otros desarrolladores, ya que creo firmemente en el poder de la colaboración y la sinergia.",
      "Mi mayor motivación es enfrentar nuevos desafíos y superar obstáculos. Cada error es una lección que me acerca más a la excelencia. Nunca dejaré de maravillarme ante el vasto potencial de la tecnología y cómo, a través de líneas de código aparentemente simples, podemos dar vida a ideas innovadoras.",
      "En resumen, soy Juan Valdivia, un programador Front End Junior que valora la humildad, la constancia y el crecimiento personal. Estoy emocionado por lo que el futuro me depara y estoy dispuesto a trabajar arduamente para alcanzar mis metas. Siempre estaré agradecido por la oportunidad de contribuir al mundo digital con mis habilidades y conocimientos, y estoy emocionado por el viaje que me espera."
    ]
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${About.styles}</style>
        <section class="about">
          <h2>Quien Soy?</h2>
          <h1>Juan Valdivia</h1>
          <img src="https://firebasestorage.googleapis.com/v0/b/juandfe.appspot.com/o/api%2Fv1%2Fusers%2Fjuan-perfil1080x1080.jpg?alt=media&token=38862498-a578-428c-b033-728887d9ca39" alt="Imagen de Juan Valdivia 'JuanDFE' ">
          ${arr.map((num) => /*html*/ `<p>${num}</p>`).join('')}
        </section>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  // attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("about-njv",About);