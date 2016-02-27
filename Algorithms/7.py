#!/bin/python3

import sys
from time import strptime, strftime

time = input().strip()

struct_time = strptime(time, "%I:%M:%S%p")    
m_time = strftime("%H:%M:%S",struct_time)
print(m_time)
