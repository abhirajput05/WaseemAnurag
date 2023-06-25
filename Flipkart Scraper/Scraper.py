import pandas as pd
import requests
from bs4 import BeautifulSoup

Product_name = []
Product_image = []
Prices = []
Ratings = []
Link = []

#for i in range(2,4):
url = "https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"+str(1)

r= requests.get(url)

soup = BeautifulSoup(r.text, "lxml")
box = soup.find("div",class_ = "_1YokD2 _3Mn1Gg")

#Scraping title of product
    
title = box.find_all("div", class_ = "_4rR01T")

for i in title:
    name = i.text
    Product_name.append(name)

#print(len(Product_name))

#Scraping Prices of product
prices = box.find_all("div",class_ = "_30jeq3 _1_WHN1")

for i in prices:
    name = i.text
    Prices.append(name)

#print(len(Prices))

#Scraping Ratings of product
rating = box.find_all("div", class_ = "_3LWZlK")

for i in rating:
    name = i.text
    Ratings.append(name)
       
#print(len(Ratings))

#Scraping image of product

img = box.find_all("img", class_ = "_396cs4")

for i in img:
    src = i['src']
    Product_image.append(src)

#print(len(Product_image))

#Scraping Link of product

web = box.find_all("a", class_ = "_1fQZEK")

for i in web:
    href = i['href']
    cnl = "https://www.flipkart.com"+href
    Link.append(cnl)

#print(len(Link))

#print(len(Product_name))
#print(len(Product_image))
#print(len(Prices))
#print(len(Ratings))
#print(len(Link))

df = pd.DataFrame({"Title":Product_name,"Price":Prices,"Rating":Ratings,"Image":Product_image,"Link":Link} )

df.to_csv("ProductList.csv")

#print(Link)
    #while True:
   # np = soup.find("a",class_ = "_1LKTO3").get("href")
   # cnp = "https://www.flipkart.com"+np
   # print(cnp)

   # url = cnp
   # r = requests.get(url)
   # soup = BeautifulSoup(r.text,"lxml")

