import{r as m,o as s,c as l,a as e,F as i,b as n,w as r,v as p,n as u,d as _,t as d,e as b}from"./index-33e4ad6c.js";const x=e("legend",null,"Fieldset Legend",-1),f=["for"],k=["type","name","id","placeholder"],v=_('<p class="field"><label for="textarea">Textarea</label><textarea name="textarea" id="textarea" placeholder="Textarea"></textarea></p><p class="field"><label for="range">Range</label><input type="range" name="range" id="range"></p>',2),g={class:"field"},$=e("label",{for:"select"},"Select",-1),y=e("option",{value:"",disabled:""},"Select Item",-1),q=e("option",{value:"1"},"Option 1",-1),S=e("option",{value:"1"},"Option 2",-1),O=e("option",{value:"1"},"Option 3",-1),I=[y,q,S,O],V={class:"field"},A=e("label",{for:"select"},"Select",-1),L=e("option",{value:"",disabled:""},"Select Item",-1),T=e("option",{value:"1"},"Option 1",-1),B=e("option",{value:"1"},"Option 2",-1),C=e("option",{value:"1"},"Option 3",-1),E=[L,T,B,C],F=["name","id"],N=["for"],w=["for"],D=["name","id"],R=_('<p class="field"><input type="checkbox" name="checkbox-3" id="checkbox-3"><label for="checkbox-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor, quod! Aperiam, atque dolores dolorum expedita facilis hic impedit iste obcaecati rerum sapiente tenetur voluptatum? Ipsam necessitatibus porro quisquam recusandae. </label></p><p class="field"><label for="checkbox-4"><input type="checkbox" name="checkbox-4" id="checkbox-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor, quod! Aperiam, atque dolores dolorum expedita facilis hic impedit iste obcaecati rerum sapiente tenetur voluptatum? Ipsam necessitatibus porro quisquam recusandae. </label></p>',2),U=["id"],z=["for"],H={__name:"ExamplesInputs",setup(M){const o=m(""),h={text:"Text",email:"Email",search:"Search"};return(j,c)=>(s(),l("fieldset",null,[x,e("section",null,[(s(),l(i,null,n(h,(t,a)=>e("p",{class:"field",key:a},[e("label",{for:a},d(t),9,f),e("input",{type:a,name:a,id:a,placeholder:t},null,8,k)])),64)),v,e("p",g,[$,r(e("select",{name:"select",id:"select",class:u({placeholder:o.value===""}),"onUpdate:modelValue":c[0]||(c[0]=t=>o.value=t)},I,2),[[p,o.value]])]),e("p",V,[A,r(e("select",{name:"select",id:"select",class:u({placeholder:o.value===""}),"onUpdate:modelValue":c[1]||(c[1]=t=>o.value=t),disabled:""},E,2),[[p,o.value]])]),(s(),l(i,null,n(2,t=>e("p",{class:"field",key:`checkbox-0-${t}`},[e("input",{type:"checkbox",name:`checkbox-0-${t}`,id:`checkbox-0-${t}`},null,8,F),e("label",{for:`checkbox-0-${t}`},"Checkbox "+d(t),9,N)])),64)),(s(),l(i,null,n(2,t=>e("p",{class:"field",key:`checkbox-1-${t}`},[e("label",{for:`checkbox-1-${t}`},[e("input",{type:"checkbox",name:`checkbox-1-${t}`,id:`checkbox-1-${t}`},null,8,D),b(" Checkbox "+d(t),1)],8,w)])),64)),R,(s(),l(i,null,n(3,t=>e("p",{class:"field",key:`radio-${t}`},[e("input",{type:"radio",name:"radio",id:`radio-${t}`},null,8,U),e("label",{for:`radio-${t}`},"Radio "+d(t),9,z)])),64))])]))}};export{H as default};
