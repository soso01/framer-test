import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (60834d4)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import Button from"https://framerusercontent.com/modules/yp7lRPe3vlRGZgsDQEa0/1pGYrSZwwlb4aD6g9pcl/IA3hopLpm.js";import{Input}from"https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/oNHmObL27xLBv67Gbys4/Input.js";const ButtonFonts=getFonts(Button);const InputFonts=getFonts(Input);const cycleOrder=["Fu2RYSQAl"];const variantClassNames={"Fu2RYSQAl":"framer-v-1095kpg"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="Fu2RYSQAl",onSubmit:jNvlG80Qt,onChange:WE5c70FfK,value:v_pdKLVvg="",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"Fu2RYSQAl",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const tap1o1doy7=activeVariantCallback(async(...args)=>{if(jNvlG80Qt){const res=await jNvlG80Qt(...args);if(res===false)return false;}});const onChangeb272lx=activeVariantCallback(async(...args)=>{if(WE5c70FfK){const res=await WE5c70FfK(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-MDIb3",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"Fu2RYSQAl",className:cx("framer-1095kpg",className),style:{"backgroundColor":"rgb(255, 255, 255)",...style},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("Fu2RYSQAl"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"JH52Kw9Yf-container",className:"framer-b272lx-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("JH52Kw9Yf-container"),children:/*#__PURE__*/ _jsx(Input,{width:"100%",height:"100%",layoutId:"JH52Kw9Yf",id:"JH52Kw9Yf",placeholder:"Insert Todo",value:v_pdKLVvg,textColor:"rgb(51, 51, 51)",caretColor:"rgb(51, 51, 51)",placeholderColor:"rgb(170, 170, 170)",backgroundColor:"rgb(255, 255, 255)",border:"rgb(221, 221, 221)",borderWidth:1,focusColor:"rgb(0, 153, 255)",focused:false,font:false,fontFamily:"",fontWeight:400,fontSize:16,lineHeight:1.4,padding:15,paddingPerSide:false,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,borderRadius:8,isMixedBorderRadius:false,topLeftRadius:0,topRightRadius:0,bottomRightRadius:0,bottomLeftRadius:0,textAlign:"left",isRTL:false,disabled:false,multiLine:false,truncate:false,password:false,enableLimit:false,maxLength:10,keyboard:"",onChange:onChangeb272lx,style:{"width":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("JH52Kw9Yf")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"W7FdbO44G-container",className:"framer-1o1doy7-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("W7FdbO44G-container"),children:/*#__PURE__*/ _jsx(Button,{width:"100%",height:"100%",layoutId:"W7FdbO44G",id:"W7FdbO44G",variant:"Z202wBJyw",text:"Add",color:"rgb(255, 170, 34)",tap:tap1o1doy7,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("W7FdbO44G")})})]})})}));});const css=[".framer-MDIb3 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-MDIb3 * { box-sizing: border-box; }",".framer-MDIb3 .framer-1095kpg { position: relative; overflow: hidden; width: 390px; height: 192px; }",".framer-MDIb3 .framer-b272lx-container { position: absolute; width: 260px; height: auto; left: 10px; top: 76px; flex: none; }",".framer-MDIb3 .framer-1o1doy7-container { position: absolute; width: 81px; height: 52px; left: 275px; top: 76px; flex: none; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 192
 * @framerIntrinsicWidth 390
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"jNvlG80Qt": "onSubmit", "WE5c70FfK": "onChange", "v_pdKLVvg": "value"}
 */ const FramerG0T3cibK3=withCSS(Component,css);export default FramerG0T3cibK3;FramerG0T3cibK3.displayName="TodoInput";FramerG0T3cibK3.defaultProps={"width":390,"height":192};addPropertyControls(FramerG0T3cibK3,{"jNvlG80Qt":{"type":ControlType.EventHandler,"title":"On Submit"},"WE5c70FfK":{"type":ControlType.EventHandler,"title":"On Change"},"v_pdKLVvg":{"type":ControlType.String,"title":"Value","defaultValue":"","placeholder":"Insert Todo"}});addFonts(FramerG0T3cibK3,[...ButtonFonts,...InputFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerG0T3cibK3","slots":[],"annotations":{"framerIntrinsicHeight":"192","framerVariables":"{\"jNvlG80Qt\": \"onSubmit\", \"WE5c70FfK\": \"onChange\", \"v_pdKLVvg\": \"value\"}","framerIntrinsicWidth":"390","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./G0T3cibK3.map