const Posts = ({ posts, onDeletePost, onEditClick }) => {

    return (
        <div className="my-3">

            <h2 className="font-bold my-2">All Posts</h2>

            <div>
                <ul className="space-y-4">
                    {
                        posts.map((post) => (
                            <li key={post.id} className="flex gap-4 items-center">

                                <div className="flex gap-2">
                                    <span>{post.id}</span>
                                    <span>{post.title}</span>
                                </div>

                                <div className="flex gap-2 text-xs leading-[18px] items-center">
                                    <span
                                        title='Delete'
                                        className="cursor-pointer border border-slate-800 rounded-sm"
                                        onClick={() => onDeletePost(post.id)}
                                    >
                                        ❌
                                    </span>

                                    <span
                                        title='Edit'
                                        className="cursor-pointer border border-slate-800 rounded-sm"
                                        onClick={() => onEditClick(post)}
                                    >
                                        ✏️
                                    </span>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Posts;