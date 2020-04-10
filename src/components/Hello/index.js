import css from './styles.css';

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.adoptedStyleSheets = [css];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<h1>Hello World</h1>`;
  }
}

customElements.define('hello-world', HelloWorld);