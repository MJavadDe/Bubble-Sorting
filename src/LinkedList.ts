import { Sorter } from "./Sorter";

class Nodde {
  next: Nodde | null = null;

  constructor(public data: number) {
    
  }
}


export class LinkedList extends Sorter {
  head: Nodde | null = null;
  
  add(data:number) {
    const node = new Nodde(data);

    if (!this.head) {
      this.head = node
      return;
    }

    let tail = this.head

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node

  }

  get length(): number{
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length += 1;
      node = node.next
    }

    return length


  }

  at(index:number) {
    
    if (!this.head) {
      throw new Error("Index Out Of Bounds")
    }

    let counter = 0;
    let node: Nodde | null = this.head;
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex:number,rightIndex:number):boolean {
    if (!this.head) {
      throw new Error("List Is Empty")
    }
    
    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex:number,rightIndex:number) {
    let leftNode = this.at(leftIndex).data
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftNode
  }


  print(): void {
    if (!this.head) {
      return;
    }

    let node: Nodde | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }


}