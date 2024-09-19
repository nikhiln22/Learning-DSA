// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     prepend(value) {
//         let node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             let temp = this.head;
//             while (temp.next) {
//                 temp = temp.next;
//             }
//             temp.next = node;
//         }
//         this.size++;
//     }

//     insert(value, index) {
//         let node = new Node(value);
//         if (index < 0 || index > this.size) {
//             return
//         } else if (index === 0) {
//             this.prepend(value)
//         } else {
//             let temp = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 temp = temp.next;
//             }
//             node.next = temp.next;
//             temp.next = node;
//         }
//     }

//     removeFirst() {
//         this.head = this.head.next;
//     }

//     removeLast() {
//         let temp = this.head;
//         while (temp.next.next) {
//             temp = temp.next;
//         }
//         temp.next = null;
//     }

//     removevalue(value) {
//         let temp = this.head;
//         if (temp.value === value) {
//             this.head = temp.next;
//             return;
//         } else {
//             while (temp.next) {
//                 if (temp.next.value === value) {
//                     temp.next = temp.next.next;
//                     break;
//                 } else {
//                     temp = temp.next;
//                 }
//             }
//         }
//     }

//     removeMiddleNode() {
//         if (this.isEmpty()) {
//             console.log('list is too short to remove the last node');
//         }

//         let fast = this.node;
//         let slow = this.node;
//         let prev = null;

//         while (fast.next) {
//             fast = fast.next.next;
//             prev = slow;
//             slow = slow.next;
//         }
//         prev.next = slow.next;
//     }


//     search(value) {
//         let temp = this.head;
//         while (temp) {
//             if (temp.value === value) {
//                 return true;
//             } else {
//                 temp = temp.next;
//             }
//         }
//         return false;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty');
//         } else {
//             let temp = this.head;
//             let listvalues = '';
//             while (temp) {
//                 listvalues += `${temp.value}->`;
//                 temp = temp.next;
//             }
//             listvalues += 'null';
//             console.log('listvalues:', listvalues);
//         }

//     }
// }


// let list = new LinkedList();

// console.log('list:', list);

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.append(0);
// list.append(100);
// list.append(200);
// list.append(300);
// list.append(400);
// list.append(500);
// list.print()

// list.insert(1574, 3);
// list.print()

// list.removeLast();
// list.print();

// list.removeFirst();
// list.print()

// list.removevalue(40);
// list.print();

// list.removevalue(1574);
// list.print();

// console.log(list.search(1574));



// converting an array to an linked list
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     arrayToLinkedList(arr) {
//         if (arr.length === 0) {
//             return null
//         }

//         this.head = new Node(arr[0]);
//         let curr = this.head;
//         for (let i = 1; i < arr.length; i++) {
//             curr.next = new Node(arr[i]);
//             curr = curr.next;
//         }
//         return curr;
//     }

//     print() {
//         if (this.head === 0) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} => `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.arrayToLinkedList([10, 20, 30, 40, 50]);

// list.print()

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     arrayToLinkedList(arr) {
//         if (arr.length === 0) {
//             return null
//         }
//         this.head = new Node(arr[0]);
//         let curr = this.head;
//         for (let i = 1; i < arr.length; i++) {
//             curr.next = new Node(arr[i]);
//             curr = curr.next;
//         }
//         return curr;
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         }
//         let curr = this.head;
//         let listValues = '';
//         while (curr) {
//             listValues += `${curr.value} => `;
//             curr = curr.next;
//         }
//         listValues += 'null';
//         console.log('listValues:', listValues);
//     }
// }

// let list = new LinkedList();

// list.arrayToLinkedList([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// list.print()


// reversing the linkedlist using the iterative method
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     prepend(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//     }

//     reverse() {
//         let curr = this.head;
//         let prev = null;
//         let next = null;

//         while (curr) {
//             next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         return this.head = prev
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} ==> `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }


// let list = new LinkedList();

// list.prepend(20);

// list.prepend(30);

// list.prepend(40);

// list.prepend(50);

// list.prepend(60);

// list.print();

// list.reverse();

// list.print();


// reversing the linkedlist using the recursion
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     prepend(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//     }

//     reverse() {
//         this.head = this.reverseRecursion(this.head);
//       }
//       reverseRecursion(node) {
//         if (node.next == null) {
//           return node;
//         }

//         let newHead = this.reverseRecursion(node.next);
//         node.next.next = node;
//         node.next = null;
//         return newHead;
//       }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += curr.value + ' -> ';
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             return listValues;
//         }
//     }
// }


// let list = new LinkedList()


// list.append(1230);
// list.append(1231);
// list.append(1232);
// list.append(1233);
// list.append(1234);

// console.log(list.print());

// list.reverse()

// console.log(list.print());


// printing the prime numbers in the linkedlist
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//       append(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//     }

//     isPrime(num) {
//         if (num <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     printPrimeNumbers() {
//         let curr = this.head;
//         while (curr) {
//             if (this.isPrime(curr.value)) {
//                 console.log(curr.value);
//             }
//             curr = curr.next;
//         }
//     }
// }

// const list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.append(7);
// list.append(8);
// list.append(9);
// list.append(10);

// list.printPrimeNumbers()



// removing the duplicates from the sorted linked list
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//     }

//     removeDuplicatesFromSortedList() {
//         let curr = this.head;
//         while (curr.next) {
//             if (curr.value === curr.next.value) {
//                 curr.next = curr.next.next;
//             } else {
//                 curr = curr.next;
//             }
//         }
//         return curr;
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} => `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(5);

// list.print();

// list.removeDuplicatesFromSortedList();

// list.print()



// removing the duplicates from an unsorted linked list
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//     }

//     removeDuplicatesFromUnsorted() {
//         let curr = this.head;
//         let seen = new Set();
//         let prev = null;

//         while (curr.next!=null) {
//             if (seen.has(curr.value)) {
//                 prev.next = curr.next;
//             } else {
//                 seen.add(curr.value);
//                 prev = curr;
//             }
//             curr = curr.next;
//         }
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} => `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.append(10);
// list.append(1);
// list.append(105);
// list.append(10);
// list.append(20);
// list.append(140);
// list.append(120);
// list.append(1);
// list.append(1);
// list.append(2000);

// list.print();

// list.removeDuplicatesFromUnsorted();

// list.print()

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     prepend(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }


//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         } else if (index === 0) {
//             this.prepend(value);
//         } else {
//             let node = new Node(value);
//             let curr = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//             this.size++;
//         }
//     }

//     removeFirst() {
//         this.head = this.head.next;
//     }

//     removeLast() {
//         let curr = this.head;
//         while (curr.next.next) {
//             curr = curr.next
//         }
//         curr.next = null;
//     }

//     removeValue(value) {
//         let curr = this.head;
//         if (curr.value === value) {
//             this.head = this.head.next;
//         } else {
//             while (curr.next) {
//                 if (curr.next.value === value) {
//                     curr.next = curr.next.next;
//                     break;
//                 }
//                 curr = curr.next;
//             }
//         }
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} => `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.prepend(1);
// list.prepend(2);
// list.prepend(3);
// list.prepend(4);
// list.prepend(5);
// list.prepend(6);

// list.print();

// list.insert(1523, 2);

// list.print();

// list.removeLast();
// list.print()

// list.removeFirst();
// list.print();

// list.removeValue(1523);
// list.print()


// deleting the random position node in LL
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     getSize() {
//         return this.size;
//     }

//     remove(n) {
//         let position = this.size - n;
//         console.log('this.size:', this.size);
//         console.log('postion:', position);
//         let curr = this.head;
//         for (let i = 0; i < position - 1; i++) {
//             curr = curr.next;
//         }
//         curr.next = curr.next.next;
//         this.size--;
//     }

//     print() {
//         let curr = this.head;
//         let listValues = '';
//         while (curr) {
//             listValues += `${curr.value} => `;
//             curr = curr.next;
//         }
//         listValues += 'null';
//         console.log('listvalues:', listValues);
//     }
// }

// let list = new LinkedList();

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.append(60);
// list.append(70);
// list.append(80);
// list.append(90);
// list.append(100);

// list.print();

// console.log(list.getSize());

// list.remove(3);
// list.print()

// list.deleteSecondLastNode();

// list.print()


// finding the middle element in the linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     append(value) {object
//         let node = new Node(value);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//         this.size++;
//     }

//     findMiddle() {
//         let slow = this.head;
//         let fast = this.head;
//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.value
//     }

//     print() {
//         if (this.head === null) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} ==> `;
//                 curr = curr.next;
//             }
//             listValues += 'null';
//             console.log('listValues:', listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);


// list.print();

// console.log(list.findMiddle());


// removing the duplicates from an linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    removeDuplicates() {
        let curr = this.head;
        let prev = null;
        let found = new Set();
        while (curr) {
            if (found.has(curr.value)) {
                prev.next = curr.next;
            } else {
                found.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    insert(index, value) {
        let node = new Node(value);
        if (index < 0 || index > this.size) {
            return;
        } else if (index === this.size) {
            this.append(value);
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    remove(value) {
        let curr = this.head;
        if (curr.value === value) {
            this.head = this.head.next;
        } else if (curr.next.value === value) {
            while (curr.next) {
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
    }

    reverseIterative() {
        let curr = this.head;
        let prev = null;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    reverse() {
        this.head = this.reverseRecursion(this.head);
    }

    reverseRecursion(node) {
        if (node.next === null) {
            return node;
        }

        let newHead = this.reverseRecursion(node.next);
        node.next.next = node;
        node.next = null;
        return newHead
    }


    print() {
        if (this.head === null) {
            console.log('list is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} => `;
                curr = curr.next;
            }
            listValues += 'null';
            console.log('listValues:', listValues);
        }
    }
}


let list = new LinkedList();

list.append(10);
list.append(23);
list.append(10);
list.append(15);
list.append(5000);
list.append(1);
list.append(13);

list.print();

list.reverseIterative();

list.print()

