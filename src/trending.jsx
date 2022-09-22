import "./trending.css"
import Image from 'react-bootstrap/Image'
import ReactCardCarousel from "react-card-carousel";

export default function Trending() {
    const cards = [{
        picture:
        "81377uik.bmp",
        movieName:
        "Blade Runner",
    },
    {
        picture:
        "ailcekn4.bmp",
        movieName:
        "Jurassic Park",
    },
    {
        picture:
        "cotyaumr.bmp",
        movieName:
        "Back to the Future",
    },
    {
        picture:
        "e71mtiyg.bmp",
        movieName:
        "Joker",
    },
    {
        picture:
        "gpz8tvcf.bmp",
        movieName:
        "Avengers: Endgame",
    },
    {
        picture:
        "r670o5et.bmp",
        movieName:
        "Moonlight",
    },
]
    const moviePosters = cards.map((movieCards =>
        <div className="card" style={{ width: '18rem'}}>
            <Image className="fluid rounded"  src={`src/img/${movieCards.picture}`} />
            <div className="card-body">
                <h5 className="card-title">{movieCards.movieName}</h5>
                <a href="#" className="btn btn-primary">Play</a>
            </div>
        </div>
    ))
    return (
        <div className="netflix-row">
            <ReactCardCarousel>
                {moviePosters}
            </ReactCardCarousel>
        </div>
    ) 
}