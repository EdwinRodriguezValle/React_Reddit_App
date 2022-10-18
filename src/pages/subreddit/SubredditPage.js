import './SubredditPages.css';
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import Header from "../../components/header/Header";
import {ReactComponent as BackIcon} from "../../assets/back.svg";

function SubredditPage(){
    const [details, setDetails] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json\``);
               console.log(response);
               setDetails(response.data.data);
            }catch (e){
                console.error(e)
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <Header>
                <h1>r/{id}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            <main>
                <section className="outer-content-container subreddit-specifications">
                    <div className="inner-content-container">
                        {Object.keys(details).length > 0 && (
                            <div className="subreddit-specification-details">
                                <h3>Title</h3>
                                <p>{details.title}</p>
                                <h3>Description</h3>
                                <p>{details.public_description}</p>
                                <h3>Number of subscribers</h3>
                                <p>{details.subscribers}</p>

                                <span className="back-link-wrapper">
                              <BackIcon className="back-icon"/>
                              <Link to="/">Take me back</Link>
                            </span>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );

}

export default SubredditPage;