// Increasing the size of dynamic array

#include <iostream>

using namespace std;

int main()
{
    int *p = new int[5];
    int *q = new int[10];

    p[0] = 2;
    p[1] = 4;
    p[2] = 6;
    p[3] = 8;
    p[4] = 10;
    p[5] = 12;

    for (int i = 0; i < 5; i++)
    {
        q[i] = p[i];
    }

    delete[] p;
    p = q;
    q = NULL;

    for (int j = 0; j < 5; j++)
    {
        cout << p[j] << " ";
    }

    return 0;
}