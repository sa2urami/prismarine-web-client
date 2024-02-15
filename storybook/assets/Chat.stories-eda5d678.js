import{a as c,j as r}from"./jsx-runtime-37f7df21.js";import{r as s}from"./index-f1f2c4b1.js";import{f as _}from"./botUtils-9b297c6d.js";import{C as w,c as C,f as M}from"./MessageFormatted-a5c81865.js";import{B as d}from"./Button-ab0893ea.js";import"./utils-8b0f2dd3.js";import"./Screen-f628b542.js";import"./DiveTransition-32aed59f.js";import"./inheritsLoose-c82a83d4.js";import"./index-c74c9f7f.js";window.spamMessage=window.spamMessage??"";window.loadedData={language:{}};const D={component:w,render(a){const[f,i]=s.useState(a.messages),[p,x]=s.useState(!1),[u,l]=s.useState(a.opened);s.useEffect(()=>{const e=new AbortController;return addEventListener("keyup",t=>{t.code==="KeyY"&&(C.value="/",l(!0),t.stopImmediatePropagation()),t.code==="Escape"&&(l(!1),t.stopImmediatePropagation())},{signal:e.signal}),()=>e.abort()}),s.useEffect(()=>{i(a.messages)},[a.messages]),s.useEffect(()=>{if(!p)return;const e=()=>{const o=window.spamMessage?_(window.spamMessage):[{text:"tes"},{text:"t"}];i(n=>[...n,...Array.from({length:10}).map((g,k)=>{var v;return{id:(((v=n.at(-1))==null?void 0:v.id)??0)+k+1,parts:o}})])},t=setInterval(()=>e(),5e3);return e(),()=>clearInterval(t)},[p]);const E=()=>{for(const e of f)M(e,!1,()=>{i([...f])})};return c("div",{children:[c("div",{style:{fontSize:6,userSelect:"auto",color:"gray"},children:["Hint: you can capture needed message with ",r("code",{children:"bot.on('message', console.log)"}),", copy object, and assign it here to ",r("code",{children:"window.spamMessage"})," variable (but ensure the correct frame window is selected in devtools)"]}),r(w,{...a,opened:u,messages:f,onClose:()=>l(!1),fetchCompletionItems:async(e,t)=>{console.log("fetchCompletionItems"),await new Promise(n=>{setTimeout(n,0)});let o=["test",...Array.from({length:50}).map((n,g)=>`minecraft:hello${g}`)];return t==="/"&&(o=o.map(n=>`/${n}`)),o}}),c(d,{onClick:()=>l(e=>!e),children:["Open: ",u?"on":"off"]}),r(d,{onClick:()=>E(),children:"Fade"}),c(d,{onClick:()=>x(e=>!e),children:["Auto Spam: ",p?"on":"off"]}),r(d,{onClick:()=>i(a.messages),children:"Reset"})]})}},m={args:{messages:[{parts:[{bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1,json:{insertion:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}},text:"pviewer672"},text:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}}},{text:" joined the game",color:"yellow",bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1}],id:0}]}};var h,b,y;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    messages: [{
      parts: [{
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false,
        'json': {
          'insertion': 'pviewer672',
          'clickEvent': {
            'action': 'suggest_command',
            'value': '/tell pviewer672 '
          },
          'hoverEvent': {
            'action': 'show_entity',
            'contents': {
              'type': 'minecraft:player',
              'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
              'name': {
                'text': 'pviewer672'
              }
            }
          },
          'text': 'pviewer672'
        },
        'text': 'pviewer672',
        'clickEvent': {
          'action': 'suggest_command',
          'value': '/tell pviewer672 '
        },
        'hoverEvent': {
          'action': 'show_entity',
          //@ts-expect-error
          'contents': {
            'type': 'minecraft:player',
            'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
            'name': {
              'text': 'pviewer672'
            }
          }
        }
      }, {
        'text': ' joined the game',
        'color': 'yellow',
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false
      }],
      id: 0
    }]
    // opened: false,
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const F=["Primary"];export{m as Primary,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Chat.stories-eda5d678.js.map
