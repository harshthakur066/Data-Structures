package Mathematics;

public class SortedDivisors {
    // Complexity = O(sqrRoot(n))
    public static void main(String[] args) {
        int n = 42, i;
        // Loop from 0 to root n
        for (i = 1; i * i < n; i++) {
            if (n % i == 0)
                System.out.println(i);
        }
        // Loop from root n to n
        for (; i >= 1; i--) {
            if (n % i == 0)
                System.out.println(n / i);
        }
    }
}
