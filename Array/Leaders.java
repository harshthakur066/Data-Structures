package Array;

import java.util.ArrayList;

public class Leaders {
    static ArrayList<Integer> leaders(int arr[]) {
        int n = arr.length;
        ArrayList<Integer> temp = new ArrayList<Integer>();

        int curr_ldr = arr[n - 1];
        temp.add(curr_ldr);

        for (int i = n - 2; i >= 0; i--) {
            if (curr_ldr < arr[i]) {
                curr_ldr = arr[i];
                temp.add(curr_ldr);
            }
        }
        return temp;
    }

    public static ArrayList<Integer> reverseArrayList(ArrayList<Integer> alist) {
        ArrayList<Integer> revArrayList = new ArrayList<Integer>();
        for (int i = alist.size() - 1; i >= 0; i--) {

            revArrayList.add(alist.get(i));
        }

        return revArrayList;
    }

    public static void main(String[] args) {
        int arr[] = { 7, 10, 4, 10, 6, 5, 2 };
        ArrayList<Integer> leadersArray = new ArrayList<Integer>();
        leadersArray = leaders(arr);
        leadersArray = reverseArrayList(leadersArray);

        for (int i = 0; i < leadersArray.size(); i++) {
            System.out.print(leadersArray.get(i) + " ");
        }

    }
}
