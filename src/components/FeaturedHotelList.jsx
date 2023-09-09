import React from 'react';
import HotelCard from '../shared/HotelCard';
import { Col } from 'reactstrap';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const FeaturedHotelList = () => {

  const {data:featuedHotels, loading, error} = useFetch(`${BASE_URL}/hotels/search/getFeaturedHotel`);

  return (
    <>
    {
      loading && <h4>Loading .....</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {
        !loading && !error && featuedHotels?.map(hotel => (
            <Col lg='3' md='6' sm='6' className='mb-4' key={hotel._id}><HotelCard hotel={hotel}/></Col>
        ))
    }
    </>
  )
}

export default FeaturedHotelList;