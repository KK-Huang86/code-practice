# import random
# cc= random.random(range(0,10),1) # 創1-10
# print(cc)

# nn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# result =[n for n in nn if n %2==0]
# print(result)

# nn= list(range(0,40))
# print(nn)

# import random

# respon = int(input("請輸入1.剪刀 2.石頭 3.布: "))
# cpu_give_a_number=random.randint(1,3)

# if respon <=3:
#   if respon== cpu_give_a_number:
#     print("平手")
#   elif((respon==1 and cpu_give_a_number==2) or (respon==2 and cpu_give_a_number==3) or (respon==3 and cpu_give_a_number==1)):
#     print("你輸了")
#   else:
#     print("你贏了")
# else:
#   print("請輸入正確的數字")  

weather= "rain"

match weather:
	case "rain":
		print("下雨了")
	case "sunny":
		print("出太陽")
	case "cloudy":
		print("多雲的天氣")
	case something:
		print(f"我不知道 {something}是什麼鬼天氣")