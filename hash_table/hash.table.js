class HashMap {
  constructor(size = 7) {
    this.hashArray = new Array(size);
  }

  #hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i) * 23;
    }
    return index % this.hashArray.length;
  }

  set(key, value) {
    const index = this.#hash(key);
    if (this.hashArray[index]) {
      this.hashArray[index].push([key, value]);
    } else {
      this.hashArray[index] = [[key, value]];
    }

    return this;
  }

  get(key) {
    for (let i = 0; i < this.hashArray.length; i++) {
      if (this.hashArray[i]) {
        for (let j = 0; j < this.hashArray[i].length; j++) {
          if (this.hashArray[i][j][0] === key) {
            return this.hashArray[i][j][1];
          }
        }
      }
    }
    return undefined;
  }

  keys() {
    const key = [];
    for (let i = 0; i < this.hashArray.length; i++) {
      if (this.hashArray[i]) {
        for (let j = 0; j < this.hashArray[i].length; j++) {
          key.push(this.hashArray[i][j][0]);
        }
      }
    }

    return key;
  }
}

const map = new HashMap();

map.set(11, "james");
map.set("1221", "creame");
map.set("1231", "swift");
map.set("mask", "green");
map.set("dart", "orange");

console.log(map);
