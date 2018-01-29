class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }

  call (name1, originFloor1, destinationFloor1) {
    this.elevator.requests.push([name1, originFloor1, destinationFloor1]);
  }
}

module.exports = Person;
