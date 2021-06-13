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

    static void swap(ArrayList<Integer> arr, int x, int y) {
        int temp = arr.get(x);
        arr.set(x, arr.get(y));
        arr.set(y, temp);
    }

    static void reverse(ArrayList<Integer> arr) {
        int low = 0, high = arr.size() - 1;

        while (low < high) {
            swap(arr, low, high);

            // int temp = arr.get(low);
            // arr.set(low, arr.get(high));
            // arr.set(high, temp);

            // arr[low] = arr[high];
            // arr[high] = temp;

            low++;
            high--;
        }
    }

    static void moveZerosToEnd(ArrayList<Integer> arr) {
        int count = 0;

        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr.get(i) != 0) {
                swap(arr, arr.get(i), arr.get(count));
                count++;
            }
        }
    }

    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        al.add(10);
        al.add(20);
        al.add(30);
        al.add(1, 60);

        System.out.println(al + "\n Size " + al.size());

        Collections.sort(al);
        System.out.println("Sorted " + al);
        System.out.println("Sorted - " + isSorted(al));

        reverse(al);
        System.out.println("Reverse " + al);

        al.add(0);
        al.add(150);
        al.add(90);
        System.out.println("Array " + al);

        // moveZerosToEnd(al);
        // System.out.println("Move zeros to end " + al.size());
    }
}
