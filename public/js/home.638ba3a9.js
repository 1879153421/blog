(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16c0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"container",staticClass:"home-container",on:{wheel:t.handleWheel}},[i("ul",{ref:"carousel",staticClass:"carousel-container",style:{transform:"translateY("+t.changeCarouselTop+"px)"},on:{transitionend:t.handleTransitionend}},t._l(t.itemData,(function(t,e){return i("li",{key:e},[i("CarouselItem",{attrs:{carousel:t}})],1)})),0),0!==t.index?i("div",{staticClass:"arrowUp",on:{click:function(e){return t.switchIndex(t.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1):t._e(),t.index!==t.itemData.length-1?i("div",{staticClass:"arrowDown",on:{click:function(e){return t.switchIndex(t.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1):t._e(),i("div",{staticClass:"directionPoint"},[i("ul",t._l(t.itemData,(function(e,n){return i("li",{key:n,class:{active:n==t.index},on:{click:function(e){return t.switchIndex(n)}}})})),0)])])},s=[],o=i("1da1"),r=(i("96cf"),i("709b")),a=i("d010a"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"outer",staticClass:"carousel-item-container",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}},[i("div",{ref:"inner",staticClass:"carousel-img",style:t.imgPosition},[i("ImageLoader",{attrs:{placeholder:t.carousel.midImg,src:t.carousel.bigImg},on:{load:t.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.carousel.title))]),i("div",{ref:"des",staticClass:"des"},[t._v(t._s(t.carousel.description))])])},h=[],d=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-loader-container"},[t.everthingDone?t._e():i("img",{staticClass:"placeholder",attrs:{src:t.placeholder,alt:""}}),i("img",{style:{opacity:t.originOpacity,transition:t.duration+"ms"},attrs:{src:t.src,alt:""},on:{load:t.loadedEvent}})])}),u=[],l=(i("a9e3"),i("4795"),{props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:3e3}},data:function(){return{originLoaded:!1,everthingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0}},methods:{loadedEvent:function(){var t=this;this.originLoaded=!0,setTimeout((function(){t.everthingDone=!0,t.$emit("load")}),this.duration)}}}),f=l,m=(i("f45e"),i("2877")),g=Object(m["a"])(f,d,u,!1,null,"2e3152fe",null),p=g.exports,w={props:["carousel"],components:{ImageLoader:p},data:function(){return{titleWidth:0,desWidth:0,innerSize:null,outerSize:null,mouseX:0,mouseY:0}},mounted:function(){this.titleWidth=this.$refs.title.offsetWidth,this.desWidth=this.$refs.des.offsetWidth,this.setSize(),this.mouseX=this.outerSize.width/2,this.mouseY=this.outerSize.height/2,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},computed:{imgPosition:function(){if(null!=this.innerSize&&null!=this.outerSize){var t=this.outerSize.height-this.innerSize.height,e=this.outerSize.width-this.innerSize.width,i=this.mouseY/this.outerSize.height*t,n=this.mouseX/this.outerSize.width*e;return{transform:"translate(".concat(n,"px,").concat(i,"px)")}}}},methods:{showWords:function(){var t=this.$refs.title.style,e=this.$refs.des.style;t.width=0,e.width=0,t.opacity=1,e.opacity=1,this.$refs.title.clientWidth,t.transition="width 2s",e.transition="width 2s 2s",t.width=this.titleWidth+"px",e.width=this.desWidth+"px"},setSize:function(){this.innerSize={height:this.$refs.inner.clientHeight,width:this.$refs.inner.offsetWidth},this.outerSize={height:this.$refs.outer.clientHeight,width:this.$refs.outer.offsetWidth}},handleMouseMove:function(t){var e=this.$refs.outer.getBoundingClientRect();this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top},handleMouseLeave:function(){this.mouseX=this.outerSize.width/2,this.mouseY=this.outerSize.height/2}}},v=w,x=(i("41ce"),Object(m["a"])(v,c,h,!1,null,"53066669",null)),z=x.exports,S={data:function(){return{isLoading:!0,itemData:[],index:0,containerHeight:0,switching:!1}},components:{Icon:a["a"],CarouselItem:z},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["a"])();case 2:t.itemData=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{switchIndex:function(t){this.index=t},handleWheel:function(t){this.switching||(t.deltaY<-15&&this.index>0?(this.switching=!0,this.index--):t.deltaY>15&&this.index<this.itemData.length-1&&(this.switching=!0,this.index++))},handleTransitionend:function(){this.switching=!1}},mounted:function(){var t=this.$refs.container;this.containerHeight=t.offsetHeight},computed:{changeCarouselTop:function(){return-this.index*this.containerHeight}}},y=S,C=(i("4702"),Object(m["a"])(y,n,s,!1,null,"183e2d24",null));e["default"]=C.exports},"29d4":function(t,e,i){},"41ce":function(t,e,i){"use strict";i("29d4")},4702:function(t,e,i){"use strict";i("8d09")},"8d09":function(t,e,i){},b45f:function(t,e,i){},f45e:function(t,e,i){"use strict";i("b45f")}}]);