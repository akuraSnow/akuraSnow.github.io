import React, { useState, useEffect } from 'react';
// @ts-ignore
import styles from './judgementAnswer.less';

import { optionObject } from '../client';

export default function JudgementAnswer(props: any) {

    const [option, setoption] = useState(props.option);

    const [chooseItem, setChooseItem] = useState(JSON.stringify(props.option));

    useEffect(() => {
      

    }, [props.answer]);

    function changeItem(item: any) {

        setChooseItem(JSON.stringify(item));
        props.changeItem(item);
    }


    return (
        <div className={styles.JudgementAnswerCotent}>
            
            {
                optionObject.map((ObjectItem: any, index: number) => {
                    
                    return <div 
                        key={index}
                        className={JSON.stringify(ObjectItem) === chooseItem ? styles.checkItem : ''}
                        onClick={() => changeItem(ObjectItem)}
                    >
                        {`${ObjectItem[0]}/${ObjectItem[1]}`}
                    </div>;

                })
            }
        </div>
    );
}

