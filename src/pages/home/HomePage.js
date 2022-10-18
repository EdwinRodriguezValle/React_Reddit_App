import React, {useState, useEffect} from 'react';
import './HomePage.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import logo from '../../assets/logo.png';


function HomePage() {

    const [reddits, setReddits] = useState([]);
    // const [error, setError] =useState(false);
    // const[cargando, setCargando ]=useState(false);

    useEffect(() => {
        async function fetchData() {
            // setCargando(true);
            // setError(false);

            try {
                const resultado = await axios.get('https://www.reddit.com/hot.json?limit=15');
               console.log(resultado);
                setReddits(resultado.data.data.children);
            } catch (e) {
                console.error(e);

            }
            // setCargando(false)
            // setError(true);
        }

        fetchData();
    }, [])

    return (
        <>
            <Header>
                <img src={logo} alt="Reddit header logo"/>
                <h1>Reddit</h1>
            </Header>
            <main>
                <section className="outer-content-container hottest-posts">
                    <div className="inner-content-container">
                        <h2>Hottest-Post</h2>
                        <h4>on Reddit right now</h4>
                        <div className="subreddit-article-container">
                            {reddits.map((reddit) => {
                                return (
                                    <article className="subreddit-article" key={reddit.data.id}>

                                        {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
                                        <a href={reddit.data.url} className="subreddit-article">
                                            <h3>{reddit.data.title}</h3>
                                        </a>

                                        <span>
                      <p><Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link></p>
                      <p>Comments {reddit.data.num_comments} — Ups {reddit.data.ups}</p>
                    </span>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;