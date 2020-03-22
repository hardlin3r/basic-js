const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(String(value));
    return this;
  },
  removeLink(position) {
    position--;
      if (position >= 0 && position < this.chains.length) {
        this.chains.splice(position, 1);
      } else {
        this.chains = [];
        throw Error();
      }
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    for (let index = 0; index < this.chains.length; index++) {
      let element = '( ' + this.chains[index] + ' )';
      this.chains[index] = element;
    }
    let result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};

module.exports = chainMaker;
