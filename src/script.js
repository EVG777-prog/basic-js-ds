class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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

    // remove2(data) {

    //     this.rootTree = del(data, this.rootTree);

    //     function del(v, node) {
    //         if (node == null) {
    //             return null;
    //         }
    //         if (node.data < v) {
    //             node.right = del(v, node.right);
    //         } else if (node.data > v) {
    //             node.left = del(v, node.left);
    //         } else {
    //             if (node.left == null && node.right == null) {
    //                 return null;
    //             } else if (node.left == null) {
    //                 node = node.right;
    //                 return node;
    //             } else if (node.right == null) {
    //                 node = node.left;
    //                 return node;
    //             } else {
    //                 let min = node.right;
    //                 while (min.left) {
    //                     min = min.left;
    //                 }
    //                 node.data = min.data;
    //                 node.right = del(min.data, node.right);
    //                 return node;
    //             }
    //         }
    //     }


    // }

    min() {
        if (this.rootTree == null) return null;
        let node = this.rootTree;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (this.rootTree == null) return null;
        let node2 = this.rootTree;
        while (node2.right) {
            node2 = node2.right;
        }
        return node2.data;
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
// tree.remove(3);
console.log(tree.root());