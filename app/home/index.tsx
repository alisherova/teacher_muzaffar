import React from 'react';
import { FirstSection, ReviewsSection, SecondSection, ResultsSection, QuestionsSection } from "@/app/home/components";

const HomePage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ReviewsSection />
      <ResultsSection />
      <QuestionsSection />
    </div>
  );
};

export default HomePage;