// O(n)

#include <iostream>

int fib(int n)
{
    int t0 = 0, t1 = 1, s, i;

    for (i = 2; i < n + 1; i++)
    {
        s = t0 + t1;
        t0 = t1;
        t1 = s;
    }

    return s;
}

using namespace std;

int main()
{
    cout << fib(5);
    return 0;
}