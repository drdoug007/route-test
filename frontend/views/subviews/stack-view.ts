import { Layout, View } from "../view"
import { customElement } from "lit/decorators"
import { html } from "lit";

@customElement("stack-view") 
export class StackView extends View {

    constructor(){
        super();
    }

    render(){
        return html`
            StackView
        `;
    }
}