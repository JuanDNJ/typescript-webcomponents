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
        display: block;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Inicio.styles}</style>
        <h1>Inicio</h1>
       
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