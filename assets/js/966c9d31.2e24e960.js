"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>c});t(67294);var a=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/tailwind-animations",source:"@site/blog/2024-03-25-tailwind-animations.md",title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",date:"2024-03-25T00:00:00.000Z",formattedDate:"March 25, 2024",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"}],readingTime:5.035,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"Essentials of Managing Form State with React Hook Form",permalink:"/blog/react-hook-form"},nextItem:{title:"React useEffect Cleanup Function",permalink:"/blog/useeffect-cleanup"},relatedPosts:[{title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",permalink:"/blog/tailwind-flex",formattedDate:"September 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.72,date:"2023-09-11T00:00:00.000Z"},{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"September 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.345,date:"2023-09-18T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.4,date:"2022-10-07T00:00:00.000Z"}],authorPosts:[{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"October 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.365,date:"2023-10-17T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Refine",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.59,date:"2023-04-06T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"October 26, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.11,date:"2023-10-26T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Built-in utility classes in Tailwind for animating elements",id:"built-in-utility-classes-in-tailwind-for-animating-elements",level:2},{value:"animate-none",id:"animate-none",level:3},{value:"animate-spin",id:"animate-spin",level:3},{value:"animate-ping",id:"animate-ping",level:3},{value:"animate-pulse",id:"animate-pulse",level:3},{value:"animate-bounce",id:"animate-bounce",level:2},{value:"Create custom animations in Tailwind:",id:"create-custom-animations-in-tailwind",level:2},{value:"Add keyframes to the Tailwind config file.",id:"add-keyframes-to-the-tailwind-config-file",level:3},{value:"Extend animation in the Tailwind config file.",id:"extend-animation-in-the-tailwind-config-file",level:3},{value:"Animate elements using arbitrary values in Tailwind.",id:"animate-elements-using-arbitrary-values-in-tailwind",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function u(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TailwindCSS")," is a widely used, utility-first ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," framework that enables developers to easily create modern, responsive, and visually appealing user interfaces. Tailwind\u2019s utility-first approach makes it easy to create ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," animations. This article will illustrate how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"TailwindCSS")," to add beautiful and complicated animations to your websites or applications."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-none"},"animate-none")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-spin"},"animate-spin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-ping"},"animate-ping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-pulse"},"animate-pulse")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-bounce"},"animate-bounce")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind."))),(0,a.kt)("h2",{id:"built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,a.kt)("p",null,"Tailwind provides built-in utility classes for an array of animations that can be added to elements."),(0,a.kt)("h3",{id:"animate-none"},"animate-none"),(0,a.kt)("p",null,"This utility class applies no animation to an element. It assures that the element is not affected by animation, even if it is contained in a parent element with an animation class."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div className="animate-none bg-blue-500 p-5">\n  <h3>Animation here</h3>\n</div>\n')),(0,a.kt)("h3",{id:"animate-spin"},"animate-spin"),(0,a.kt)("p",null,"This utility class Adds a linear spin animation to element. It can be useful on elements such as loading indicators."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <svg class="animate-spin">\n    \x3c!-- ... --\x3e\n  </svg>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/2-min.gif",alt:"tailwind animations"})),(0,a.kt)("h3",{id:"animate-ping"},"animate-ping"),(0,a.kt)("p",null,"This utility class causes an element to scale and fade, much like a radar ping or a ripple in the sea. It can be beneficial on items that function as notification indications or attention-grabbing elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <span class="relative flex h-16 w-16">\n    <span\n      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"\n    ></span>\n    <span\n      class="relative inline-flex rounded-full h-16 w-16 bg-blue-500"\n    ></span>\n  </span>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/3-min.gif",alt:"tailwind animations"})),(0,a.kt)("h3",{id:"animate-pulse"},"animate-pulse"),(0,a.kt)("p",null,"This utility class makes an element fade in and out gradually \u2013 This class is handy for things like skeleton loaders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="animate-pulse rounded-full bg-blue-400 h-16 w-16"></div>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/4-min.gif",alt:"tailwind animations"})),(0,a.kt)("h2",{id:"animate-bounce"},"animate-bounce"),(0,a.kt)("p",null,"This utility class adds a bounce animation to an element. It is useful for elements like scroll indicators."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="animate-bounce rounded-full bg-blue-500 h-16 w-16"></div>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/5-min.gif",alt:"tailwind animations"})),(0,a.kt)("h2",{id:"create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,a.kt)("p",null,"Tailwind allows us to easily construct custom animations that are not provided as built-in utility classes.\nAll we need to do is define your animation's keyframes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file and expand the theme setup to create a new animation."),(0,a.kt)("p",null,"We will illustrate this with a simple animation on the Refine logo as shown below:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/6-min.gif",alt:"tailwind animations"})),(0,a.kt)("h3",{id:"add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file."),(0,a.kt)("p",null,"We will open the ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file in the root directory of the project and add an empty keyframes object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.extend")," object. Now, inside this keyframes object, we'll add and specify our new slide animation as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,a.kt)("h3",{id:"extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file."),(0,a.kt)("p",null,"After adding the values to our keyframes object in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, we create a custom animation that uses this keyframe. We will add this animation name to a new ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," object inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.extend")," object as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n      animation: {\n        "refine-slide": "refine 2s infinite",\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,a.kt)("p",null,"Next, we add the animation to the markup. To define a custom animation utility class in markup, use the format ",(0,a.kt)("inlineCode",{parentName:"p"},"animate-[nameOfAnimation]"),". In our example, the name of the custom animation we added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file is ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-slide"),", but when we specify the animation utility class in our 'HTML' markup, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"animate-refine-slide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <img\n    class="relative w-16 h-16 animate-refine-slide"\n    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixkXz-MD-PkV6BOiGL5SAkJi9XGAyE9lLLQ&usqp=CAU"\n  />\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/7-min.gif",alt:"tailwind animations"})),(0,a.kt)("h2",{id:"animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind."),(0,a.kt)("p",null,"In some cases, you may want to create an animation that will only be used once in your application. Rather than extending your animations in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind.config.js")," file, ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," offers a better option in such scenarios by using arbitrary values. To use them, place the animation properties, separated by underscores, between a pair of square brackets following the animate keyword in the markup, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"animate -\n  [\n    animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction,\n  ];\n")),(0,a.kt)("p",null,'For example, if you want to create a one-off "wiggle" animation, you can declare the animation keyframes in your ',(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," file, then proceed to the markup and declare the animation as an arbitrary value as shown below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"keyframe in ",(0,a.kt)("inlineCode",{parentName:"strong"},"CSS")," File"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes wiggle {\n  0% {\n    transform: skewX(9deg);\n  }\n  10% {\n    transform: skewX(-8deg);\n  }\n  20% {\n    transform: skewX(7deg);\n  }\n  30% {\n    transform: skewX(-6deg);\n  }\n  40% {\n    transform: skewX(5deg);\n  }\n  50% {\n    transform: skewX(-4deg);\n  }\n  60% {\n    transform: skewX(3deg);\n  }\n  70% {\n    transform: skewX(-2deg);\n  }\n  80% {\n    transform: skewX(1deg);\n  }\n  90% {\n    transform: skewX(0deg);\n  }\n  100% {\n    transform: skewX(0deg);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div\n    class="animate-[wiggle_1s_ease-in-out_infinite] rounded-full bg-blue-500 h-16 w-16"\n  ></div>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View"),":"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/8-min.gif",alt:"tailwind animations"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, We took a dive into ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," built-in utility classes for animation as well as how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," CSS's theme configuration feature to add custom animations. We also learnt how to create one-off animations with ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," arbitrary values.\nTailwind is an excellent ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," framework, and its utility-first approach, combined with its theme extension features, makes it popular among developers."))}u.isMDXComponent=!0}}]);