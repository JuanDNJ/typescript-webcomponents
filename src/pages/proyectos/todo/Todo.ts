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
        .todos{
            display: grid;
            padding-top: var(--heigth-header);
        }
        .todos>  h1 {
            text-align: center;
            grid-column: 1 / -1;
            width: 100%;
            border-bottom: 1px solid var(--btn-color-terciario-oscuro);
            max-width: calc(100% - 2rem);
            margin: 0 auto;
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
            justify-content: space-between;
        }
      
        .item-list:hover{
            cursor: pointer;
            background: var(--color-terciario);
        }
        .item-list:hover > .name-todo{
            color: var(--btn-fondo-info);
        }
       
        .completado{
            background: var(--color-sextario);
            border-left: 5px solid var(--btn-fondo-accion);
        }
        .pendiente{
            background: var(--color-quintenario);
            border-left: 5px solid var(--color-link);
        }
        .completado > .name-todo{
            color: var(--color-primario); 
        }
        .pendiente > .name-todo{
            color: var(--btn-fondo-info);
           
        }
        .contenedor-listas{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
            gap: 1rem;
            padding: 1rem;
        }
        .lista-completados,.lista-pendientes{
            background: var(--color-secundario);
            padding: 1rem;
            width: 100%;
            gap: 5px;
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
            <section class="contenedor-listas">
                <ul class="lista lista-completados">
                    ${todos.filter((rec: any) => {
                        if(rec.completado) return rec;
                        return 
                    
                    }).map((todo: any) => {
                    return /*html*/ `
                        <li class="item-list completado">
                            <span class="name-todo">${todo.name}</span>
                            <div>
                                <button type="button">
                                    📝 Edit
                                </button>
                                <button type="button">
                                    🗑 Delete
                                </button>
                                
                            </div>
                        </li>
                    `;
                    })
                    .join("")}
                </ul>
                <ul class="lista lista-pendientes">
                    ${todos.filter((rec: any) => {
                        if(!rec.completado) return rec;
                        return 
                    
                    }).map((todo: any) => {
                    return /*html*/ `
                        <li class="item-list pendiente">
                            <span class="name-todo">${todo.name}</span>
                            <div>
                                <button type="button">
                                    📝 Edit
                                </button>
                                <button type="button">
                                    🗑 Delete
                                </button>
                                
                            </div>
                        </li>
                    `;
                    })
                    .join("")}
                </ul>
            </section>
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
