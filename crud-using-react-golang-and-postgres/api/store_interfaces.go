package main

type Storage interface{
	getallproducts()(*[]Product,error)

}