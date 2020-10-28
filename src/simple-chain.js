const chainMaker = {

    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        this.chain.push((String(value)) ? '( ' + String(value) + ' )' : '( )');
        return this;
    },

    removeLink(position) {
        if (position > this.getLength() || position <= 0) {
            this.chain = [];
            throw new Error();
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const chainResult = this.chain.join('~~');
        this.chain = [];
        return chainResult;
    }

};

module.exports = chainMaker;
