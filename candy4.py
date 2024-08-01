#編號：CANDY-004
# 程式語言：Python
# 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

import math
def human_readable_timer(seconds):
  # 實作在這裡
  hours_time=math.floor(seconds/60**2)
  seconds%=3600
  mins_time=math.floor(seconds/60)
  seconds%=60

  return (f"{hours_time:02}:{mins_time:02}:{seconds:02}")

print(human_readable_timer(0)); # 印出 00:00:00
print(human_readable_timer(59)); # 印出 00:00:59
print(human_readable_timer(60)); # 印出 00:01:00
print(human_readable_timer(90)); # 印出 00:01:30
print(human_readable_timer(3599)); # 印出 00:59:59
print(human_readable_timer(3600)); # 印出 01:00:00
print(human_readable_timer(45296)); # 印出 12:34:56
print(human_readable_timer(86399)); # 印出 23:59:59
print(human_readable_timer(86400)); # 印出 24:00:00
print(human_readable_timer(359999)); # 印出 99:59:59