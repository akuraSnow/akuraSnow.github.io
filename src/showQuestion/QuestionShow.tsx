// @ts-nocheck
import React, { Component } from 'react';
import { Icon } from 'antd';
import FormatQuestion from './singleQuestion';
import Html from './html';
import $ from 'jquery';
import styles from './QuestionShow.less';

interface QuestionShowProps {
  questionData: any;
  postComponentData: any;
  associationState: any;
  title: any;
  showEbookDirectory: any;
  getClickData: any;
}

interface QuestionShowState {
  questionData: any;
  postComponentData: any;
  heightDom: any;
  open: any;
  associationState: any;
  ebookDirectory: any;
  showEbookDirectory: any;
}

export default class QuestionShow extends Component<QuestionShowProps, QuestionShowState> {
  private htmlContent: any;

  private childStem: any;

  constructor(props: QuestionShowProps) {
    super(props);
    this.state = {
      questionData: props.questionData,
      postComponentData: props.postComponentData,
      heightDom: 0, // 'auto',
      open: false,
      associationState: props.associationState,
      ebookDirectory: props.title,
      showEbookDirectory: props.showEbookDirectory,
    };
  }
  componentDidMount() {
    FormatQuestion.start(this.htmlContent);

  }
  componentWillReceiveProps(nextProps: any) {
    // if (!nextProps.associationState) {
    //     return false;
    // }

    this.setState({
      postComponentData: nextProps.postComponentData,
      associationState: nextProps.associationState,
      ebookDirectory: nextProps.title,
      showEbookDirectory: nextProps.showEbookDirectory,
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
  StemClickFun = (fStemId: any, cStemId: any, type: any) => {
    let { postComponentData } = this.state;

    let newData: any = {
      fStemId: fStemId,
      cStemId: cStemId,
      type: type,
    };
    if (
      postComponentData &&
      postComponentData.fStemId === fStemId &&
      postComponentData.cStemId === cStemId
    ) {
      // 点击已选择的试题
      newData = {};
    }
    this.props.getClickData(newData);
  };
  render() {
    this.childStem = [];
    let {
      heightDom,
      open,
      postComponentData,
      questionData,
      associationState,
      ebookDirectory,
      showEbookDirectory,
    } = this.state;
    let { question } = questionData;
    let questionFid = showEbookDirectory ? 0 : questionData.baseInfo.id;

    return (
      <div className="association-question a">
        {showEbookDirectory ? (
          <div>
            {
              <div
                className="directory"
                onClick={() => this.StemClickFun(ebookDirectory.id, '', 'chapter')}
              >
                <div className="name">
                  {ebookDirectory.name}
                  <div
                    className="mask-layer"
                    style={{
                      display: postComponentData.fStemId === ebookDirectory.id ? '' : 'none',
                    }}
                  ></div>
                  <div
                    className="associate"
                    style={{ display: associationState ? 'block' : 'none' }}
                  ></div>
                </div>
              </div>
            }
          </div>
        ) : (
          <div>
            <div
              className="father-stem"
              onClick={() => this.StemClickFun(questionFid, question.id, 'question')}
            >
              <div className="stem">
                <Html htmlData={question.stem}></Html>
              </div>
              <div className="option">
                <Html htmlData={question.option}></Html>
              </div>
              <div
                className="showbtn"
                style={{
                  display: question.questions && question.questions.length > 0 ? 'block' : 'none',
                }}
                onClick={event => this.ChangeShowState(event)}
              >
                {open ? '收起' : '展开'}
                <Icon className="showbtn-icon" type={open ? 'up' : 'down'} />
              </div>
              <div
                className="mask-layer"
                style={{
                  display:
                    postComponentData.fStemId === questionFid &&
                    postComponentData.cStemId === question.id
                      ? ''
                      : 'none',
                }}
              ></div>
              {/* <div className="status-display">题干选框：1  作答选框：1</div> */}
              <div
                className="associate"
                style={{ display: associationState ? 'block' : 'none' }}
              ></div>
            </div>
            <div className={`child-stem ${open ? 'open' : 'close'}`} style={{ height: heightDom }}>
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
                    <div
                      className="stem"
                      onClick={() => this.StemClickFun(questionFid, item.id, 'question')}
                    >
                      <Html htmlData={item.stem}></Html>
                      <div
                        className="mask-layer"
                        style={{
                          display:
                            postComponentData.fStemId === questionFid &&
                            postComponentData.cStemId === item.id
                              ? ''
                              : 'none',
                        }}
                      ></div>
                    </div>
                    <div className="option">
                      <Html htmlData={item.option}></Html>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
