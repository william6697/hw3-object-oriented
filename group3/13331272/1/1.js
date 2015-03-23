Base.staticMethod = function() {  
    console.log("This is from Base class static-method, static-variable is: " + this.staticVariable);
};

Base.staticVariable = 'Base';

function Base(instanceVariable) {    
    this.instanceVariable = instanceVariable;
}

Base.prototype.instanceMethod = function() {    
    console.log("This is from Base class instance-method, static-variable is: " + this.instanceVariable);
};

function Derived(instanceVariable) {  
    this.instanceVariable = instanceVariable;
}

Derived.staticVariable = 'Derived';


function extend(base, derived) {
    derived.staticMethod = function() {  
        base.staticMethod.call(this);
        console.log("This is from Derived class static-method, static-variable is: " + this.staticVariable);
    };

    derived.prototype.instanceMethod = function() {  
        base.prototype.instanceMethod.call(this);
        console.log("This is from Derived class instance-method, instance-variable is: " + this.instanceVariable);
    };    
}



extend(Base, Derived);


console.log("test one:");
example = new Derived('example');
Derived.staticMethod();
example.instanceMethod();



console.log("test two:");
example = new Derived('example');
otherExample = new Derived('other-example');
Derived.staticMethod();
example.instanceMethod();
otherExample.instanceMethod();