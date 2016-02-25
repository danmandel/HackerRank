# Prints an n-length staircase

import sys

n = int(input().strip())
x = "#"
s = " "

for i in range(1,n+1):
    print ((s*(n-i))+(x * i))
