"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Nodde {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Nodde(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length += 1;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index Out Of Bounds");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List Is Empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        let leftNode = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftNode;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
