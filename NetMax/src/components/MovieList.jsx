import React from 'react'

function MovieList() {
    const videoList = [
        {
          id: 1,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 2,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
        {
          id: 5,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 6,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 8,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
        {
            id: 9,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 10,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 11,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 12,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 13,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 14,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 15,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 16,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
          {
            id: 17,
            image:
              "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
          },
      ];
  return (
    <div className='pt-20 '>
        <div>
            <h1 className='pl-10 text-xl text-shadow-dark text-white font-semibold  '>New Releases</h1>
        </div>
    
    <div className='p-9 pt-13 overflow-x-scroll scroll-smooth w-full scroll whitespace-nowrap scrollbar-hide '>

        {
            videoList.map((val,index)=>{
                return (
                    <div className=' inline-block m-2 md:m-3' key={index}>
                        <img className='h-[200px] w-[130px] rounded-md transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-125  my-2 ' src={val.image} />
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default MovieList