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

    static int sumSubsets(int arr[], int n, int sum) {
        if (n == 0)
            return sum == 0 ? 1 : 0;

        return sumSubsets(arr, n - 1, sum) + sumSubsets(arr, n - 1, sum - arr[n - 1]);
    }

    public static void main(String args[]) {
        String str = "ABC";
        subsets(str, "", 0);

        int n = 3, arr[] = { 10, 20, 15 }, sum = 25;
        System.out.println();
        System.out.println(sumSubsets(arr, n, sum));
    }
}
