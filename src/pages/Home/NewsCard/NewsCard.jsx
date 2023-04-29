import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaShareAltSquare, FaShareSquare, FaShieldVirus, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const NewsCard = ({ news }) => {
  const { title, details, _id, image_url,author,total_view,rating } = news;
  return (
    <div>
        <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{height: '40px'}} src={author?.img} roundedCircle />
      <div className="ps-2 flex-grow-1">
        <h6 className="mb-0">{author.name}</h6>
        <p className="text-secondary"><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
      </div>
      <div>
        <FaRegBookmark className="text-secondary me-2"></FaRegBookmark>
        <FaShareAlt className="text-secondary"></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : 
          <>{details.slice(0,250)}... <br /> <Link className="text-warning" to={`/news/${_id}`}>
            Read More</Link></>
          }
          <hr />
        </Card.Text>
      </Card.Body>
      <Card.Text className="text-muted d-flex px-3 pb-3 align-items-center">
        <div className="flex-grow-1">
            <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
            <FaEye></FaEye> {total_view}
        </div>
      </Card.Text>
    </Card>
    </div>
  );
};

export default NewsCard;
