package Bitwise;

public class BitwiseSet {
    // Check if kth bit is set or not i.e 1 or not (0)
    static void kthBitLeftShift(int n, int k) {
        if ((n & (1 << (k - 1))) != 0)
            System.out.println("Left Shift - SET");
        else
            System.out.println("Left Shift - NOT SET");
    }

    static void kthBitRightShift(int n, int k) {
        if (((n >> (k - 1)) & 1) == 1)
            System.out.println("Right Shift - SET");
        else
            System.out.println("Right Shift - NOT SET");
    }

    // driver code
    public static void main(String[] args) {
        int n = 5, k = 1;
        kthBitLeftShift(n, k);
        kthBitRightShift(n, k);
    }

}
