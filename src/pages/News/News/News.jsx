import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInSights from '../EditorsInSights/EditorsInSights';

const News = () => {
    const news = useLoaderData()
    const {title, details, image_url,category_id} = news
    return (
        <div>
            <h5>Dragon News</h5>
            <Card>
        <Card.Img className='p-3' variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft className='me-2 mb-1'></FaArrowLeft>All news in this category</Button></Link>
        </Card.Body>
      </Card>
      <EditorsInSights></EditorsInSights>
        </div>
    );
};

export default News;