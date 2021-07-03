import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Layout, View } from '../view';

@customElement('route-me-layout')
export class RouteMeLayout extends Layout {
  render() {
    return html`
      <div>Using Layout - This should be first!!!</div>
      <slot></slot>
    `;
  }
}
