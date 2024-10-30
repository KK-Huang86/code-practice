
list1 = [19, 5, 42, 2, 77];
list2 = [23, 15, 59, 4, 17];
def sum_of_smallest_values(arr):
  # 實作程式碼寫在這裡
    return  sorted(arr)[0]+sorted(arr)[1]


print(sum_of_smallest_values(list1)); #印出 7
print(sum_of_smallest_values(list2)); #印出 19