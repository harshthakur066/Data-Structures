class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}

class LinkedList {

    public static void main(String args[]) {
        Node head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);
        head.next.next.next = new Node(40);
        head = insertBegin(head, 70);
        head = insertEnd(head, 60);
        System.out.print("Iterative ");
        printlist(head);
        System.out.println();
        System.out.print("Recursive ");
        printListRecursive(head);

    }

    static Node insertBegin(Node head, int x) {
        Node temp = new Node(x);
        temp.next = head;
        return temp;
    }

    static Node insertEnd(Node head, int x) {
        Node temp = new Node(x);
        if (head == null)
            return temp;
        Node curr = head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = temp;
        return head;
    }

    public static void printlist(Node head) {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
    }

    public static void printListRecursive(Node head) {
        if (head == null) {
            return;
        }
        System.out.print(head.data + " ");
        printListRecursive(head.next);
    }
}
