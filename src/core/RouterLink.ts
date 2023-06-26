// Clase que se encarga de crear el componente router-link
export default class RouterLink extends HTMLElement {
  // Funcion que se ejecuta cuando se crea el componente
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  // Funcion que se ejecuta cuando se conecta el componente
  connectedCallback() {
    this.ready();
    this.shadowRoot!.querySelector("a")!.addEventListener(
      "click",
      this.handlerEvent
    );
  }
  // Funcion de dar estilos al componente
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      a{
        text-decoration: none;
        color: var(--color-text);
        font-weight: bolder;
        font-size: var(--font-size, 2vmin);
      }
      a:hover{
        color: var(--color-text);
      }
    `;
  }
  // Funcion que se encarga de manejar el evento
  handlerEvent(event: any) {
    // Asocia el evento a un tipo de evento
    const e = event ;
    // Comprobar si tenemos el atributo target y si no lo tenemos le asignamos el valor undefined
    const target = this.hasAttribute("target")
      ? this.getAttribute("target")
      : undefined;
    // Comprueba si el evento es principal y si no esta prevenido
    const esElEventoPrincipal = e.button === 0 && !e.defaultPrevented;
    // Comprueba si el evento es modificado
    const esUnEventoModificado =
      e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    // Comprueba si el evento es manejable
    const esUnEventoManejable = target === undefined || target === "_self";
    // Comprobamos que se cumplan las condiciones para que el evento se ejecute
    if (!esElEventoPrincipal || esUnEventoModificado || !esUnEventoManejable)
      return;
    // Prevenimos el evento
    event.preventDefault();
    // Cambiamos la url
    history.pushState({}, "", this.getAttribute("href"));
    // Disparamos el evento
    this.dispatchEvent(
      new CustomEvent("router-link", {
        composed: true,
        bubbles: true,
        detail: this.getAttribute("href"),
      })
    );
  }
  // Funcion que se encarga de renderizar el componente
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${RouterLink.styles}</style>
        <a href="${
          this.hasAttribute("goto") ? this.getAttribute("goto") : "/"
        }">
          <slot></slot>
        </a>
      `;
  }
  // Funcion que se encarga de desconectar el componente
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }
  // Se ejecuta cuando se actualiza el componente
  // attributeChangedCallback(attr: any, old: any, now: any) {
  //   if (typeof attr !== "string") {
  //     throw new Error("This Arg so much string");
  //   }
  //   console.log(`attribute changed: ${attr} = ${old} -> ${now} `);
  // }

  // Funcion que se encarga de observar los atributos del componente
  // static get observedAttributes() {
  //   return [""];
  // }
}
// Definimos el componente
window.customElements.define("router-link", RouterLink);
