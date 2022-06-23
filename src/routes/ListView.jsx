import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import parse from "rss-to-json";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

const ListView = () => {
    const [stories, setStories] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const url = searchParams.get("url")
    useEffect(() => {
        
        let active = true;
        const getData = async () => {
            var rss = await parse(url);
            if (active) {
                setStories([...stories, rss]);
            }
        }
        getData();
        return () => {
            active = false
        }
    }, [])

    return (
        <div className="container mx-auto px-2 md:px-24">

            <Header title={stories[0]?.title} />
            {console.log(stories, "state")}
            {
                stories ? stories.map((storie) => storie.items.map((item, key) =>
                    <Card key={key} author={storie.title} title={item.title} url={item.link} desc={item.description} />
                )) : <div>Loading</div>
            }

        </div>
    )
}

export default ListView