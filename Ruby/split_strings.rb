#Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

#Examples:

#* 'abc' =>  ['ab', 'c_']
#* 'abcdef' => ['ab', 'cd', 'ef']

def solution(str)
  # your code here
  str+="_" if str.length % 2 != 0
  result=[]
  (0...str.length).step(2) do |i|
    result<<str[i,2]
  end
  result
end