// O(n)

#include <iostream>

double taylor(double x, double n)
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

        return taylor(x, n - 1);
    }
}

using namespace std;

int main()
{
    cout << taylor(1, 10);
    return 0;
}