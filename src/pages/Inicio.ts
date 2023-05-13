import "../components/Bienvenida"
export default class Inicio extends HTMLElement {
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
        display: grid;
        width: 100vw;
      }
      bienvenida-njv::part(h2) {
        color: #646cff;
        font-size: 12rem;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Inicio.styles}</style>
        <h1 part="titulo">Inicio</h1>
        <bienvenida-njv nameUser="Juan"></bienvenida-njv>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("inicio-njv",Inicio);