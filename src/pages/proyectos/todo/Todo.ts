export default class TodoProyecto extends HTMLElement {
  URL_API = import.meta.env.VITE_API_JUANDFE;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.ready();
  }
  static get styles() {
    return /* CSS */ `
        :host{
            display: block;
        }
        ul.lista{
            list-style: none;
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            height: 50vh;
        }
    
        .item-list{
            padding: .2vmin 1rem;
            transition: all .3s ease;
            display: flex;
            flex-direction: row;
        }
      
        .item-list:hover{
            cursor: pointer;
            background: var(--color-terciario);
        }
        .item-list:hover > .name-todo{
            color: var(--btn-fondo-info);
        }
        .todos{
            display: grid;
            padding-top: var(--heigth-header);
        }
        .completado{
            background: var(--btn-fondo-accion);
         
        }
        .pendiente{
            background: var(--color-secundario);
          
        }
        .completado > .name-todo{
            color: var(--color-primario)
        }
        .pendiente > .name-todo{
            color: var(--btn-fondo-info)
        }
            
    `;
  }
  async fetchApiJuanDFE() {
    const todos = await fetch(`${this.URL_API}/todos`);
    const todosJson = await todos.json();
    console.log(todosJson);
    return todosJson;
  }
  async ready() {
    const todos = await this.fetchApiJuanDFE();

    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${TodoProyecto.styles}</style>
        <section class="todos">
            <h1>Todos</h1>
            <ul class="lista">
                ${todos.filter((rec: any) => {
                    if(rec.completado) return `<li class="item-list completado"><strong>${rec.name}</strong></li>`;
                    return `<li class="item-list pendiente"><strong>${rec.name}</strong></li>`;
                   
                }).map((todo: any) => {
                    console.log(todo)
                })
                  .join("")}
            </ul>
            
        </section>
      `;
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  //   attributeChangedCallback(attr:any, old:any, now:any) { }

  //   static get observedAttributes() {
  //     return [''];
  //   }
}
window.customElements.define("todo-proyecto", TodoProyecto);
