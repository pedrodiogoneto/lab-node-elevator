class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'up';
  }

  start() {const timeoutId = setInterval(this.update(), 1000)}

  stop() {clearInterval(this.timeoutId)}
  
  update() {this.log()}
  
  // _passengersEnter() { }
  
  // _passengersLeave() { }
  
  floorUp() {
    if (this.floor < 10 && this.direction === 'up') {
      this.floor += 1;
      this.direction = 'up';
    }
    this.update();
  }
  
  floorDown() { 
    if (this.floor > 0 && this.direction === 'down') {
      this.floor -= 1;
      this.direction = 'down';
    }
    this.update();
  }

  // call() { }
  
  log() { 
    console.log("Direction: " + this.direction + " | Floor " + this.floor);
  }
}

module.exports = Elevator;
