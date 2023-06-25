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
    return /*html*/ `
      :host{
        display: grid;
        width: 100vw;
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