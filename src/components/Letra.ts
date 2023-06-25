export default class LetraAnimada extends HTMLElement {
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
        display: block;
      }
      i.animacion{
        display: inline-flex;
        color: red;
        font-size: 4rem;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${LetraAnimada.styles}</style>
        <i class="animacion">${ this.hasAttribute("getLetra") ? this.getAttribute("getLetra") : `<slot>L</slot>`}</i>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 

    if(typeof attr !== "string"){
      throw new Error("Invalid attribute")
    }
  
    console.log(`attribute ${attr} = ${old ? old : now}`)
  }


  static get observedAttributes() {
    return ['getLetra', 'animacion'];
  }
}
window.customElements.define("letra-anim",LetraAnimada);