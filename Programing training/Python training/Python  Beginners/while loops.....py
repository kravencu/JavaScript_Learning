given_list3 = [7, 5, 4, 4, 3, 1, -2, -3, -5, -7]
total6 = 0
h = len(given_list3) - 1
while given_list3[h] < 0:
    total6 += given_list3[h]
    h -= 1
print(total6)