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
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        .todos{
            display: grid;
            padding-top: var(--heigth-header);
            width: 100%;
            background: var(--color-secundario);
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
        }
    
        .item-list{
            padding: .5vmin 1rem;
            transition: all .3s ease;
            display: grid;
            grid-template-columns: 1fr auto;
            place-content:  space-between center;
        }
      
        .item-list:hover{
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
            grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
            place-items: space-between center ;
            gap: 1rem;
            padding: 2vmin;
        }
        .lista-completados,.lista-pendientes{
            background: var(--color-secundario);
            padding: 1rem;
            width: 100%;
            gap: 5px;
        }
        .btn, .btn-edit{
            background: var(--btn-fondo);
            color: var(--btn-color);
            border: none;
            border-radius: 3px;
            padding: .5vmin 1vmin;
            font-size: 1vmin;
        }
        .btn{
            border: 2px solid var(--color-text);
        }
        .btn:hover{
            background: var(--color-cuaternario);
            color: var(--color-novenario);
        }
        .btn-edit{
            color: var(--color-septenario);
        }
        .btn-delete{
            color: var(--color-quintenario);
        }
        .btn-edit:hover{
            background: var(--color-septenario);
        }
        .btn-delete:hover{
            background: var(--color-quintenario);
        }
        .contenedor-botones{
            display: flex;
            gap: 1.5vmin;
            align-items: center;
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
                    <h2>Completados</h2>
                    ${todos.filter((rec: any) => {
                        if(rec.completado) return rec;
                        return 
                    
                    }).map((todo: any) => {
                    return /*html*/ `
                        <li class="item-list completado">
                            <span class="name-todo">${todo.name}</span>
                            <div class="contenedor-botones">
                                <button type="button" class="btn btn-edit">
                                    📝 Edit
                                </button>
                                <button type="button" class="btn btn-delete">
                                    🗑 Delete
                                </button>
                                
                            </div>
                        </li>
                    `;
                    })
                    .join("")}
                </ul>
                <ul class="lista lista-pendientes">
                    <h2>Pendientes</h2>
                    ${todos.filter((rec: any) => {
                        if(!rec.completado) return rec;
                        return 
                    
                    }).map((todo: any) => {
                    return /*html*/ `
                        <li class="item-list pendiente">
                            <span class="name-todo">${todo.name}</span>
                            <div class="contenedor-botones">
                                <button type="button" class="btn btn-edit">
                                    📝 Edit
                                </button>
                                <button type="button" class="btn btn-delete">
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
}
window.customElements.define("todo-proyecto", TodoProyecto);
