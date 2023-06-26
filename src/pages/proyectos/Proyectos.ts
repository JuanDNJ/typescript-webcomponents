export default class Proyectos extends HTMLElement {

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
      .proyectos{
        display: grid;
        padding-top: var(--heigth-header);
      }
    `
  }
 
  async ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Proyectos.styles}</style>
       <section class="proyectos">
            <h1>Proyectos</h1>
            <nav>
                <ul>
                    <li><router-link goto="/todos">Todos</router-link>
                </ul>
            </nav>
       </section>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


//   static get observedAttributes() {
//     return [''];
//   }
}
window.customElements.define("proyectos-njv",Proyectos);