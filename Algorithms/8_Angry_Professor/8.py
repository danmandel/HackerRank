# Prints "Yes" if few than K students are present.

import sys

t = int(input().strip())
for a0 in range(t):
    on_time = 0
    n,k = input().strip().split(' ') # N students in class, K cancellation threshold
    n,k = [int(n),int(k)]
    a = [int(a_temp) for a_temp in input().strip().split(' ')]
    for i in a:
        if i <= 0:
            on_time += 1
        
    if (on_time) < k:
        print ("YES")
    else:
        print("NO")
    
