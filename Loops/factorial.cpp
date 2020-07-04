#include <iostream>

int factorial(int n)
{
    int i, s = 1;

    if (n > 0)
    {
        for (i = 1; i < n + 1; i++)
        {
            s = s * i;
        }

        return s;
    }

    else
    {
        return 1;
    }
}

using namespace std;

int main()
{
    cout << factorial(5);
    return 0;
}