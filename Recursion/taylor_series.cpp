// series of e^x is taylor series

// O(n^2) --> multiplications by taylor

// O(n) --> multiplications by horner's formula (taking common)

#include <iostream>

using namespace std;

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

// By Horners formula for

double taylor_horners(double x, double n)
{
    static double r = 1;

    if (n == 0)
    {
        return r;
    }

    else if (n < 0)
    {
        return 0;
    }

    else
    {
        r = 1 + (x / n) * r;

        return taylor_horners(x, n - 1);
    }
}

int main()
{
    cout << "By simple taylor series: " << taylor(1, 10) << endl;
    cout << "By Horner's formula: " << taylor_horners(1, 10);
    return 0;
}