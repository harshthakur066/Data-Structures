// O(2^n)

#include <iostream>

using namespace std;

void TOH(int n, int A, int B, int C)
{
    if (n > 0)
    {
        TOH(n - 1, A, C, B);
        cout << "from " << A << " to " << C << endl;
        // count++;
        TOH(n - 1, B, A, C);
    }
    // cout << count << endl;
}

int main()
{
    TOH(3, 1, 2, 3);
    return 0;
}