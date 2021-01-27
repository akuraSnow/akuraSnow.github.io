// @ts-nocheck
import { Component } from 'react';
import { initMathjaxConfig } from './MathConfig';
initMathjaxConfig();
// import { Tips } from './../MessageTips/index/index';
import _ from 'lodash';


const blockStyleList = ['LineSpace', 'TextIndent'];
let blockStyleList1 = [
  {
    Label: 'TextIndent',
    name: 'text-indent',
  },
  {
    Label: 'LineSpace',
    name: 'line-height',
  }
];
export default class formatQuestion {
  constructor() {
    this.content = {};
    this.wrapperId = null;

  }

  

  init(content) {
    this.wrapperId = `qs_${Date.now()}`;
    this.content = { ...content };
    const inner = [this.formatStem(content)].join('');
    const formatInner = inner.replace(/\\\'/g,"'"); // !三方试题图片地址问题
    const html = `<div  id="${this.wrapperId}" class="qestion-item" style="${content ? content.alignment : ''}">${formatInner}</div>`;
    // setTimeout(() => {
    //     const wrapperEl = document.querySelector(`#${this.wrapperId}`);
    //     window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, wrapperEl]);
    // }, 0);
    return html;
  }


  static start(wrapperEl) {

    if (window.MathJax) {

      window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, wrapperEl]);
    }

  }

  getColor(styles) {

    let result = '';
    styles.map(style => {
      if (style?.includes('Color')) {
        result += `color: #${style.split('Color')[1]};`;
      }

      if (style?.includes('Wordspace')) {
        result += `letter-spacing: ${style.split('#')[1]}em;`;
      }

      if (style?.includes('Font') && !style?.includes('FontSize')) {
        result += `font-family: ${style.split('Font')[1]};`;
      }
      if (style?.includes('FontSize')) {
        result += `font-size: ${style.split('FontSize')[1] / 2}px;`;
      }

    });

    return result;

  }

  getWordspace(styles) {

    let wordSpace = '';
    styles.map(style => {
      if (style?.includes('Wordspace')) {
        wordSpace = style.split('#')[1] + 'em';
      }
    });
    return wordSpace ? 'letter-spacing: ' + wordSpace : '';

  }


  formatStem(e) {

    let that = this;
    // 判断是否是排序字段
    let stem = this.getSortingStructure(e);

    let stemContent = '';
    // console.error(stem);

    _.map(stem, (stemItem, key) => {

      if (!stemItem['NumberedList']) {
        stemContent += that.getString(stemItem, key);
      } else {
        if (stemItem['NumberedList'] === 'None') {

          stemContent += '<ul>';
          _.map(stemItem.children, (stemItem, key) => {
            stemContent += '<li>';
            stemContent += that.getString(stemItem, key);
            stemContent += '</li>';
          });
          stemContent += '</ul>';

        } else {

          stemContent += `<ol type="${stemItem['NumberedList']}">`;
          _.map(stemItem.children, (stemItem, key) => {
            stemContent += '<li>';
            stemContent += that.getString(stemItem, key);
            stemContent += '</li>';
          });
          stemContent += '</ol>';
        }
      }
    });

    return stemContent;
  }

  getString(stemItem, key) {
    const content = this.MathData(stemItem)
      .filter(v => !!v)
      .join('');


    let result = '';

    let styleObj = { LineSpace: '1.5' };
    let obj2 = { 'line-height': '1.5' };

    let obj = (stemItem.styles || []).map((item) => {
      let num = blockStyleList.findIndex((styleItem) => item?.includes(styleItem));
      if (num > -1) {
        return {
          [blockStyleList[num]]: item.split('#')[1]
        };
      }
    });

    obj.map((item) => {
      // Object.assign({ ...styleObj }, item);
      styleObj = {
        ...styleObj,
        ...item
      };
    });

    let innerStyle = _.filter(blockStyleList1, (item) => {
      return styleObj[item.Label];
    });

    innerStyle.forEach(item => {
      obj2[item.name] = `${styleObj[item.Label]}`;
    });

    for (let i in obj2) {
      result += `${i}: ${obj2[i]}${i !== 'line-height' ? 'em' : ''}; `;
    }

    return `<div class="stem-content" style="text-align:${stemItem.alignment};${result}">
        ${content}
        </div>`;
  }

  getSortingStructure(stem) {

    let obj = [];

    let NumberedListObj = {};

    for (const key in stem) {
      if (stem.hasOwnProperty(key)) {
        const element = stem[key];

        const hasNumberedList = (element.styles || []).filter((element) => {
          return element?.includes('NumberedList');
        });

        if (hasNumberedList.length === 0) {
          obj.push(element);
        } else {

          let type = hasNumberedList[0].split('#');

          if (NumberedListObj[hasNumberedList[0]] === undefined) {
            obj.push({
              NumberedList: type[1],
              children: [element]
            });
            NumberedListObj[hasNumberedList[0]] = obj.length - 1;
          } else {

            obj[NumberedListObj[hasNumberedList[0]]].children.push(element);

            NumberedListObj[hasNumberedList[0]] = obj.length - 1;
          }
        }
      }
    }

    return obj;
  }

  isEmphasis(stylesArr) {

    if (stylesArr !== null && stylesArr.length > 0) {

      return !!stylesArr.find(item => {
        return item === 'EmphasisDot';
      });
    }
    return false;
  }

  getcontent(){
    var curNode = document.elementFromPoint(event.x,event.y);
    alert ( curNode.parentElement.parentElement.firstChild.innerText);
  } 


  MathData(item) {



    return (item.fragments || []).map(citem => {

      const { mediaType = '', content = [], styles = [] } = citem;

      let newcontent = content;

      if (content && !content?.includes('<math')) {
        newcontent = content && content.replace(/</g, '<span><</span>');
        // newcontent = content && newcontent.replace(/\$/g, '<span>$</span>');
        // newcontent = newcontent.replace(/\s/g, '&nbsp;&nbsp;');
      }

      // 处理图片显示
      if (mediaType === 'IMAGE') {

        let result = '';
        (styles || []).map(style => {
          if (style?.includes('width')) {
            result += `width: ${style.split('#')[1]}px;`;
          }
        });

        if (newcontent.toString().startsWith('data:image/png')) {
          return `<img src="${newcontent}" crossorigin="anonymous" style="max-width: 100%; ${result}">`;
        } else {
          return `<img src="${newcontent}?date=${Date.now()}" crossorigin="anonymous" style="max-width: 100%; ${result}">`;
        }

      } else if (mediaType === 'AUDIO') {
        return `<span style="margin-top: 10px; display: flex; align-items: center;color: #FE8D29">
          <audio key="${Date.now()}" width="320" height="54"  controls controlsList="nodownload">
              <source src="${newcontent}?date=${Date.now()}" />
          </audio>
          <a 
            calss="ausioBtn" 
            attr-url="${newcontent}"
            style="color: #FE8D29; margin-left: 8px"
          >下载</a>
        </span>`;
      } else if (mediaType === 'VIDEO') {
        return `<video width="320" height="54" style="margin-top: 10px" controls controlsList="nodownload">
            <source src=${newcontent}  />
        </video>`;
      }

      // 处理下波浪线
      if (!this.isEmphasis(styles)) {

        // 处理删除线不能与下划线共存的问题
        if (styles && styles?.includes('Strike')) {
          newcontent = `<span class="Strike" style="${!content?.includes('<math') ? 'word-break: break-all;white-space: pre-wrap;' : ''}">${newcontent}</span>`;
        }

        return !!content
          ? `<span class="${(styles || []).join(' ')}" style="${!content?.includes('<math') && this.getColor(styles || [])} ${!content?.includes('<math') ? 'word-break: break-all;white-space: pre-wrap;' : ''}">${newcontent}</span>`
          : '';
      } else {

        let result = '';
        // 处理删除线不能与下划线共存的问题
        if (styles && styles?.includes('Strike')) {
          result += `<span class="Strike" style="${!content?.includes('<math') ? 'word-break: break-all;white-space: pre-wrap;' : ''}">`;
        }


        let newstyles = styles.filter((e) => {
          return e !== 'EmphasisDot';
        });

        result += `<span class="${(newstyles || []).join(' ')}" style="${!content?.includes('<math') && this.getColor(styles || [])}${!content?.includes('<math') ? 'word-break: break-all;white-space: pre-wrap;' : ''}; text-indent: 0em">`;

        result += newcontent
          .split('')
          .map(
            font =>
              `<span class="${font.replace(/\s+/g, '') !== '' ? 'EmphasisDot' : ''} style="${!content?.includes('<math') ? 'word-break: break-all;white-space: pre-wrap;' : ''}">${font}</span>`
          )
          .join('');

        result += `</span>`;
        if (styles && styles?.includes('Strike')) {
          result += `</span>`;
        }
        return result;
      }
    });
  }
}
