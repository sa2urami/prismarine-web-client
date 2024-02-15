import{j as e,a as t}from"./jsx-runtime-37f7df21.js";import{M as d}from"./MessageFormatted-a5c81865.js";import{B as n}from"./Button-ab0893ea.js";import"./index-f1f2c4b1.js";import"./utils-8b0f2dd3.js";import"./Screen-f628b542.js";import"./DiveTransition-32aed59f.js";import"./inheritsLoose-c82a83d4.js";import"./index-c74c9f7f.js";const m=({dieReasonMessage:r,respawnCallback:i,disconnectCallback:l})=>e("div",{className:"deathScreen-container",children:t("div",{className:"deathScreen",children:[e("h1",{className:"deathScreen-title",children:"You Died!"}),e("h5",{className:"deathScreen-reason",children:e(d,{parts:r})}),t("div",{className:"deathScreen-buttons-grouped",children:[e(n,{label:"Respawn",onClick:()=>{i()}}),e(n,{label:"Disconnnect",onClick:()=>{l()}})]})]})});try{DeathScreen.displayName="DeathScreen",DeathScreen.__docgenInfo={description:"",displayName:"DeathScreen",props:{dieReasonMessage:{defaultValue:null,description:"",name:"dieReasonMessage",required:!0,type:{name:"MessageFormatPart[]"}},respawnCallback:{defaultValue:null,description:"",name:"respawnCallback",required:!0,type:{name:"() => void"}},disconnectCallback:{defaultValue:null,description:"",name:"disconnectCallback",required:!0,type:{name:"() => void"}}}}}catch{}const y={component:m},a={args:{dieReasonMessage:[{text:"test"}],respawnCallback(){},disconnectCallback(){}}};var s,c,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    dieReasonMessage: [{
      text: 'test'
    }],
    respawnCallback() {},
    disconnectCallback() {}
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const f=["Primary"];export{a as Primary,f as __namedExportsOrder,y as default};
//# sourceMappingURL=DeathScreen.stories-afae5cdc.js.map
