export default class Navegacion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("click", this.handleEvent)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      nav{
        display: flex;
        place-content: center;
        flex-direction: row;
        width: var(--max-width);
        padding: calc(var(--heigth-header) / 2 ) 0;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        column-gap: 1rem;
        position: fixed;
        top: 0;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Navegacion.styles}</style>
        <nav>
            <router-link goto="/">JuanDFE</router-link>
            <router-link goto="/about">Quien soy?</router-link>
            <router-link goto="/proyectos">Proyectos</router-link>
            <router-link goto="/contact">Contacto</router-link>
        </nav>
      `
  }
  handleEvent(event: Event): void {
    console.log(event)
  }

  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
    this.removeEventListener("click", this.handleEvent)
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("main-nav",Navegacion);