class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //function to add data to linked list 

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    //function to add data to tail
    addToTail (data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    //function to insert data to a linked list at a particular index
    addAtPosition(data,position) {
        let newNode = new Node(data);
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let i = 1;
        while ( i < position - 1 && current) {
            current = current.next;
            i++;
        }
        if (current) {
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    //function to remove data
    remove(data) {
        if (!this.head) {
            return null;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.length--;
                return this;
            }
            current = current.next;
        }
        return null;
    }

    //function to remove from particular index
    removeAt(index) {
        if (index < 0 || index>= this.length) return null;
        if (index ===0) return this.remove();
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.length--;
        return this;
    }
    


    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const hikingPlaces = new LinkedList();
    hikingPlaces.add("Mam Tor");
    hikingPlaces.add("Kinder Scout");
    hikingPlaces.add("Helvelyn Ridge"); 
    console.log("INITIAL LIST!!!!!!!");   
    hikingPlaces.printAll();
    hikingPlaces.addAtPosition("Peak District", 2);
    console.log("LIST ADDING TO POSITION 2!!!!!");
    hikingPlaces.printAll();
    hikingPlaces.addToTail("Lake District");
    console.log("ADDING TO TAIL!!!!!");
    hikingPlaces.printAll();
    hikingPlaces.remove("node2");
    console.log("REMOVE!!!!!!");
    hikingPlaces.printAll();
    hikingPlaces.removeAt(2);
    console.log("REMOVE AT 2!!!!!!")
    hikingPlaces.printAll();



