package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)
type function func(w http.ResponseWriter,r *http.Request)error

type Server struct {
	Addr  string
	Store Storage
}

func NewServer(Addr string,store Storage)*Server{
	return &Server{
		Addr: Addr,
		Store: store ,
	}
}

func (s *Server) Run() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/products",Check(s.GetAllProducts))
	mux.HandleFunc("/api/update/{id}",Check(s.AddToCart))
	mux.HandleFunc("/api/remove/{id}",Check(s.RemoveFromCart))
	mux.HandleFunc("/api/getcartproducts",Check(s.GetCartProducts))
	http.ListenAndServe(s.Addr,mux)
}
func Check(f function)func(w http.ResponseWriter,r *http.Request){
	return func(w http.ResponseWriter,r *http.Request){
		err := f(w,r)
		if err!=nil{
			jsondata,err := json.Marshal(err)
			if err!=nil{
				return 
			}
			w.Write(jsondata)
			return
		}
	}
}

func (s *Server) GetAllProducts(w http.ResponseWriter,r *http.Request)error{
	if r.Method != "GET"{
		return fmt.Errorf("invalid method")
	}
	products,err := s.Store.getallproducts()
	if err!=nil{
		return err
	}
	jsondata,err := json.Marshal(*products)
	if err!=nil{
		return err
	}
	w.Write(jsondata)
	return nil
}

func (s *Server) AddToCart( w http.ResponseWriter,r *http.Request)error{
	id,err := strconv.Atoi(r.PathValue("id"))
	if err!=nil{
		return err
	}
	_,err = s.Store.addToCart(id)
	if err!=nil{
		return err
	}
	jsondata,err := json.Marshal("added to cart")
	if err!=nil{
		return err
	}
	w.Write(jsondata)
	return nil
}

func (s *Server) RemoveFromCart(w http.ResponseWriter,r *http.Request)error{
	id,err := strconv.Atoi(r.PathValue("id"))
	if err!=nil{
		return err
	}
	_,err = s.Store.removeFromCart(id)
	if err!=nil{
		return err
	}
	jsondata,err := json.Marshal("removed from cart")
	if err!=nil{
		return err
	}
	w.Write(jsondata)
	return nil
}


func (s *Server) GetCartProducts(w http.ResponseWriter,r *http.Request)error{
	if r.Method != "GET"{
		return fmt.Errorf("invalid method")
	}
	products,err := s.Store.getCartproducts()
	if err!=nil{
		return err
	}
	jsondata,err := json.Marshal(*products)
	if err!=nil{
		return err
	}
	w.Write(jsondata)
	return nil
}