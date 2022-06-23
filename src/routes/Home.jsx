import { Header } from "../components/Header"
import pages from "../data/pages.json"
import { useEffect, useState } from "react"
import { parse } from "rss-to-json"
import { HomeLink } from "../components/HomeLink"

//getHomeStories(pages[0])

function Home() {

  const [stories, setStories] = useState([])

  useEffect(() => {
    let active = true;
    const getData = async () => {

      var rss = await Promise.all(pages.map((page) => parse(page)));
      if (active) {
        setStories([...stories, ...rss]);
        console.log(rss);
      }
    }
    getData();
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="container mx-auto px-2 md:px-24">
      <Header title={"Latests stories"} />
      {
        stories ? stories.map((storie, id) => <HomeLink key={id}blogName={storie.title} desc={storie.description} url={pages[id]}></HomeLink>): <div>Loading</div>
      }

    </div>
  )
}

export default Home
