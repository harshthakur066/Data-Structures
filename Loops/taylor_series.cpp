// O(n)

#include <iostream>

double taylor(double x, double n)
{
    double s = 1;

    for (; n > 0; n--)
    {
        s = 1 + (x / n) * s;
    }

    return s;
}

using namespace std;

int main()
{
    cout << taylor(1, 10);
    return 0;
}