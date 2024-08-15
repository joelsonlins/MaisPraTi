class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Index fora dos limites!");
    }
    let newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Index fora dos limites!");
    }

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let list = new LinkedList();
// list.add("Formação +praTi");
// list.add(true);
// list.add("Elemento 3");
// list.printList();
// list.insertAt("Novo elemento", 0);
// list.printList();
list.add("Elemento 0");
list.add("Elemento 1");
list.add("Elemento 2");
list.add("Elemento 3");
console.log(list.indexOf("Elemento 3"));
list.removeFrom(1);
list.printList();

console.log(list.sizeOfList());
