import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';
// 代码模式
import 'codemirror/mode/javascript/javascript';
//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint.js';
//代码高亮
import 'codemirror/addon/selection/active-line';
//折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import { Divider } from 'antd';

const code = `
   function isObject(value) {
      const type = typeof value
      return value != null && (type === 'object' || type === 'function')
    }
    // 返回结果不能是null，因为null也是返回 "object"
    // 通过typeof方法判断出类型，typeof能判断出函数类型，function也是函数对象
`;

class IsObject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <h1>IsObject</h1>
                <h3>检查 value 是否为 Object 的 language type。  </h3>
                <h3> (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))</h3>
                <div style={{height: '150px',overflow: 'hidden'}}>
                    <CodeMirror
                        value={code}
                        options={{
                            mode: {name:'text/javascript'},
                            theme: 'solarized dark',
                            autofocus:true,//自动获取焦点
                            styleActiveLine:true,//光标代码高亮
                            lineNumbers: true, //显示行号
                            smartIndent:true,  //自动缩进
                            //start-设置支持代码折叠
                            lineWrapping:true,
                            foldGutter:true,
                            gutters:['CodeMirror-linenumbers','CodeMirror-foldgutter'],
                        }}
                    />
                </div>
                <Divider orientation="left">typeof 的返回值：</Divider>
                <p>Function 对象  >>>>>>>>>>>>> 	"function"</p>
                <p>Undefined >>>>>>>>>>>>> "undefined"</p>
                <p>Boolean >>>>>>>>>>>>> "boolean"</p>
                <p>Number >>>>>>>>>>>>> "number"</p>
                <p> BigInt(ECMAScript 2020 新增) >>>>>>>>>>>>> 	"bigint"</p>
                <p>String >>>>>>>>>>>>> 	"string"</p>
                <p>Symbol (ECMAScript 2015 新增) >>>>>>>>>>>>> 	"symbol"</p>
                <p>宿主对象（由 JS 环境提供） >>>>>>>>>>>>>  取决于具体实现</p>
                <p>Null >>>>>>>>>>>>> "object" </p>
                <p>其他任何对象 >>>>>>>>>>>>>  "object"</p>
                <Divider orientation="left">null</Divider>
                <p>在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。</p>
                <Divider orientation="left">new</Divider>
                <p>使用 new 返回 'object'</p>
                <Divider orientation="left">括号会影响结果</Divider>
                <p>typeof (Number（9） + 'Wisen'); // 'string'</p>
                <p>typeof Number（9） + 'Wisen'; //  'number Wisen'</p>
                <Divider orientation="left">正则表达式在不同浏览器返回结果不一样</Divider>
                <p>typeof /s/ === 'function'; // Chrome 1-12 , 不符合 ECMAScript 5.1</p>
                <p>typeof /s/ === 'object'; // Firefox 5+ , 符合 ECMAScript 5.1 </p>
                <Divider orientation="left"> 块级作用域的 let 和 const 的影响</Divider>
                <p>在 ECMAScript 2015 之前，typeof 总能保证对任何所给的操作数返回一个字符串。即便是没有声明的标识符，typeof 也能返回 'undefined'。使用 typeof 永远不会抛出错误。</p>
                <p>但在加入了块级作用域的 let 和 const 之后，在其被声明之前对块中的 let 和 const 变量使用 typeof 会抛出一个 ReferenceError。</p>
                <p>块作用域变量在块的头部处于“暂存死区”，直至其被初始化，在这期间，访问变量将会引发错误。</p>
            </>
        );
    }
}

export default IsObject;
