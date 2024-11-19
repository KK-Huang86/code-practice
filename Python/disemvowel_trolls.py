#Your task is to write a function that takes a string and return a new string with all vowels removed.

#For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# def disemvowel(string_):
#   vowels=["a","e","i","o","u","A","E","I","O","U"] #排除母音
#   check_list=[ x for x in string_ if x not in vowels] #string 原本為字串，但進入推倒式時，會被分割成
#   return "".join(check_list)
    

# disemvowel("What the hell")



def shortcut( s ):
    # ...
    vowel=['a','e','i','o','u']
    check_list=[x for x in s if x not in vowel]
    return ''.join(check_list)