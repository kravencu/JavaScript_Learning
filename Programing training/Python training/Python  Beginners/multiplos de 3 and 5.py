import random
import sys
import os

# range
# 1,2,3,4,5...........
c = list(range(1, 10))
print(c)
####################################################################
total2 = 0

for h in range(1, 5):
    total2 += h
print(total2)

##################################################
# Finding 3,5 multiples

for i in list(range(1, 25)):
    if i % 3 == 0 or i % 5 == 0:
        print(i)
print("Multiples of 3 and 5 ")


# Loops

######################################################################
##   total = 0
  #  b = loops([20, 10, 5])
   # for e in b:
    #    total += e
    #return total
    #print(total)
    # careful with the space because cause print of all the recoerdo until 35 (20,30 ,35)





##############################################################################
total3 = 0
for g in range(1, 8):
    if g % 3 == 0:
        total3 += g
print(total3)
#######################################################################################
def sumalista(listaNumeros):
    laSuma = 0
    for i in listaNumeros:
        laSuma = laSuma + i
    return laSuma

print(sumalista([1,3,5,7,9]))