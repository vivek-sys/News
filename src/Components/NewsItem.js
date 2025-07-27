import './Styles.css'

const NewsItem = ({ title, description, src, url }) => {
    return (
        <>
        {console.log("abc",title, description, src, url)}
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }} >
                <img src={src} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="News will be updated" />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 50) : "No title available"}</h5>
                    <p className="card-text">{description ? description.slice(0, 90) : "No News available here"}</p>
                    <a href={url} className="btn btn-primary">Read more...</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem;