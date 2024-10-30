# 計算某一年當中有幾個 13號星期五

from calendar import weekday


def unlucky_days(year):
    count=0
    for month in range(1,13):
        if weekday(year,month,13) == 4: #weekday模組當中，星期一為0 星期二為1 ，以此類推，因此星期五為4
            count+=1
    print(count)        
    return count


unlucky_days(2024) #result = 2