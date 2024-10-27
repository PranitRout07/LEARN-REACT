package main 

func main(){
	store := CreatePostgresStore()
	server := NewServer(":4000",store)
	server.Run()
}