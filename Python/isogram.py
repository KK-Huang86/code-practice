#檢查字串是否為無重複字母的單字。
#is_isogram("Ddeqrg") -> False
#is_isogram("erisoq") -> True


def is_isogram(string):
    lower_string=string.lower()
    seen=[]
    for char in lower_string:
        if char in seen:
            return False
        seen.append(char)
    return True


def practice(string):
    lower_string=string.lower()