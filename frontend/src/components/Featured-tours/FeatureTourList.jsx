import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap';
import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';
const FeatureTourList = () => {
  const {data:FeatureTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(FeatureTours);
  return (
   <>
   {
    loading && <h4>Loading.......</h4>
   }
   {
    error && <h4>{error}</h4>
   }
   {
    !loading && !error && FeatureTours?.map(tour=>(
      <Col lg='3' className='mb-4' key= {tour.id||tour._id}><TourCard tour= {tour}/>
      </Col>
    ))
   }
   </>
  );
};

export default FeatureTourList;

// import React from 'react';
// import TourCard from '../../shared/TourCard';
// import { Col, Spinner, Alert } from 'reactstrap';
// import  useFetch from './../../hooks/useFetch.js'
// import {BASE_URL} from './../../utils/config.js'

// const FeatureTourList = () => {
//   const { data: FeatureTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

//   // Logging for debugging
//   console.log('FeatureTours:', FeatureTours);
//   console.log('Loading:', loading);
//   console.log('Error:', error);

//   // Loading state
//   if (loading) {
//     return <Spinner color="primary" />;
//   }

//   // Error state
//   if (error) {
//     return <Alert color="danger">Failed to fetch featured tours: {error}</Alert>;
//   }

//   // Check for unexpected data format
//   if (!FeatureTours || !Array.isArray(FeatureTours)) {
//     return <Alert color="danger">Unexpected data format</Alert>;
//   }

//   return (
//     <>
//     {
//       loading && <h4>Loading......</h4>
//     }
//     {
//       error && <h4>{error}</h4>
//     }
//       {FeatureTours.map(tour => {
//         // Validate tour object
//         if (!tour.id && !tour._id) {
//           console.error('Tour item missing id:', tour);
//           return null;
//         }
//         return (
//           <Col lg='3' className='mb-4' key={tour.id || tour._id}>
//             <TourCard tour={tour} />
//           </Col>
//         );
//       })}
//     </>
//   );
// };

// export default FeatureTourList;
