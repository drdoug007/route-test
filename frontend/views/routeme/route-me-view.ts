import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';

@customElement('route-me-view')
export class RouteMeView extends View {
  render() {
    return html`
      <div>Using View - This should be first!!!</div>
      <slot></slot>
    `;
  }
}
