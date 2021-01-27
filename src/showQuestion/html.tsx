import React, { Component, HTMLProps } from 'react';
import FormatQuestion from './singleQuestion';

let formatQuestion = new FormatQuestion();

interface Htmlrops {
  htmlData: any;
  className?: any;
}

interface HtmlState {
  htmlData: any;
  className: any;
}

export default class Html extends Component<Htmlrops, HtmlState> {
  constructor(props: Htmlrops) {
    super(props);
    this.state = {
      htmlData: props.htmlData, // 数据
      className: props.className, // className
    };
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return false;
  }
  render() {
    let { htmlData = {}, className } = this.state;

    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: formatQuestion.init(htmlData) }}
      ></div>
    );
  }
}
