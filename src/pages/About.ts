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
        width:100%
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${About.styles}</style>
        <h1>About</h1>
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
window.customElements.define("about-njv",About);