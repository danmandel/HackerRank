# Prints the sum of the large elements in the array
import sys

n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

result = 0
for i in arr:
    result += i
print (result)
