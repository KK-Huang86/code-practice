list = [False, 1, 0, -1, 2, 0, 1, 3, "a"]

def move_zeros_to_end(arr):
  filter_false_list=[n for n in arr if n is not False] #得到沒有 False的串列
  exclude_zero_list=[ x for x in filter_false_list if x != 0]
  zero_list=[p for p in filter_false_list if p == 0]
  exclude_zero_list.insert(0,False)
  return exclude_zero_list+zero_list


result = move_zeros_to_end(list);
print(result); # 印出 [False, 1, -1, 2, 1, 3, "a", 0, 0]

# print(fliter_false)
# print(new_list)
# print(zero_list)
