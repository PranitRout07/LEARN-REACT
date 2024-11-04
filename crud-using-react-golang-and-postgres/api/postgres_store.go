package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type PostgresStore struct {
	pg *sql.DB
}

func CreatePostgresStore() *PostgresStore {
	// connStr := "postgres://postgres:ecart@host.docker.internal:5432?sslmode=disable" //dev(only in docker desktop)
	connStr := "postgres://postgres:ecart@postgres-svc.default.svc.cluster.local:5432?sslmode=disable" //prod
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	if err := db.Ping(); err != nil {
		panic(err)
	}

	fmt.Println("DB connected")
	return &PostgresStore{
		pg: db,
	}
}

func (db PostgresStore) getallproducts() (*[]Product, error) {
	q := `select * from products order by id`
	rows, err := db.pg.Query(q)
	if err != nil {
		return nil, err
	}
	products := []Product{}
	var product Product

	for rows.Next() {
		err := rows.Scan(&product.Id,&product.Title, &product.Image, &product.Description,&product.Price,&product.Incart)
		if err != nil {
			return nil, err
		}
		products = append(products, product)
	}
	return &products, nil
}

func (db PostgresStore)addToCart(id int)(*Product,error){
	q := `update products set incart=true where id=$1`
	rows,err := db.pg.Query(q,id)
	if err!=nil{
		return nil,err
	}
	
	var product Product

	for rows.Next() {
		err := rows.Scan(&product.Id,&product.Title, &product.Image, &product.Description,&product.Price,&product.Incart)
		if err != nil {
			return nil, err
		}
	}
	return &product,nil
}



func (db PostgresStore)removeFromCart(id int)(*Product,error){
	q := `update products set incart=false where id=$1`
	rows,err := db.pg.Query(q,id)
	if err!=nil{
		return nil,err
	}
	
	var product Product

	for rows.Next() {
		err := rows.Scan(&product.Id,&product.Title, &product.Image, &product.Description,&product.Price,&product.Incart)
		if err != nil {
			return nil, err
		}
	}
	return &product,nil
}



func (db PostgresStore) getCartproducts() (*[]Product, error) {
	q := `select * from products where incart=true`
	rows, err := db.pg.Query(q)
	if err != nil {
		return nil, err
	}
	products := []Product{}
	var product Product

	for rows.Next() {
		err := rows.Scan(&product.Id,&product.Title, &product.Image, &product.Description,&product.Price,&product.Incart)
		if err != nil {
			return nil, err
		}
		products = append(products, product)
	}
	return &products, nil
}