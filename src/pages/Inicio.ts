export default class Inicio extends HTMLElement {
  _lorem: string[] = []
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._lorem = [
      "Aliquam sit amet erat dapibus, varius magna at, placerat lorem. Pellentesque id orci ante. Cras nec eros tincidunt nisi semper molestie ac at sem. Nullam ut dui lacus. Mauris arcu purus, vulputate ut imperdiet fringilla, dignissim quis purus. Mauris condimentum nibh luctus aliquam sagittis. Curabitur sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor.",
      "Aliquam sit amet erat dapibus, varius magna at, placerat lorem. Pellentesque id orci ante. Cras nec eros tincidunt nisi semper molestie ac at sem. Nullam ut dui lacus. Mauris arcu purus, vulputate ut imperdiet fringilla, dignissim quis purus. Mauris condimentum nibh luctus aliquam sagittis. Curabitur sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor.",
      "Aliquam sit amet erat dapibus, varius magna at, placerat lorem. Pellentesque id orci ante. Cras nec eros tincidunt nisi semper molestie ac at sem. Nullam ut dui lacus. Mauris arcu purus, vulputate ut imperdiet fringilla, dignissim quis purus. Mauris condimentum nibh luctus aliquam sagittis. Curabitur sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor.",
      "Aliquam sit amet erat dapibus, varius magna at, placerat lorem. Pellentesque id orci ante. Cras nec eros tincidunt nisi semper molestie ac at sem. Nullam ut dui lacus. Mauris arcu purus, vulputate ut imperdiet fringilla, dignissim quis purus. Mauris condimentum nibh luctus aliquam sagittis. Curabitur sed rutrum risus, at accumsan risus. Quisque bibendum, nibh vel pretium elementum, leo sapien mollis massa, vitae rutrum mi turpis non tortor."
    ]
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /*CSS*/ `
      :host{
        display: block;
        width:100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     
      }
      .inicio{
        padding-top: 60px;
        display: grid; 
        background: #343434;
      }
      h1{
        color: skyblue;
        font-size: 4vmin;
      }
      p{
        color: silver;
        font-size: 2vmin;
        padding: 3vmin;
        max-width: 50%;
        margin: 0 auto;
      }
      :is(h1,p){
        text-align: center;
      }
    `
  }
  get lorem(): string[] {
    return this._lorem
  }
  set lorem(value:string) {
    this._lorem = [...this._lorem, value]
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Inicio.styles}</style>
        <section class="inicio">
          <h1>Intento de Web SPA Nativo</h1>
          ${this.lorem.map(lore => /*html*/ `
          <p>
              ${lore}
          </p>
          `).join("")}
        </section>
   `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }
}
window.customElements.define("inicio-njv",Inicio);