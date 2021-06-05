import { useEffect, useState } from "react";

const Articles = () => {

    const [articles, setArticle] = useState(null);

    useEffect(() => {

        setTimeout(async () => {

            const url = `https://jsonplaceholder.typicode.com/posts`;
            const res = await fetch(url);
            const data = await res.json();
            setArticle(data);

        }, 5000);
    }, []);

    return (
        <div className="articles">
            <h2>Articles</h2>

            {articles && (
                articles.map(article => {
                    const { id, title, body } = article;
                    return <div className="article" key={id}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                })
            )}
            {!articles && (<h1>Loading...</h1>)}
        </div>
    );
};

export default Articles;