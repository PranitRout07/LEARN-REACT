package main

import (
	"fmt"
	"net/http"
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
	http.ListenAndServe(s.Addr,mux)
}
func Check(f function)func(w http.ResponseWriter,r *http.Request){
	return func(w http.ResponseWriter,r *http.Request){
		err := f(w,r)
		if err!=nil{
			w.Write([]byte(fmt.Sprintf("{error:%v}",err)))
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
	w.Write([]byte(fmt.Sprintf("{products:%v}",*products)))
	return nil
}