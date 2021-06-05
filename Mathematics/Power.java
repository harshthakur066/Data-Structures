package Mathematics;

public class Power {
    // Naive Approach
    // Complexity - O(n)
    static int power(int x, int n) {
        int res = 1;
        for (int i = 0; i < n; i++) {
            res = res * x;
        }
        return res;
    }

    // Recursive better approach
    // Complexity - O(log n) space - O(n) call stack
    static int recursivePower(int x, int n) {
        if (n == 0)
            return 1;
        int temp = recursivePower(x, n / 2);
        temp = temp * temp;
        if (n % 2 == 0) {
            return temp;
        } else {
            return temp * x;
        }
    }

    // (Binary Exponentiation) Itterative approch with constant space
    // Complexity - O(log n) space - O(1)
    static int iterativePower(int x, int n) {
        int res = 1;
        while (n > 0) {
            if (n % 2 != 0)
                res = res * x;

            x = x * x;
            n = n / 2;
        }
        return res;
    }

    public static void main(String[] args) {
        int p = 4, q = 5;
        System.out.println("Naive " + power(p, q));
        System.out.println("Recursive " + recursivePower(p, q));
        System.out.println("Itterative " + iterativePower(p, q));
    }
}
