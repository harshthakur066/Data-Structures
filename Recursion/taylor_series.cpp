// O(n^2)

#include <iostream>

double taylor(int x, int n)
{
    static double p = 1, f = 1;
    double r;

    if (n == 0)
    {
        return 1;
    }

    else if (n < 0)
    {
        return 0;
    }

    else
    {
        r = taylor(x, n - 1);
        p = p * x;
        f = f * n;
        return r + (p / f);
    }
}

using namespace std;

int main()
{
    cout << taylor(1, 10);
    return 0;
}