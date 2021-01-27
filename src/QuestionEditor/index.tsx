import React, { Component } from 'react';
import EditItem from './editor/index';
import {
  getQuestionHtml,
  getQuestion,
  getVideoUrl,
  changeJson
} from './editor/client';

import {data} from './data';
export default class Minpage extends Component<any, any>{


  constructor(props: any) {
    super(props);

    // const queryParams = new URLSearchParams(props.location.pathname.split('?')[1]);

    // props.history.push(`${url}?openLink=true&step=${1}`);

    console.log(data[0].question);



    let questionStructure = getQuestion(props.question.question, 'SINGLE_CHOICE');
    console.log("🚀 ~ file: index.tsx ~ line 31 ~ Minpage ~ constructor ~ questionStructure", questionStructure)
    // init();

    this.state = {
      questions: props.question, // [], // 试题信息
      type: 'SINGLE_CHOICE',
      search: "",
      questionStructure: questionStructure,
    };
  }


  changeValue= (value: any, indexArr: any, ei: any, questionType: any) => {
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ questionType", questionType)
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ ei", ei)
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ indexArr", indexArr)
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ value", value)
    this.props.changeValue(value, indexArr, ei, questionType);
  }
  changeAnswer= () => {
    
  }

  render () {

    const { type, search, questions, questionStructure } = this.state;

    return (
      <div>
        <EditItem
            type={type}
            search={search}
            value={questions}
            questionStructure={questionStructure}
            changeValue={this.changeValue}
            changeAnswer={this.changeAnswer}
        ></EditItem>
      </div>
    );
  }

}

