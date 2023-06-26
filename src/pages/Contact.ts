export default class Contact extends HTMLElement {
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
      }
      .contacto{
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
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Contact.styles}</style>
        <section class="contacto">
            <h2>Contacto</h2>
            <p>  sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor.</p>
        </section>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("contact-njv",Contact);