import React from 'react';
import ReviewsFirstView from './main';
import { ReviewsSecondView } from './secondReviewPage';
import { ArrowNavigator, GreenDecor } from './style'

const ReviewsSection = () => {
    return (
        <div className='h-screen flex justify-between pt-14 pb-8'>
            <GreenDecor></GreenDecor>
            <ReviewsFirstView />
            {/* <ReviewsSecondView /> */}
            <div className='h-1/2 self-center flex flex-col' >
                <ArrowNavigator></ArrowNavigator>
                <ArrowNavigator
                    style={{
                        backgroundColor: "#B0DAFF",
                        borderBottomLeftRadius: "0px",
                        borderTopRightRadius: "50%"
                    }}>
                </ArrowNavigator>
            </div>
        </div>
    );
};

export default ReviewsSection;
