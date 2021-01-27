
import React, { Component } from 'react';
import { Tabs, Button, Spin } from 'antd';

import RichText from './richtext';
import ChoiceAnswer from './choiceAnswer';

import JudgementAnswer from './components/JudgementAnswer';
// import { Tips } from '../index';
import { Tips } from '../../MessageTips';
import {
    changeJson,
    showMathJax,
    getQuestion,
    getQuestionHtml,
    getEmptyOption,
    questionTypeText,
    optionValue,
    questionType,
    getVideoUrl
} from './client';

import debounce from 'lodash/debounce';
import './richtext.less';
import _ from 'lodash';

const { TabPane } = Tabs;
// import LoadMath from './loadMath/index';

export interface EditItemProps {

    value: any;
    // changeValue: Function;
    type: any;
    handOkVal?: Function;
    // onRef: Function;
    questionStructure: any;
    changeValue?: Function;
    changeAnswer: Function;
    cancelCopy?: Function;
    search: any;
    copyQuestionMode?: any;
    renderDOM?: any
}

interface EditItemState {

    questionRenderCompleted: boolean
    questionItem: any;
    // initVal: any;
    questionStructure: any;
    type: any;
    // value: any;
    activeKey: string;
    answer: any;
    errList: any;
    isChangeQuestionList: any;
    hasError: boolean;
    orderSortVisible: boolean;
    modalPosition: any;
    modalPositionInsertFormula: any;
    color: string;
    sortFormat: string;
    isInBox: boolean; // 是否聚焦在输入框内
    videoUrl: {
        content: string;
        questions: any
    };
    // questionObject: any;
}

import ErrorBoundary from './errorBoundary';
export default class EditItem extends Component<EditItemProps, EditItemState> {

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }


    constructor(props: any) {
        super(props);


        // let initVal = changeJson(props.value.question.stem);
        let videoUrl = getVideoUrl(props.value.question);

        this.state = {
            questionRenderCompleted: false,
            questionItem: JSON.parse(JSON.stringify(props.value)),
            // initVal: initVal,
            questionStructure: props.questionStructure,
            type: props.value.question.questionType,
            // value: initVal,
            activeKey: '0',
            answer: ['A'],
            errList: [],
            isChangeQuestionList: props.value.question.isChangeQuestionList || [],
            hasError: false,
            orderSortVisible: false,
            modalPosition: {
                visible: false,
                ActiveKey: '0',
                left: 'calc(50% - 200px)',
                top: 'calc(50vh - 207px)',
            },
            modalPositionInsertFormula: {
                visible: false,
                ActiveKey: '0',
                left: 'calc(50% - 500px)',
                top: 'calc(50vh - 200px)',
            },
            color: 'black',
            sortFormat: '1',
            isInBox: false, // 是否聚焦在输入框内
            videoUrl
        };

        this.changeValue = debounce(this.changeValue, 100);
    }

    componentDidMount() {

        showMathJax();

        document.getElementById('RichText')?.addEventListener('dragstart', (e) => {

            e.preventDefault();
            e.stopPropagation();
            return false;
        });

    }



    componentWillReceiveProps(nextProps: any) {

        let questionStructure = nextProps.questionStructure;

        if (JSON.stringify(this.state.questionStructure) !== JSON.stringify(questionStructure)) {


            // console.log('questionStructure====>', questionStructure);

            // let transitionQuestionStructure = _.map(_.cloneDeep(questionStructure), (el: any) => {

            //     el.content = [];
            //     return el;
            // });

            this.setState({
                questionStructure: [],
            }, () => {

                this.setState({

                    questionStructure: questionStructure,
                    type: nextProps.value.question.questionType,
                }, () => {
                    showMathJax(true);
                });
            })

        }
    }


    componentDidCatch() {

        const { hasError } = this.state;
        Tips.open({
            message: `输入错误，请重新输入！`,
            type: 'fail',
            time: 500
        });
        this.setState({ hasError: !hasError });
        showMathJax(true);

    }

    // 父组件触犯
    changChild = () => {

        console.error('222');
    }


    changeValue = (value: any, indexArr: any, ei: any, questionType?: string) => {
        // @ts-ignore
        this.props.changeValue && this.props.changeValue(value, indexArr, ei, questionType);

    }

    handleBatchOk = (n: any) => {

        const { questionItem, questionStructure, isChangeQuestionList, type, videoUrl } = this.state;

        let changeValue = getQuestionHtml(JSON.parse(JSON.stringify(questionStructure)), type);

        if (changeValue.questionList['questions']) {

            changeValue.questionList['questions'] = changeValue.questionList['questions'].map((item: any, index: any) => {
                return {
                    ...questionItem['question']['questions'][index],
                    ...item,
                };
            });
        }

        let newQuestionItem = {
            ...questionItem,

            question: {
                ...questionItem['question'],
                ...changeValue.questionList,
                isChangeQuestionList: n === 1 ? isChangeQuestionList : [],
            }
        };

        if (changeValue.errList.length > 0 && n !== 0) {
            Tips.open({
                message: `请完善内容`,
                type: 'fail',
            });

            let errKey = changeValue.errList.map((item: any) => {
                return item.index;
            });

            errKey = errKey.filter((e: any) => e !== undefined);

            this.setState({
                questionStructure: changeValue.question,
                errList: errKey,
                activeKey: `${errKey && errKey.length > 0 ? errKey[0] : this.state.activeKey}`
            });

        } else {

            if (videoUrl.content) {
                newQuestionItem.question.stem.push({
                    alignment: "Left",
                    fragments: [
                        {
                            content: videoUrl.content,
                            mediaType: "AUDIO",
                            styles: [],
                        }
                    ],
                    indentation: 0,
                    styles: []
                })
            };
            if (videoUrl.questions && Object.keys(videoUrl.questions).length > 0) {
                for (const key in videoUrl.questions) {
                    if (videoUrl.questions.hasOwnProperty(key)) {
                        const element = videoUrl.questions[key].content;
                        if (element) {
                            newQuestionItem.question.questions[key].stem.push({
                                alignment: "Left",
                                fragments: [
                                    {
                                        content: element,
                                        mediaType: "AUDIO",
                                        styles: [],
                                    }
                                ],
                                indentation: 0,
                                styles: []
                            })
                        }
                    }
                }
            }
            
            this.props.handOkVal && this.props.handOkVal(newQuestionItem, n);
        }

    }

    chooseBox = (index: any) => {

        const { questionStructure } = this.state;

        let newQuestionStructure = questionStructure.map((item: any, i: number) => {
            if (index !== i) {
                item.isChoose = false;
            } else {
                item.isChoose = true;
            }
            item.readOnly = false;
            return item;
        });

        this.setState({
            questionStructure: newQuestionStructure
        });

    }


    setAnswer = (e: any, ei: any) => {

        const { questionStructure } = this.state;
        let newQuestionStructure = JSON.parse(JSON.stringify(questionStructure)).map((questionItem: any) => {
            if (questionItem.type === 'answer') {
                questionItem.content = e;
                questionItem.isFilled = true;
            }

            if (questionItem.type === 'comprehensive') {
                questionItem.content[ei].map((item: any) => {
                    if (item.type === 'answer') {
                        item.content = e;
                        item.isFilled = true;
                    }
                });
            }
            return questionItem;
        });

        console.log('newQuestionStructure==>', newQuestionStructure);

        this.setState({
            questionStructure: newQuestionStructure,

        }, () => {

            this.props.changeAnswer(newQuestionStructure);
        });

    }

    // 删除选择题选项
    deleteOption = (index: any, ei: any) => {
        const { questionStructure, isChangeQuestionList } = this.state;
        let newQuestionStructures: any;
        let isOnlyOption = false;

        newQuestionStructures = getEmptyOption(index, questionStructure, isOnlyOption, ei);

        if (ei !== undefined) {
            if (isChangeQuestionList.indexOf(ei) === -1) {
                isChangeQuestionList.push(ei);
            }
        } else {
            if (isChangeQuestionList.indexOf(-1) === -1) {
                isChangeQuestionList.push(-1);
            }
        }


        if (newQuestionStructures.isOnlyOption) {

            Tips.open({
                message: `至少包含两个选项`,
                type: 'fail',
            });

        } else {
            this.setState({
                questionStructure: newQuestionStructures.newQuestionStructure
            }, () => {
                this.setState({
                    questionStructure: newQuestionStructures.newQuestionStructure1,
                    isChangeQuestionList
                }, () => {

                    showMathJax(true);

                });
            });
        }
    }

    callback = (key: any) => {

        const { questionItem, questionStructure, type } = this.state;

        let changeValue = getQuestionHtml(JSON.parse(JSON.stringify(questionStructure)), type);

        let errKey = changeValue.errList.map((item: any) => {
            return item.index;
        });

        errKey = errKey.filter((e: any) => e !== undefined);

        this.setState({
            activeKey: key,
            errList: errKey
        }, () => {
            showMathJax(true);
        });
    }

    // 保存拖拽的位置
    postion = (e: any) => {

        this.setState({
            modalPosition: e
        });

    }

    positionInsertFormula = (e: any) => {
        this.setState({
            modalPositionInsertFormula: e
        });

    }

    // 切换答案的类型
    changeItem = (option: any) => {

        const { questionStructure } = this.state;

        let newQuestionStructure = _.map(questionStructure, (item: any) => {
            if (item.type === 'answer') {
                item.option = _.cloneDeep(option);
                item.content = [{
                    children: [{
                        text: option[0],
                        styles: [],
                        type: 'Left'
                    }]
                }]
            }
            return item;
        })

        this.setState({
            questionStructure: newQuestionStructure
        }, () => {

            this.props.changeAnswer(newQuestionStructure);
        });

        // console.log('questionStructure==>', questionStructure);

    }

    // 取消答案
    // @ts-ignore
    calcelAnswers = (index: any, i: any) => {
        const { questionStructure, type } = this.state;

        let newQuestionStructure = _.map(questionStructure, (item: any) => {
            if (item.type === 'option') {
                item.content = _.map(item.content, (el: any, eli: number) => {

                    if (eli === i) {
                        el = {
                            ...el,
                            isAnswer: false
                        }
                    }

                    return el;
                })
            }

            return item;
        })

        newQuestionStructure = this.getAnswerStructure(newQuestionStructure);

        this.setState({
            questionStructure: newQuestionStructure,
        }, () => {
            this.props.changeAnswer(newQuestionStructure);
        });
    }

    // 设置答案
    // @ts-ignore
    setAnswers = (index: any, i: any) => {

        const { questionStructure, type } = this.state;

        console.log('newQuestionStructure==>', questionStructure);
        let newQuestionStructure = _.map(questionStructure, (item: any) => {
            // 修改报错的状态
            item.isFilled = true;
            if (item.type === 'option') {

                if (type === 'SINGLE_CHOICE') {
                    item.content = _.map(item.content, (el: any, eli: number) => {

                        if (eli === i) {
                            el = {
                                ...el,
                                isAnswer: true
                            }
                        } else {
                            el = {
                                ...el,
                                isAnswer: false
                            }
                        }
                        return el;
                    })
                } else {
                    item.content = _.map(item.content, (el: any, eli: number) => {
                        if (eli === i) {
                            el = {
                                ...el,
                                isAnswer: true
                            }
                        }
                        return el;
                    })
                }
            }

            return item;
        })
        newQuestionStructure = this.getAnswerStructure(questionStructure);

        this.setState({
            questionStructure: newQuestionStructure,
        }, () => {
            this.props.changeAnswer(newQuestionStructure);
        });

    }


    getAnswerStructure = (newQuestionStructure: any) => {
        let contentItem: any = [];

        newQuestionStructure = _.map(newQuestionStructure, (item: any) => {
            if (item.type === 'option') {
                item.content = _.map(item.content, (el: any, eli: number) => {
                    if (el.isAnswer) {
                        contentItem.push(
                            {
                                children: [{
                                    text: optionValue[eli]
                                }],
                                styles: [],
                                type: 'Left'
                            }
                        );
                    }
                    return el;
                })
            }
            return item;
        });

        newQuestionStructure = _.map(newQuestionStructure, (item: any) => {
            if (item.type === 'answer') {
                item.content = _.cloneDeep(contentItem);
            }
            return item;
        })

        return newQuestionStructure;
    }

    addAnswers = (index: any, i: any) => {
        const { questionStructure } = this.state;

        let newQuestionStructure = _.cloneDeep(questionStructure);

        // console.log('questionStructure====>', _.cloneDeep(questionStructure));

        let contents = newQuestionStructure[index]['content'];
        newQuestionStructure[index]['content'] = _.map(contents, (item: any) => {
            item = {
                ...item,
                autoFocus: false
            }
            return item;
        })

        newQuestionStructure[index]['content'].splice(i + 1, 0, {
            children: [{ text: "", isAdd: true }],
            isFilled: true,
            autoFocus: true,
            key: String(Math.random()).replace('\.', ''),
            requireText: "内容不能为空",
            styles: [],
            type: 'Left'
        });

        this.props.changeAnswer(_.cloneDeep(newQuestionStructure));

    }

    deleteAnswers = (index: any, i: any) => {

        let { questionStructure } = this.state;

        questionStructure[index]['content'].splice(i, 1);
        let content = questionStructure[index]['content'].length;

        // @ts-ignore
        let option = optionValue.filter((el: any, index: number) => index < content);


        // 删除的时候，对答案进行处理
        questionStructure = _.map(questionStructure, (el: any) => {

            if (el.type === 'answer') {

                // console.log(value);
                // 记录修改的题
                // 判断是否为空的
                el.content = el.content.map((item: any) => {
                    item.children = item.children.filter((e: any) => {
                        let text = '';
                        let result = e.text ? e.text.replace(/(^\s*)|(\s*$)/g, '') : '';
                        if (e.character) {
                            result += e.character ? e.character.replace(/(^\s*)|(\s*$)/g, '') : '';
                        }
                        text += result;

                        return option.includes(text);

                    });
                    item.option = _.cloneDeep(option);
                    return item;
                });
            }
            return el;
        });

        let newQuestionStructure = this.getAnswerStructure(questionStructure);

        this.setState({
            questionStructure: newQuestionStructure,
        }, () => {

            this.props.changeAnswer(_.cloneDeep(newQuestionStructure));
        });

    }


    RichTextRender(item: any, index: any, ei: any) {

        const { modalPosition, color, sortFormat, modalPositionInsertFormula, isInBox } = this.state;
        const { search } = this.props;

        let renderDom;

        if (item.type !== 'option' && item.type !== 'answer') {
            renderDom = <div>
                <div className={!item.isFilled && item.require ? 'boxError' : 'RichTextInput'}>
                    <RichText
                        search={search}
                        value={item.content}
                        isFistRich={item.isFistRich}
                        minHeight={63}
                        id={`${index}${ei}`}
                        changeValue={(e: any) => this.changeValue(e, [index], ei)}
                        postion={(e: any) => this.postion(e)}
                        positionInsertFormula={(e: any) => this.positionInsertFormula(e)}
                        modalPosition={modalPosition}
                        modalPositionInsertFormula={modalPositionInsertFormula}
                        changeColor={(color: any) => this.setState({ color })}
                        color={color}
                        sortFormat={sortFormat}
                        setFormat={(e: any) => this.setState({ sortFormat: e })}
                        isInBox={isInBox}
                    >
                    </RichText>

                </div>
                {!item.isFilled && item.require ? <div className={'error'}>{item.requireText}</div> : ''}

            </div>;
        } else if (item.type !== 'answer') {

            renderDom = <div className="optionContain">
                {
                    item.content.map((contentItem: any, i: any) => {
                        return <div
                            key={contentItem.key || i}
                            className={'optionBox1'}>
                            <div
                                className={'optionItem'}
                            >
                                {/* <div className={'item'}>
                                    {optionValue[i]}
                                </div> */}
                                <div className={`${'richtext'}
                                        optionContent
                                        ${!contentItem.isFilled ? 'boxError' : 'RichTextInput'}
                                        ${contentItem.isAnswer ? 'isAnswer' : ''}
                                    `}
                                    id={contentItem['autoFocus'] ? 'autoFocus' : ''}
                                >
                                    <div className="answerOptate">
                                        {
                                            item.content.length > 2 ? <div className="cancelswer" onClick={() => this.deleteAnswers(index, i)}>删除</div> : ''
                                        }
                                        {
                                            !contentItem.isAnswer ?
                                                <div className="answer" onClick={() => this.setAnswers(index, i)}>设为答案</div>
                                                : <div className="answer" onClick={() => this.calcelAnswers(index, i)}>取消答案</div>
                                        }
                                        <div className="addswer" onMouseUp={() => this.addAnswers(index, i)}>新增</div>
                                    </div>
                                    <RichText
                                        search={search}
                                        index={contentItem['Key']}
                                        value={[contentItem]}
                                        autoFocus={contentItem['autoFocus']}
                                        isoption={true}
                                        isOption={true}
                                        id={`${index}${i}`}
                                        isFilled={contentItem.isFilled}
                                        changeValue={(e: any) => this.changeValue(e, [index, i], ei)}
                                        postion={(e: any) => this.postion(e)}
                                        positionInsertFormula={(e: any) => this.positionInsertFormula(e)}
                                        modalPosition={modalPosition}
                                        modalPositionInsertFormula={modalPositionInsertFormula}
                                        changeColor={(color: any) => this.setState({ color })}
                                        color={color}
                                        sortFormat={sortFormat}
                                        setFormat={(e: any) => this.setState({ sortFormat: e })}
                                        isInBox={isInBox}
                                    >
                                    </RichText>
                                </div>
                            </div>
                            {!contentItem.isFilled ? <div className={'error'}>{contentItem.requireText}</div> : ''}
                        </div>;
                    })
                }
            </div>
        } else if (item.type === 'answer'
            && (
                item.questionType !== 'SINGLE_CHOICE' &&
                item.questionType !== 'MULTIPLE_CHOICE' &&
                item.questionType !== 'INDEFINITE_CHOICE'
            )
        ) {

            renderDom = item.isChoice ? <div>
                <ChoiceAnswer
                    answer={item.content}
                    option={item.option}
                    questionType={item.questionType}
                    setAnswer={(e: any) => this.setAnswer(e, ei)}
                ></ChoiceAnswer>
                {
                    !item.isFilled && item.require ? <div className={'error'}>{item.requireText}</div> : ''
                }
            </div> : <div>
                    <div className={!item.isFilled && item.require ? 'boxError' : 'RichTextInput'}>

                        <RichText
                            search={search}
                            value={item.content}
                            isFistRich={item.isFistRich}
                            minHeight={63}
                            id={`${index}${ei}`}
                            changeValue={(e: any) => this.changeValue(e, [index], ei, 'answer')}
                            postion={(e: any) => this.postion(e)}
                            positionInsertFormula={(e: any) => this.positionInsertFormula(e)}
                            modalPosition={modalPosition}
                            modalPositionInsertFormula={modalPositionInsertFormula}
                            changeColor={(color: any) => this.setState({ color })}
                            color={color}
                            sortFormat={sortFormat}
                            setFormat={(e: any) => this.setState({ sortFormat: e })}
                            isInBox={isInBox}
                        >
                        </RichText>

                    </div>
                    {!item.isFilled && item.require ? <div className={'error'}>{item.requireText}</div> : ''}
                </div>;
        } else if (item.type === 'answer') {

            renderDom = item.isChoice ? <div>

                {
                    !item.isFilled && item.require ? <div className={'error'}>{item.requireText}</div> : ''
                }
            </div> : '';
        }


        return renderDom;
    }

    render() {

        const { questionStructure, errList, activeKey, hasError, videoUrl } = this.state;
        const { copyQuestionMode, renderDOM } = this.props;

        let topicContent = (item: any, index: any, ei?: any) => <div key={index}>
            {
                item.type === 'answer' && (
                    item.questionType === 'SINGLE_CHOICE' ||
                    item.questionType === 'MULTIPLE_CHOICE' ||
                    item.questionType === 'INDEFINITE_CHOICE'
                ) ? '' : <div className={`${'title'}`}>
                        {item.require ? <span className={'require'}>*</span> : ''}

                        <span>{item.title}</span>
                        {
                            item.type === 'stem' && copyQuestionMode ?
                                <span
                                    className='copyQuestion'
                                    onClick={() => this.props.cancelCopy}
                                >
                                    取消{copyQuestionMode === 1 ? '复制' : '引用'}
                                </span>
                                : ''
                        }
                        {item.type === 'option' ? <span className={'choiceTips'}>{questionTypeText[item['questionType']]}</span> : ''}
                        {item.questionType === 'JUDGEMENT' && item.type === 'answer' ?
                            <JudgementAnswer
                                option={item.option}
                                changeItem={(item: any) => this.changeItem(item)}
                            ></JudgementAnswer> : ''}
                    </div>
            }

            {this.RichTextRender(item, index, ei)}
            {
                item.type === 'stem' ?
                    <div className="addQuestionItem">

                        <span className={'questionType'}>
                            {renderDOM && renderDOM}
                        </span>

                    </div>
                    : ''
            }
            {/* </Spin> */}
        </div>;

        let RichText = (isError: any) => <div id="RichText" className={`${isError}`}>
            {
                questionStructure.map((item: any, index: any) => {
                    let result = <div key={index}></div>;
                    if (item.type !== 'comprehensive') {
                        result = topicContent(item, index);
                    }
                    return result;
                })
            }

            <div
                id="showImgBox"
            ></div>
        </div>;

        return (<div>
            {
                hasError ? RichText(true) : RichText(false)
            }
        </div>
        );
    }
}
