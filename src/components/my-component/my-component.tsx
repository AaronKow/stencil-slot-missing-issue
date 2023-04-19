import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  @State() customTag: string = 'a';

  componentDidLoad() {
    setTimeout(() => {
      this.customTag = 'p';
      alert("I'm changed!");
    }, 3000);
  }

  render() {
    return (
      <this.customTag href="#">
        <slot />
      </this.customTag>
    );
  }
}
