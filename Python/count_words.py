#Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

#Examples:

#"Hey fellow warriors"  --> "Hey wollef sroirraw" 
#"This is a test        --> "This is a test" 
#"This is another test" --> "This is rehtona test"

def spin_words(sentence):
  split_sentence=sentence.split(" ")
  processed_sentence = [ word[::-1] if len(word)>=5 else word for word in split_sentence]
  print(processed_sentence)
  return " ".join(processed_sentence)

spin_words("Hey fellow warriors")