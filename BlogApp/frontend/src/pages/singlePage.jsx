import Menu from "./menu"

export default function SinglePage({postTitle,postDescription,postID,postImage}){
    return(
        <div className="w-full h-full pt-3 flex gap-12">
            <div className="w-[75%] h-full flex-col space-y-3">
                <div className="w-full">
                    {/* image banner */}
                    <div className="w-full max-h-[25%]">
                        <img className="w-[100%] rounded-lg shadow-2xl" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>
                </div>

                <div className="flex gap-2 my-auto items-center">
                    <div>
                        <img className="rounded-full h-14 w-14"  src="https://i.pinimg.com/originals/8c/0c/4f/8c0c4fad13ae5359ba476a46f0a35892.png"/>
                    </div>
                    <div className="flex-col">
                        <div className="font-semibold">
                            <p>John</p>
                        </div>

                        <div className="">
                            <p>Posted 2 days ago</p>
                        </div>

                        
                    </div>


                    <div className="flex gap-2">
                            <div>
                                <img className="h-5 w-7" src="https://w7.pngwing.com/pngs/818/878/png-transparent-computer-icons-editing-symbol-symbol-miscellaneous-angle-text.png"/>
                            </div>

                            <div>
                            <img className="h-5 w-7" src="trash.png"/>

                            </div>
                        </div>
                    {/* who posted , posted before (option come for delete and update for the same user only)*/}
                </div>

                <div className="text-6xl font-semibold">
                    <p>S3 Bucket-AWS Tech</p>
                    {/* blog title */}
                </div>


                <div className="font-sans">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum iure culpa ut, vero qui quas error optio doloribus consequuntur amet perspiciatis ipsum laboriosam tempora reprehenderit saepe eum? Quae, consectetur.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perferendis praesentium maxime porro sint minima nobis nostrum, et tenetur tempora, ad sapiente animi eaque perspiciatis assumenda? Temporibus corporis unde maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi aliquam error mollitia! Sunt, in doloremque dicta asperiores, earum aliquid minima doloribus perspiciatis aut cum tenetur nemo exercitationem est. Consequatur.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio unde totam quia temporibus, eum quisquam amet provident deserunt mollitia quas laborum non sit, nulla odit velit reprehenderit, dolore consequuntur expedita.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet iure quasi eos quo ducimus qui nobis maxime, praesentium aspernatur. Quos, dolorem at commodi assumenda adipisci odio eius vel. Quia?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nobis delectus temporibus aut corrupti assumenda ipsa quod voluptas, consectetur architecto nostrum blanditiis veritatis sint vero consequuntur! Beatae, atque? Fugiat, nisi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus non explicabo, dolore at quae ipsum, magnam accusantium est, odio cupiditate itaque rem placeat consequuntur. Assumenda autem ex sunt iusto?
                    </p>
                    {/* description */}
                </div>
            </div>

            <div className="w-[25%] h-full">

                <Menu/>
                {/* list of suggested posts */}
            </div>



        </div>
    )
}