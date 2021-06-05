package Mathematics;

public class GCD {
    // Basic approch
    // Complexity - O(min(a,b))
    static int basic_gcd(int a, int b) {
        int res = Math.min(a, b);
        while (res > 0) {
            if (a % res == 0 && b % res == 0) {
                break;
            }
            res--;
        }

        return res;
    }

    // Complesxity - O(n)
    static int euclidean_gcd(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        return a;
    }

    // Most Efficient way using recursion
    // Complexity O(log(min(a,b)))
    static int optimized_euclidean_gcd(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return optimized_euclidean_gcd(b, a % b);
        }
    }

    public static void main(String args[]) {
        int x = 4, y = 6;

        System.out.println("Basic " + basic_gcd(x, y));
        System.out.println("Euclidean " + euclidean_gcd(x, y));
        System.out.println("Optimized Euclidean " + optimized_euclidean_gcd(x, y));
    }

}
