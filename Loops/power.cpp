// O(n)

#include <iostream>

using namespace std;

int power(int m, int n)
{
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
        int i, r = 1;
        for (i = 1; i < n + 1; i++)
        {
            r *= m;
        }
        return r;
    }
}

int main()
{
    cout << power(3, 2);
    return 0;
}