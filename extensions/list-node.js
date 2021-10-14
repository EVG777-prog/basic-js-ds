const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports.ListNode = function(x) {
    class LinkedList {
        constructor() {
            this.head = null;
            this.length = 0;
        }

        add(value) {
            if (this.length == 0) {
                this.head = new ListNode(value);
            } else {
                let i = 0;
                let nodeTemp = this.head;
                while (nodeTemp.next) {
                    nodeTemp = nodeTemp.next;
                }
                nodeTemp.next = new ListNode(value);
            }
            this.length++;
        }

        remove(i) {
            if (i < 0 || i > (this.length - 1)) return false;
            if (i == 0) {
                this.head = null;
                return true;
            }
            let prev = this.head,
                current = this.head.next;

            for (let x = 1; x <= i; x++) {
                if (x == i) {
                    prev.next = current.next;
                    current = null;
                    return true;
                }
                prev = current;
                current = current.next;

            }
        }
    }



    this.value = x;
    this.next = null;

    let list1;

    function removeKFromList(l, k) {
        const list2 = new LinkedList();
        for (let i = 0; i < l.length; i++) {
            list2.add(l[i]);
        }

        while (list2.head.value == k) {
            list2.head = list2.head.next;
            list2.length -= 1;
        }
        if (list2.length < 2) return list2;
        let prev = list2.head,
            current = list2.head.next,
            i = 1;
        while (i < list2.length) {
            if (current.value == k) {
                prev.next = current.next;
                current.next = null;
                current = prev.next;
                list2.length -= 1;
                i--;
            }
            i++;
        }
        return list2;
    }
}