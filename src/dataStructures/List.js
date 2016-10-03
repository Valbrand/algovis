export default class List {
  constructor (...elements) {
    if (elements.length === 0) {
      this.head = null;
    } else {
      this.head = new ListNode(elements[0]);
      let node = this.head;

      for (let i = 1; i < elements.length; ++i) {
        node.next = new ListNode(elements[i]);
        node = node.next;
      }
    }
  }

  /**
   * Inserts an element at the beggining of the list
   * @param {number} element - The element to be inserted
   * */
  push(element) {
    const newNode = new ListNode(element, this.head);

    this.head = newNode;
  }

  toString () {
    if (this.head === null) {
      return 'null';
    }

    return `${this.head.toString()}`;
  }
}

class ListNode {
  constructor(content, next) {
    if (content === undefined) {
      throw new Error("List node cannot be initialized without content")
    }

    this.content = content;
    this.next = next || null;
  }

  toString() {
    if (this.next) {
      return `${this.content} -> ${this.next.toString()}`;
    }

    return `${this.content}`;
  }
}