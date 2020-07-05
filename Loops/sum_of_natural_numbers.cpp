// O(n)

#include <iostream>

using namespace std;

int sum(int n)
{
    int i, s = 0;
    if (n > 0)
    {
        for (i = 0; i < n + 1; i++)
        {
            s = s + i;
        }

        return s;
    }
    else
    {
        return 0;
    }
}

int main()
{
    cout << sum(10);

    return 0;
}