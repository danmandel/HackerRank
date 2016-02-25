import sys
# Calculates what percentage of the array is positive, negative, or zero.

n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

total = len(arr)
positives = 0
zeroes = 0
negatives = 0

for i in arr:
    if i > 0:
        positives += 1
    elif i < 0:
        negatives += 1
    else: zeroes += 1
        
percent_positive = positives / total
percent_negative = negatives / total
percent_zeroes = zeroes / total

print (percent_positive)
print (percent_negative)
print (percent_zeroes)
