package Recursion;

public class Subsets {
    static void subsets(String str, String cur, int i) {
        if (i == str.length()) {
            System.out.print(cur + " ");
            return;
        }
        subsets(str, cur, i + 1);
        subsets(str, cur + str.charAt(i), i + 1);
    }

    public static void main(String args[]) {
        String str = "ABC";
        subsets(str, "", 0);
    }
}
