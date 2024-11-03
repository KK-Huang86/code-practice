#Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

#* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
#* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
#* url = "https://www.cnet.com"                -> domain name = cnet"


def domain_name(url):
  if url.startswith("http://"): #steartwith 會回傳True or False，並且用於檢查字串
    url=url[7:] #slice
  elif url.startswith("https://"):
    url=url[8:]

  split_url=url.split(".")
  if split_url[0]=="www":
    return split_url[1]
  return split_url[0]

domain_name("http://www.codewars.com/kata/")