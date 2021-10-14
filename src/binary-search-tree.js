const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.rootTree = null;
    }

    root() {
        return this.rootTree;
    }

    add(data) {
        this.rootTree = addV(data, this.rootTree);

        function addV(v, node) {
            if (node == null) {
                return new Node(v);
            } else if (node.data == v) {
                return node;
            } else if (node.data > v) {
                node.left = addV(v, node.left);
            } else {
                node.right = addV(v, node.right);
            }
            return node;
        }
    }

    has(data) {
        return check(data, this.rootTree);

        function check(v, node) {
            if (node == null) {
                return false;
            } else if (node.data == v) {
                return true;
            } else if (node.data > v) {
                return check(v, node.left);
            } else {
                return check(v, node.right);
            }

        }
    }

    find(data) {
        return find(data, this.rootTree);

        function find(v, node) {
            if (node == null) {
                return null;
            } else if (node.data == v) {
                return node;
            } else if (node.data > v) {
                return find(v, node.left);
            } else {
                return find(v, node.right);
            }

        }
    }

    remove(data) {
        del(data, this.rootTree);
        // let prev = null;
        function del(v, node, prev = null) {
            if (node == null) {
                return null;
            } else if (node.data == v) {
                if (node.left == null && node.right == null) {
                    if (prev == null) {
                        node = null;
                    } else {
                        prev = null;
                    }
                } else if (node.left == null) {
                    prev = node.right;
                } else if (node.right == null) {
                    prev = node.left;
                } else {

                    let min = node.right,
                        prev2;
                    let node2 = node.right;
                    while (node2) {
                        prev2 = min;
                        min = node2;
                        node2 = node2.left;
                    }
                    prev2.left = node2.right;
                    prev = node2;
                    node2.right = node.right;
                    node2.left = node.left;




                    return min;
                }
            }
        }
    }

    min() {
        if (this.rootTree == null) return null;
        let min = null;
        let node = this.rootTree;
        while (node) {
            min = node.data;
            node = node.left;
        }
        return min;
    }

    max() {
        if (this.rootTree == null) return null;
        let max = null;
        let node = this.rootTree;
        while (node) {
            max = node.data;
            node = node.right;
        }
        return max;
    }

}