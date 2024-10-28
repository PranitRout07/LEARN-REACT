package main

type Product struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Image       string `json:"image"`
	Description string `json:"description"`
	Price       int    `json:"price"`
	Incart      bool   `json:"incart"`
}

