class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity<=0) {
            throw "capacity must be an integer greater than 0"
        }
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity).fill(0)

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }


    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length == this.capacity) {
            this.resize()
        }
        this.arr[this.length] = n
        
        
        this.length += 1;

    }

    /**
     * @returns {number}
     */
    popback() {
        let pop = this.arr[this.length-1]
        this.length -=1;
        return pop
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2
        let new_arr = new Array (this.capacity).fill(0)

        for (let i =0; i< this.length; i++) {
             new_arr [i] = this.arr[i];

        }

        this.arr = new_arr

    }
    

    /**
     * @returns {number}
     */
    getSize() {

    
        return this.length ;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

}