package main

type Storage interface{
	getallproducts()(*[]Product,error)
	addToCart(int)(*Product,error)
	removeFromCart(int)(*Product,error)
	getCartproducts()(*[]Product,error)

}