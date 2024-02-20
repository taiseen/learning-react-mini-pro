import { useState } from "react";

const AddPost = ({ onAddPost }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, body, };
        onAddPost(newPost);

        // reset form
        setTitle("");
        setBody("");
    };

    return (
        <div className="my-3">

            <h2 className="font-bold my-2">Add new post</h2>

            <form onSubmit={handleSubmit} className="flex gap-2">

                <input
                    type="text"
                    value={title}
                    placeholder="Post title"
                    className="rounded-sm px-1 w-52"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    value={body}
                    className="rounded-sm px-1 w-80"
                    placeholder="Post body"
                    onChange={(e) => setBody(e.target.value)}
                />

                <input type="submit" className="bg-green-200 px-1 rounded-sm cursor-pointer" />

            </form>
        </div>
    );
}

export default AddPost;