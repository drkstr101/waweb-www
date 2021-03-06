/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Coworking from 'views/Coworking';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CoworkingPage = (): JSX.Element => {
  return (
    <WithLayout
      component={Coworking}
      layout={Main}
    />
  )
};

export default CoworkingPage;