package Mathematics;

public class LCM {

    // Complaxity of LCM will be same of the GCD function since
    // LCM function has constant time operation
    // O(log(min(a,b)))

    static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }

    public static void main(String args[]) {
        int x = 8, y = 20;
        System.out.println("LCM " + lcm(x, y));
    }
}
