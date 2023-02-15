import React from 'react';
import { Route } from 'react-router-dom';
 
export default (
    <React.Fragment>
        <Route path='/products' />
        <Route path='/products?brand=charnwood' />
        <Route path='/products?brand=cocoon-fires' />
        <Route path='/products?brand=faber' />
        <Route path='/products?brand=fontana' />
        <Route path='/products?brand=everdure' />
        <Route path='/products?brand=lacunza' />
        <Route path='/products?brand=realfyre' />
        <Route path='/products?brand=signi-fires' />
        <Route path='/products?brand=home-fires' />
        <Route path='/products?brand=morso' />
        <Route path='/products?brand=la-nordica-extraflame' />
        <Route path='/products?brand=sentinel-fireplaces' />
        <Route path='/products?brand=hofats' />
        <Route path='/products?brand=godin' />
        <Route path='/products?brand=hergom' />
        <Route path='/products?brand=nestor-martin' />
        <Route path='/products?brand=stouff' />
        <Route path='/products?location=indoor' />
        <Route path='/products?location=indoor&category=braais' />
        <Route path='/products?location=indoor&category=fireplaces' />
        <Route path='/products?location=indoor&category=fire-pits' />
        <Route path='/products?location=indoor&category=pizza-ovens' />
        <Route path='/products?location=outdoor' />
        <Route path='/products?location=outdoor&category=braais' />
        <Route path='/products?location=outdoor&category=fireplaces' />
        <Route path='/products?location=outdoor&category=fire-pits' />
        <Route path='/products?location=outdoor&category=pizza-ovens' />
        <Route path='/products/:slug' />
        <Route path='/blog/:slug' />
        <Route path='/contact/cape-town' />
        <Route path='/contact/johannesburg' />
        <Route path='/contact/garden-route' />
        <Route path='/booking' />
        <Route path='/privacy-policy' />
        <Route path='/terms-and-conditions' />
        <Route path='/account' />
    </React.Fragment>
);