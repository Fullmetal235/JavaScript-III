/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding-.
* 2. implicit binding-.
* 3. explicit binding-.
* 4. new binding-.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

let Josh = {
    name: 'Josh',
    favorite_show: 'Berserk',
    age: function () {
      console.log(this.age);
    }
  }
  
  Josh.age(43);

// Principle 3

// code example for New Binding

function josh(name) {
    this.name = name;
  }
  
  let host = new josh('Hello my name is Josh');
  
  console.log(Josh.name);

// Principle 4

// code example for Explicit Binding

function josh() {
    console.log(this.age);
  }
  
  let new_Josh = {
    name: 'Josh',
    favorite_show: 'Berserk',
  }
  
  josh.call(new_Josh);