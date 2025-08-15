import { useEffect, useState } from "react";

import "../App.css"

type Post = {
    id: number,
    userId: number,
    title: string,
    body: string
}

const Dyna = () => {
    // set data
    const [post,setPost] = useState<Post[]>([])

    // submit a from
    const handelFormeSub = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const form = event.currentTarget;
        // const Text = event.target.text.value;
        const Text = (form.elements.namedItem("text") as HTMLInputElement).value;
        alert(Text)
    }
    // fetch data
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data) )
    },[])
    return (
        <div className="Dy-main">
            <div className="button-div">
                <button onClick={()=>{alert("hello world")}}>click</button>
            </div>
            <div>
                <form className="from-dy" onSubmit={handelFormeSub}>
                    <input type="text" name="text" id="text" />
                    <button type="submit">submit</button>
                </form>
            </div>
            <div>
                {post.map((all)=>(
                    <div key={all.id}>
                        <div className="map-data">
                            <h4>{all.title}</h4>
                            <p>{all.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dyna;