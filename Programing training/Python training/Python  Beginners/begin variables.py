
import random
import sys
import os
print("What is your name")
name = sys.stdin.readline()
string_a = "hola mundo"
string_b = "hola "
string_g = string_a #it must be here before string_a take the value from string_b
string_a =string_b
print(string_a)
print(string_b + name)
print(string_g) #here we can see that the variable string_g contains the value of the string_a
b = ["banana","apple","microsfot"]
print(b)
#one option to swap the values is

temp = b[0]
b[0] = b[2]
b[2] = temp
print(b)
# metodo number two
b[0], b[2] = b[2], b[0]
print(b)