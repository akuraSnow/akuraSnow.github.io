// @ts-nocheck
import React, { Component } from 'react';
import { Icon, Tag } from 'antd';
import FormatQuestion from './singleQuestion';
import Tips from '../MessageTips/Tips/Tips';
import Html from './html';
import $ from 'jquery';
import styles from './showQuestion.less';

export let questionType = {
  SINGLE_CHOICE: '单选题',
  MULTIPLE_CHOICE: '多选题',
  INDEFINITE_CHOICE: '不定项选择题',
  COMPLETION: '填空题',
  JUDGEMENT: '判断题',
  FREE_RESPONSE: '解答题',
  COMPREHENSIVE: '综合题',
};

interface SaveQuestionShowProps {
  questionData: any;
  postComponentData?: any;
  associationState?: any;
  title?: any;
  open?: boolean;
  isModal?: boolean;
  questionOrder?: any;
  defaultExpanded?: boolean;
  showSpin?: boolean
}

interface SaveQuestionShowState {
  questionData: any;
  postComponentData: any;
  heightDom: any;
  open: any;
  associationState: any;
  ebookDirectory: any;
}

export default class SaveQuestionShow extends Component<
  SaveQuestionShowProps,
  SaveQuestionShowState
> {
  public htmlContent: any;

  public childStem: any;

  constructor(props: SaveQuestionShowProps) {
    super(props);
    this.state = {
      questionData: props.questionData,
      postComponentData: props.postComponentData,
      heightDom: 0, // 'auto',
      open: props.open ? props.open : false,
      associationState: props.associationState,
      ebookDirectory: props.title,
    };
  }
  componentDidMount() {
    FormatQuestion.start(this.htmlContent, this.props.showSpin);
  }
  componentWillReceiveProps(nextProps: any) {
    // if (!nextProps.associationState) {
    //     return false;
    // }

    this.setState({
      postComponentData: nextProps.postComponentData,
      associationState: nextProps.associationState,
      ebookDirectory: nextProps.title,
      questionData: nextProps.questionData,
      open: nextProps.open,
    });
  }
  ChangeShowState(event: any) {
    event.stopPropagation();
    let height = 0;
    this.childStem.map((item: any, index: number) => {
      height += item.clientHeight;
    });
    let { open } = this.state;
    this.setState(
      {
        open: !open,
        heightDom: height + this.childStem.length * 15,
      },
      () => {
        setTimeout(() => {
          let { open } = this.state;
          if (!open) {
            this.setState({
              heightDom: 0,
            });
          } else {
            this.setState({
              heightDom: height + this.childStem.length * 15,
            });
          }
        }, 1);
      },
    );
  }
  htmlDomShow = (data: any) => {
    if (!data || data.length === 0) {
      return 'none';
    } else {
      return '';
    }
  };

  changeheight = (event: any) => {
    
  
    if (event.target && event.target.getAttribute('calss') === 'ausioBtn') {
      Tips.open({
        message: '音频下载中，请稍后！',
        type: 'spin',
      });
      try {
        let url = event.target.getAttribute('attr-url');
      
        let fileNameArr = url.split('/');
        let fileName = fileNameArr[fileNameArr.length - 1];
        console.log("url", url)
        var x = new XMLHttpRequest();
        x.open("GET", url, true);
        x.responseType = 'blob';
  
        x.onreadystatechange = () => {
          console.log(x);
          if (x.readyState==4) {// 4 = "loaded"
            Tips.close();
          }
        }
        
        x.onload=function(e) {
            var url = window.URL.createObjectURL(x.response)
            var a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click()
            // window.open(url);
        }
        x.send();
      } catch (error) {
        Tips.close();
      }

    } else {
      let { open } = this.state;
      this.setState({
        open: !open,
      });
    }
    // event.stopPropagation();
 
  };

  // 获取颜色
  getColor() {
    return (styles: any) => {
      let color = '';
      styles.map((style: any) => {
        if (style.includes('Color')) {
          color = style.split('Color')[1];
        }
      });
      return {
        color: '#' + color,
      };
    };
  }

  render() {
    this.childStem = [];
    let { isModal, questionOrder, defaultExpanded = false } = this.props;
    let { heightDom, open, questionData } = this.state;
    let { question = {} } = questionData;

    return (
      <div className={isModal ? styles.modalQuestionShow : styles.neqQuestionShow}>
        {
          <div
            className={`questionCotent ${styles.test} ${(defaultExpanded || open) ? styles.open : styles.close}`}
            style={{ height: (defaultExpanded || open) ? 'auto' : 200 }}
            onClick={event => !defaultExpanded && this.changeheight(event)}
          >
            <div className={`${styles.fatherStem} fatherQuestion-${questionOrder}`}>
              <div className={`${styles.stem} fatherStem-${questionOrder}`} style={{ display: this.htmlDomShow(question.stem) }}>
                <Html htmlData={question.stem || []} className={styles.questionHtml}></Html>
              </div>
              <div className={`${styles.option} fatherOption-${questionOrder}`} style={{ display: this.htmlDomShow(question.option) }}>
                <Html htmlData={question.option || []} className={styles.questionHtml}></Html>
              </div>
              <div className={`${styles.answer} fatherAnswer-${questionOrder}`} style={{ display: this.htmlDomShow(question.answer) }}>
                <div className={styles.questionTitle}>【答案】</div>
                <Html htmlData={question.answer || []} className={styles.questionHtml}></Html>
              </div>
              <div
                className={`${styles.explanation} fatherExplanation-${questionOrder}                                                                                                                                                                                                                                                           `}
                style={{ display: this.htmlDomShow(question.explanation) }}
              >
                <div className={styles.questionTitle}>【解析】</div>
                <Html htmlData={question.explanation || []} className={styles.questionHtml}></Html>
              </div>
            </div>
            <div className={`${styles.childStem} ${open ? styles.open : styles.close}`}>
              {(question?.questions || []).map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    ref={c => {
                      if (c) {
                        this.childStem.push(c);
                      }
                    }}
                  >
                    <div className={styles.stem} style={{ display: this.htmlDomShow(item.stem)}}>
                      <div className={styles.attrQuestionType} style={{ verticalAlign: 'top' }}>
                        {questionType[item.questionType]}
                      </div>
                      {(item.questionType === 'SINGLE_CHOICE' ||
                        item.questionType === 'INDEFINITE_CHOICE' ||
                        item.questionType === 'MULTIPLE_CHOICE') &&
                      (item.option && item.option.length) ? (
                        <div
                          className={styles.attrOptionType}
                          style={{ marginLeft: '10px', verticalAlign: 'top' }}
                        >
                          共{item.option && item.option.length}个选项
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div style={{display: 'flex', marginTop: 16}}>
                        <div style={{color: '#FE8D29', marginRight: 8, fontWeight: 'bold', minWidth: 20}}>{`${index + 1} . `}</div>
                        <Html htmlData={item.stem || []} className={`${styles.questionHtml} subQuestion-${questionOrder}-${index}`}></Html>
                    </div>
                    <div
                      className={`${styles.option} subOption-${questionOrder}-${index}`}
                      style={{ display: this.htmlDomShow(item.option) }}
                    >
                      <Html htmlData={item.option || []} className={styles.questionHtml}></Html>
                    </div>
                    <div
                      className={`${styles.answer} subAnswer-${questionOrder}-${index}`}
                      style={{ display: this.htmlDomShow(item.answer) }}
                    >
                      <div
                        className={styles.questionTitle}
                        style={{ fontWeight: 'bolder' }}
                      >{`【答案】`}</div>
                      <Html htmlData={item.answer || []} className={styles.questionHtml}></Html>
                    </div>
                    <div
                      className={`${styles.explanation} subExplanation-${questionOrder}-${index }`}
                      style={{ display: this.htmlDomShow(item.explanation) }}
                    >
                      <div
                        className={styles.questionTitle}
                        style={{ fontWeight: 'bolder' }}
                      >{`【解析】`}</div>
                      <Html
                        htmlData={item.explanation || []}
                        className={styles.questionHtml}
                      ></Html>
                    </div>
                  </div>
                );
              })}
            </div>
            {!defaultExpanded ? <div className={styles.showbtn}
              onClick={(event) => this.changeheight(event)}
            >
              {open ? '收起更多内容' : '展开更多内容'}
              <Icon className={styles.showbtnIcon} type={open ? 'up' : 'down'} />
            </div> : null }
          </div>
        }
      </div>
    );
  }
}
