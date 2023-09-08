class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

const rock = new Item('rock', 'just a simple rock');

module.exports = {
  Item,
};
