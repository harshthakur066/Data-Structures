package Mathematics;

public class Prime {
    // Naive Method
    // Complexity - O(n) [n-2 iterations]
    static boolean isPrime(int n) {
        if (n == 1) {
            return false;
        }
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    // Best and Optimezed method 3rd time faster than the previous one
    // Complexity = O(sqrRoot(n)) [skipping over 6 and checking 2 conditons in one
    // loop]
    static boolean optimizedIsPrime(int n) {
        if (n == 1)
            return false;
        if (n == 2 || n == 3)
            return true;
        if (n % 2 == 0 || n % 3 == 0)
            return false;
        for (int i = 5; i * i <= n; i = i + 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }

    static public void main(String[] args) {
        int num = 7;
        System.out.println("Naive " + isPrime(num));
        System.out.println("Optimized " + optimizedIsPrime(num));
    }

}
