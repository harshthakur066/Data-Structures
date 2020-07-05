// O(2^n) --> Normal
// O(n) --> With Memoization

#include <iostream>

int fib(int n)
{
    if (n <= 1)
    {
        return n;
    }

    else
    {
        return fib(n - 2) + fib(n - 1);
    }
}

int F[10];

int mfib(int n)
{
    if (n <= 1)
    {
        F[n] = n;
        return n;
    }

    else
    {
        if (F[n - 2] == -1)
        {
            F[n - 2] = mfib(n - 2);
        }

        if (F[n - 1] == -1)
        {
            F[n - 1] = mfib(n - 1);
        }
        return F[n - 2] + F[n - 1];
    }
}

using namespace std;

int main()
{
    for (int i = 0; i < 10 + 1; i++)
    {
        F[i] = -1;
    }
    cout << "Normal: " << fib(6) << endl;
    cout << "Memoization: " << mfib(10);
    return 0;
}