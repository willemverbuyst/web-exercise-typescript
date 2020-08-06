export class UserForm {
  // reference to any html element
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      // 'hover:h1': this.onHoverHeader
    };
  }

  onButtonClick(): void {
    console.log('hi there');
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Click me</button>
    </div>`;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
