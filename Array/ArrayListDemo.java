package Array;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListDemo {

    static boolean isSorted(ArrayList<Integer> arr) {
        for (int i = 1; i < arr.size() - 1; i++) {
            if (arr.get(i) < arr.get(i - 1))
                return false;
        }

        return true;
    }

    static void reverse(ArrayList<Integer> arr) {
        int low = 0, high = arr.size() - 1;

        while (low < high) {
            int temp = arr.get(low);
            arr.set(low, arr.get(high));
            arr.set(high, temp);

            // arr[low] = arr[high];
            // arr[high] = temp;

            low++;
            high--;
        }
    }

    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        int n = al.size();
        al.add(10);
        al.add(20);
        al.add(30);
        al.add(1, 60);

        System.out.println(al + "\n Size " + n);

        Collections.sort(al);

        System.out.println("Sorted " + al);
        System.out.println("Sorted - " + isSorted(al));

        reverse(al);

        System.out.println("Reverse " + al);

    }
}
