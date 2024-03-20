import { Link } from "react-router-dom";

const PostDetails = ({data}) => {
    // console.log(data);
    const {id,title}=data;
    return (
        <div className="p-10 text-2xl   rounded-xl  bg-gray-300">
            <h1>  user id:  {id} </h1>
            <h1 className="py-5">  title:  {title} </h1>
            <Link to ={`/posts/${id}`}> <button className="px-3 bg-green-400 text-lg">show more</button> </Link>
        </div>
    );
};

export default PostDetails;