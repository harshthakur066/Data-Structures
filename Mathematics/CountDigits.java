package Mathematics;

// import java.lang.*;

class CountDigits {
    static int countDigits(int x) {
        int res = 0;
        while (x > 0) {
            x = x / 10;
            res++;
        }
        return res;
    }

    public static void main(String args[]) {
        int n = 2234;
        System.out.println(countDigits(n));
    }
}
