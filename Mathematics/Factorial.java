package Mathematics;

public class Factorial {
    static int loop(int n) {
        int res = 1;
        for (int i = 2; i <= n; i++) {
            res = res * i;
        }
        return res;
    }

    static int recursion(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * recursion(n - 1);
        }
    }

    public static void main(String args[]) {
        int num = 4;

        System.out.println("Loop " + loop(num));
        System.out.println("Recursion " + recursion(num));
    }
}
