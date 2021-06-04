package Mathematics;

public class Palindrome {
    static boolean isPal(int n) {
        int rev = 0;
        int temp = n;

        while (temp != 0) {
            int leftDigit = temp % 10;
            rev = rev * 10 + leftDigit;
            temp = temp / 10;
        }
        return rev == n;
    }

    public static void main(String args[]) {
        int num = 434;

        System.out.println(isPal(num));
    }
}
