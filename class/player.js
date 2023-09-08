const { Food } = require('./food');

class Player {
    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) { 
        const roomItem = this.currentRoom.items.find(item => item.name === itemName);
        const itemIndex = this.currentRoom.items.indexOf(roomItem)

        if (itemIndex !== -1) {
            this.currentRoom.items.splice(itemIndex, 1);
            this.items.push(roomItem)
        }
    }
    
    dropItem(itemName) {
        const playerItem = this.items.find(item => item.name === itemName);
        const itemIndex = this.items.indexOf(playerItem);
        

        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            this.currentRoom.items.push(playerItem);
        }
    }

    eatItem(itemName) {
        const item = this.items.find(item => item.name === itemName);
        const isFood = item instanceof Food;

        if (isFood) {
            const foodIndex = this.items.indexOf(item)
            this.items.splice(foodIndex, 1);
        }
    }
    
    getItemByName(name) {
        return this.items.find(item => {
            return item.name === name;
        })
    }
}

module.exports = {
  Player,
};
