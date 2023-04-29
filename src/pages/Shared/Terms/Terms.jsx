import React from 'react';
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus iusto optio, placeat ut consequuntur cum aliquam consequatur harum inventore culpa commodi? Dolor nostrum repudiandae perferendis harum temporibus voluptatem quam.</p>
            <p>Go back to <Link className='text-decoration-none text-danger'
             to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;