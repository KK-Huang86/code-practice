#a = [121, 144, 19, 161, 19, 144, 19, 11]
#b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
#comp(a, b) => True

# a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

#寫出一個函式，比較 第一個陣列的平方 是否 為 第二個陣列的值

from collections import Counter


def comp(a,b):
  if a is None and b is None:
    return False
  a_squared=[ x**2  for x in a]

  return Counter(a_squared) == Counter(b)


a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
print(comp(a,b))


# 或者

def compare(c,d):
  if c is None and d is None:
    return False
  c_squared=[cc**2 for cc in c]

  return sorted(c_squared) == sorted(d)

c=[2,3,4,5,6,7,8]
d=[4,9,16,25,36,49,64]
print(compare(c,d))