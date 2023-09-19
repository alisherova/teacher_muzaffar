import React, { useEffect, useRef, useState } from 'react';
import { Answer, QuestionSection, QuestionAlign } from './style';
import { FaChevronDown } from 'react-icons/fa';
import { questions } from '@/constants/FAQs';

interface Question {
    id: number;
    title: string;
    answer: string;
}

const QuestionsComponent: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActive((prevState) => {
            if (prevState === index) {
                return null
            } else return index
        });
    };

    return (
        <div>
            {questions.map((question: Question, index: number) => (
                <QuestionSection
                    key={index}
                    onClick={() => toggleAccordion(index)}
                >
                    <div>
                        <QuestionAlign>
                            <h4>{question.title}</h4>
                            <FaChevronDown
                                className={active === index ? 'question-icon rotate-180' : 'question-icon'}
                            />
                        </QuestionAlign>
                        <Answer isActive={active === index}>
                            <p>{question.answer}</p>
                        </Answer>
                    </div>
                </QuestionSection>
            ))}
        </div>
    );
};

export default QuestionsComponent;
