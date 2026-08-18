class Listnode {
    constructor(val) {
        this.val = val
        this.nect = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.sice = 0

    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.sice) {
        return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.nect;
    }
    return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newnode = new Listnode(val)

        if(this.head == null){
            this.head = this.tail = newnode
        }

       else{ newnode.nect = this.head
            this.head = newnode
       }
       this.sice += 1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newnode = new Listnode(val)

        if( this.tail == null){
            this.head = this.tail = newnode

        }
        else {
            this.tail.nect = newnode
            this.tail = newnode

        }
        this.sice += 1
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
    if (index < 0 || index >= this.sice) {
        return false;
    }

    if (index === 0) {
        // Removing head
        this.head = this.head.nect;
        if (this.sice === 1) {
            // Was the only node → tail must also become null
            this.tail = null;
        }
    } else {
        // Find the node BEFORE the one to remove
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.nect;
        }
        // current is now at index-1
        let nodeToRemove = current.nect;
        current.nect = nodeToRemove.nect;

        // If we removed the TAIL, update tail pointer
        if (nodeToRemove === this.tail) {
            this.tail = current;
        }
    }

    this.sice -= 1;
    return true;
}

    /**
     * @return {number[]}
     */
    getValues() {
      let values = []
      let current = this.head

      while( current!== null) {
        values.push(current.val)

        current = current.nect
      }  
     return values 
    }
}
