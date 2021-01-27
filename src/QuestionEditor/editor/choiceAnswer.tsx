import React, { useState, useEffect } from 'react';

import './richtext.less';



export default function ChoiceAnswer(props: any) {

    const [option, setoption] = useState(props.option);

    const [answer, setAnswer] = useState(() => {
        let answers:any = [];
        props.answer.map((item: any) => {
            let answerItem;
            if (item.children[0] && item.children[0].text) {
                answerItem = item.children[0].text;
            }

            answers.push(answerItem);
        });
        return answers;
    });

    useEffect(() => {
        let answers:any = [];
        props.answer.map((item: any) => {
            let answerItem;
            if (item.children[0] && item.children[0].text) {
                answerItem = item.children[0].text;
            }

            answers.push(answerItem);
        });
        setAnswer(answers);

    }, [props.answer]);


    useEffect(() => {
        
        setoption(props.option);

    }, [props.option]);

    function chooseAnswer(item: any) {
        let newAnswer = JSON.parse(JSON.stringify(answer));

        if (props.questionType === 'SINGLE_CHOICE' || props.questionType === 'JUDGEMENT') {
            newAnswer = [];
        } 

        let num = answer.findIndex((answerItem: any) => {
            return answerItem === item;
        });
        if (num > -1) {
            newAnswer.splice(num, 1);
        } else {
            newAnswer.push(item);
        }

        // 自动排序
        newAnswer.sort(function(a: any, b: any) { return a > b ? 1 : -1 });

        let contentAnswer = newAnswer.map((item: any) => {
            return {
                children: [{ text: item }],
                type: 'Left'
            };
        });

        props.setAnswer(contentAnswer);
    }

    return (
        <div className={'answerOption'}>
            
            {
                option.map((item: any, index: number) => {

                    let isChecked = answer[0] === item;

                    return <div 
                        key={index}
                        className={`${'item'} ${isChecked ? 'checked' : ''}`} 
                        onClick={() => chooseAnswer(item)}
                    >
                        <span style={{ fontSize: item.length === 1 ? '22px' : '12px' }}>{item}</span>
                    </div>;
                })
            }
            
        </div>
    );
}

