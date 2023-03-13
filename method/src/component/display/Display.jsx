import './Display.css'
const Display = ({posts}) => {
    return (
        <div className='display-cards'>
            {posts.map((post)=>{
                return (
                    <div key={post.id} className="card m-3 p-3">
                        <div className='each-card'>
                            <div className="content">
                                <h3>{post.id}</h3>
                                <p>{post.title}</p>
                            </div>
                            <div className='btns action'>
                                <button className='btn bg-warning m-1'>Edit</button>
                                <button className='btn bg-danger m-1'>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;