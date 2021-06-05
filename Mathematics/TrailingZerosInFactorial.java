package Mathematics;

public class TrailingZerosInFactorial {

    // Complaxity = O(log n)
    // Best solution without overflow
    // 5^k <= n
    // k<= log(base 5)n
    static int countTrailingZeros(int n) {
        int res = 0;
        for (int i = 5; i <= n; i = i * 5) {
            res = res + n / i;
        }
        return res;
    }

    public static void main(String args[]) {
        int num = 251;
        System.out.println(countTrailingZeros(num));
    }
}
