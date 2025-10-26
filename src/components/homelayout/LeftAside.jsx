import React, { Suspense } from 'react';
import CategoryNews from '../../pages/CategoryNews';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-xs"></span>}>
            <Categories/>
           </Suspense>
        </div>
    );
};

export default LeftAside;