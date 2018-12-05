class LinkedList {
    constructor(fName, lName) {
        this.lName = lName;
        this.fName = fName;
    };
    Display() {
        console.log(this.lName + " Mr. " + this.fName)
    }

};


let obj = new LinkedList("Abu", "Ali");
obj.Display();

