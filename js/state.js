function State(defaultValue) {
  this.state = defaultValue;
  this.observers = [];
}

State.prototype.subscribe = function(observer) {
  this.observers.push(observer);
};

State.prototype.set = function(newState) {
  this.state = newState;
  this.observers.forEach(observer => {
    observer(newState);
  });
};

module.exports = State;
