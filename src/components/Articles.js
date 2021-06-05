import { useEffect, useState } from "react";
import SkeletonArticle from '../skeleton/SkeletonArticle';

const Articles = ({ theme }) => {

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

            {/* {!articles && <h1>Loading...</h1>} */}
            {!articles && [1, 2, 3, 4, 5].map(n => <SkeletonArticle key={n} theme={theme} />)}

            {
                articles && articles.map(article => {

                    const { id, title, body } = article;

                    return (
                        <div className="article" key={id}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Articles;