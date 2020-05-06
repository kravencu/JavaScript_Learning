import random
import sys
import os

print("What is your name please ?")
name1 = sys.stdin.readline()
print("What is your height please ?")
height1 = sys.stdin.readline()
print("What is your weight please ?")
weight_pd1 = sys.stdin.readline()


def bmi_calculator(name, height, weight_pd):
    bmi = weight_pd / (height ** 2)
    print("bmi:")
    print(bmi)
    if bmi < 25:
        return name + " you are not overweight "
    else:
        return name + " you are overweight "


result = bmi_calculator(name1, height1, weight_pd1)

# waitingfor fixing in the future okkkkkk
