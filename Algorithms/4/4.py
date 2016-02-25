# Calculates the sum of the diagonals, then finds the absolute difference between the two.
import sys

n = int(input().strip())
a = []
for a_i in range(n):
   a_t = [int(a_temp) for a_temp in input().strip().split(' ')]
   a.append(a_t)

b = 0
c = n-1
lr_diag = 0
rl_diag = 0

for row in a:
    
    lr_diag += row[b]
    b += 1
    
    rl_diag += row[c]
    c -= 1

abs_difference = abs(lr_diag - rl_diag)
print (abs_difference)
