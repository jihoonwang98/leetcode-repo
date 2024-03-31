export class Node {
  #value: number;

  constructor(n: number) {
    this.#value = n;
  }

  getValue() {
    return this.#value;
  }
}
