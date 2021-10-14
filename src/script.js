class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    root() {
        return this.root;
    }

    add(data) {
        this.root = addV(data, this.root);

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
        return check(data, this.root);

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
        return find(data, this.root);

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
        del(data, this.root);
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

                }



            } else if (node.data > v) {
                return del(v, node.left);
            } else {
                return del(v, node.right);
            }

        }
    }

    min() {
        if (this.root == null) return null;
        let min = null;
        let node = this.root;
        while (node) {
            min = node.data;
            node = node.left;
        }
        return min;
    }

    max() {
        if (this.root == null) return null;
        let max = null;
        let node = this.root;
        while (node) {
            max = node.data;
            node = node.right;
        }
        return max;
    }

}

const tree = new BinarySearchTree();

tree.add(5);
tree.add(5);
tree.add(6);
tree.add(3);
tree.add(4);
console.log(tree.min());
console.log(tree.max());