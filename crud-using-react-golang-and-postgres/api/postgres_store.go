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
	connStr := "postgres://postgres:ecart@host.docker.internal:5432?sslmode=disable"
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
	q := `select * from products`
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
