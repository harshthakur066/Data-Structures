// Combonation = n! / r! * (n-r)!
// Pascle's Triangle = nCr = n-1Cr-1 + n-1Cr

// O(n) --> By normal combination formula
// O(n) --> By Pascle's Triangle formula (Recursion)

#include <iostream>

using namespace std;

// Factorial Recursion
int factorial(int f)
{
    if (f > 0)
    {
        return factorial(f - 1) * f;
    }
    else
    {
        return 1;
    }
}

// By formula
int combination(int n, int r)
{
    int t1, t2, t3;

    t1 = factorial(n);
    t2 = factorial(r);
    t3 = factorial(n - r);

    return t1 / (t2 * t3);
}

// Pascle's Triangle (Recursion)
int combination_pascles(int n, int r)
{
    if (r == 0 || r == n)
    {
        return 1;
    }
    else
    {
        return combination_pascles(n - 1, r - 1) + combination_pascles(n - 1, r);
    }
}

int main()
{
    cout << "By formula: " << combination(5, 1) << endl;
    cout << "By Pascle's triangle: " << combination_pascles(5, 2);
    return 0;
}