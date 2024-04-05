"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25450],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||o;return t?a.createElement(u,r(r({ref:n},c),{},{components:t})):a.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},88865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",slug:"radix-ui",authors:"peter_osah",tags:["css","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/radix-ui",source:"@site/blog/2024-04-04-radix-ui.md",title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",date:"2024-04-04T00:00:00.000Z",formattedDate:"April 4, 2024",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"}],readingTime:10.375,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",slug:"radix-ui",authors:"peter_osah",tags:["css","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/social.png",hide_table_of_contents:!1},nextItem:{title:"Django REST Framework - How to use it to create APIs?",permalink:"/blog/django-rest-framework"},relatedPosts:[{title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",permalink:"/blog/css-vertical-align",formattedDate:"February 13, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.41,date:"2024-02-13T00:00:00.000Z"},{title:"A Guide to useContext and React Context API",description:"Share data across components with React Context in TypeScript and\xa0Next.js",permalink:"/blog/usecontext-and-react-context",formattedDate:"January 30, 2024",authors:[{name:"Chibuzor Otuokwu",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"chibuzor_otuokwu"}],readingTime:16.895,date:"2024-01-30T00:00:00.000Z"},{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.65,date:"2023-12-07T00:00:00.000Z"}],authorPosts:[{title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"January 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:11.35,date:"2024-01-25T00:00:00.000Z"},{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",permalink:"/blog/tailwind-animations",formattedDate:"March 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:5.035,date:"2024-03-25T00:00:00.000Z"},{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"October 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.365,date:"2023-10-17T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Radix Building Blocks",id:"radix-building-blocks",level:2},{value:"Primitives",id:"primitives",level:3},{value:"Colours",id:"colours",level:3},{value:"Icons",id:"icons",level:3},{value:"Themes",id:"themes",level:3},{value:"Reset component",id:"reset-component",level:4},{value:"Grid component",id:"grid-component",level:4},{value:"Theme component",id:"theme-component",level:4},{value:"Setup Radix in your React Project",id:"setup-radix-in-your-react-project",level:3},{value:"Installing Primitives",id:"installing-primitives",level:3},{value:"Installing Themes",id:"installing-themes",level:3},{value:"Installing Icons",id:"installing-icons",level:3},{value:"Installing Colors",id:"installing-colors",level:3},{value:"Vanilla CSS",id:"vanilla-css",level:4},{value:"Component Objects",id:"component-objects",level:4},{value:"Build components with Radix",id:"build-components-with-radix",level:3},{value:"Dialogs",id:"dialogs",level:4},{value:"Slider",id:"slider",level:4},{value:"Conclusion",id:"conclusion",level:2}],m={toc:d},g="wrapper";function u(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," is an open-source headless library that provides components for creating user-friendly, high-quality ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," online applications and design systems. It offers a wide range of accessible headless primitives, meant to expedite development by providing frequently used UI elements such as dialogues, selections, accordions, tabs, and more. In this article, we will illustrate how to build components with Radix."),(0,a.yg)("h2",{id:"radix-building-blocks"},"Radix Building Blocks"),(0,a.yg)("p",null,"Radix consists of four building blocks: ",(0,a.yg)("strong",{parentName:"p"},"Primitives"),", ",(0,a.yg)("strong",{parentName:"p"},"Colours"),", ",(0,a.yg)("strong",{parentName:"p"},"Icons")," and ",(0,a.yg)("strong",{parentName:"p"},"Themes"),". These tools can be used to create comprehensive design systems. Let's take a deeper look at each product and see how they can be utilised independently or together to meet your needs."),(0,a.yg)("h3",{id:"primitives"},"Primitives"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," Primitives is a UI component library that helps you create high-quality, user-friendly design systems and web applications. It is a collection of low-level UI component libraries with a focus on accessibility, customisation, and the developer experience. These components can be used as the foundation of your design system or added to it incrementally."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," Primitives was designed with the goal of creating controllable headless components. All of its wiring is done internally, allowing you to start using the components as soon as possible."),(0,a.yg)("p",null,"The Components are also shipped with zero styles, providing you complete styling control. Components can be styled using any styling method (vanilla ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," preprocessors/frameworks, ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS-in-JS")," libraries)."),(0,a.yg)("p",null,"Here is an example of a ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," accordion primitive"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as Accordion from "@radix-ui/react-accordion";\n\nexport default () => (\n  <Accordion.Root type="single" defaultValue="item-1" collapsible>\n    <Accordion.Item value="item-1">\n      <Accordion.Header>\n        <Accordion.Trigger>This is an accordion</Accordion.Trigger>\n      </Accordion.Header>\n      <Accordion.Content>\n        Yes. It\'s unstyled by default, giving you freedom over the look and\n        feel.\n      </Accordion.Content>\n    </Accordion.Item>\n  </Accordion.Root>\n);\n')),(0,a.yg)("p",null,"The primitive also have access to ",(0,a.yg)("inlineCode",{parentName:"p"},"props")," which are listed ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/primitives/docs/components/accordion"},"here"),"."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/radix.gif",alt:"radix ui"})),(0,a.yg)("p",null,"Radix provides a large number of primitives, including ",(0,a.yg)("strong",{parentName:"p"},"accordions"),", ",(0,a.yg)("strong",{parentName:"p"},"dialog boxes"),", ",(0,a.yg)("strong",{parentName:"p"},"popovers"),", ",(0,a.yg)("strong",{parentName:"p"},"dropdowns"),", ",(0,a.yg)("strong",{parentName:"p"},"labels"),", and many more. To check out those, visit ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/primitives/docs/overview/introduction"},"here"),"."),(0,a.yg)("p",null,"To view the list of Radix Primitives, visit ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/primitives/docs/overview/introduction"},"here"),"."),(0,a.yg)("h3",{id:"colours"},"Colours"),(0,a.yg)("p",null,"Radix Colours is a meticulously created colour system used to create aesthethically pleasing web applications. Radix Colours includes a set of scales that are JavaScript objects designed to work with CSS to ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS-in-JS")," alternatives (for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"styled-components"),"). It also bundles the colours as raw ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," files which you can import straight into your files when using a bundler like Parcel or Webpack."),(0,a.yg)("p",null,"To view more on Radix Colors, visit ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/colors"},"here"),"."),(0,a.yg)("h3",{id:"icons"},"Icons"),(0,a.yg)("p",null,"Radix Icons provides a set of ",(0,a.yg)("inlineCode",{parentName:"p"},"15\xd715")," icons that are accessible as separate components and can be installed as a single package which you can import in your React components. Radix Icons are also accessible in other formats, including downloadable ",(0,a.yg)("inlineCode",{parentName:"p"},"SVGs"),", Figma, and Sketch files."),(0,a.yg)("p",null,"To view more on Radix Icons, visit ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/icons"},"here"),"."),(0,a.yg)("h3",{id:"themes"},"Themes"),(0,a.yg)("p",null,"Radix Themes is a pre-styled component library that works out of the box and requires minimum configuration.\nRadix Themes doesn't include a styling system. There are no ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"SX")," props, and no styling libraries are used inside. It's made with standard ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS"),". However, the themes can be customised by altering the token system's ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," variables. The list of the variables supported by the token system is listed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/radix-ui/themes/tree/main/packages/radix-ui-themes/src/styles/tokens"},"here"),"."),(0,a.yg)("p",null,"This article will include explanations for the ",(0,a.yg)("strong",{parentName:"p"},"Reset"),", ",(0,a.yg)("strong",{parentName:"p"},"Grid"),", and ",(0,a.yg)("strong",{parentName:"p"},"Theme")," components. However, to see more components that themes provide, visit ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/themes/docs/overview/getting-started"},"here"),"."),(0,a.yg)("h4",{id:"reset-component"},"Reset component"),(0,a.yg)("p",null,"The",(0,a.yg)("inlineCode",{parentName:"p"},"Reset")," component is used to forcibly reset browser styles for a specified element."),(0,a.yg)("p",null,"Under the hood, it generates a ",(0,a.yg)("inlineCode",{parentName:"p"},"Slot")," primitive (a Radix primitive) which does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Accepts one ",(0,a.yg)("inlineCode",{parentName:"li"},"React")," element as its child."),(0,a.yg)("li",{parentName:"ul"},"Removes opinionated browser styles."),(0,a.yg)("li",{parentName:"ul"},"Sets idiomatic layout defaults, such as ",(0,a.yg)("inlineCode",{parentName:"li"},"display: block")," for photos or ",(0,a.yg)("inlineCode",{parentName:"li"},"width: Stretch")," for inputs."),(0,a.yg)("li",{parentName:"ul"},"Sets the cursor style based on your theme settings."),(0,a.yg)("li",{parentName:"ul"},"Adds the property ",(0,a.yg)("inlineCode",{parentName:"li"},"box-sizing: border-box"),".")),(0,a.yg)("p",null,"An example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Reset")," component in use is illustrated in the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Reset } from "@radix-ui/themes";\n\nfunction App() {\n  return (\n    <div>\n      <div className="flex gap-2">\n        <div className="w-6/12">\n          <h1>Without Reset Component</h1>\n          <abbr title="Abbreviation">ABR</abbr>\n        </div>\n\n        <div className="w-6/12">\n          <h1>With Reset Component</h1>\n          <Reset>\n            <abbr title="Abbreviation">ABR</abbr>\n          </Reset>\n        </div>\n      </div>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/2.png",alt:"radix ui"})),(0,a.yg)("h4",{id:"grid-component"},"Grid component"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Grid")," component is a component for designing grid layouts. This component is based on the ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element and accepts common margin ",(0,a.yg)("a",{parentName:"p",href:"https://www.radix-ui.com/themes/docs/overview/layout#margin-props"},"props"),"."),(0,a.yg)("p",null,"An example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Grid")," component in use is illustrated in the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Grid, Box } from "@radix-ui/themes";\n\nfunction App() {\n  return (\n    <div>\n      <Grid columns="3" gap="3" rows="repeat(3, 40px)" width="auto">\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 1\n        </Box>\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 2\n        </Box>\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 3\n        </Box>\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 4\n        </Box>\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 5\n        </Box>\n        <Box\n          width={"200px"}\n          height={"50px"}\n          className="bg-black text-center text-white"\n        >\n          Box 6\n        </Box>\n      </Grid>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"View:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/3.png",alt:"radix ui"})),(0,a.yg)("h4",{id:"theme-component"},"Theme component"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Theme")," component wraps all or portion of a React tree to enable theme customisation."),(0,a.yg)("p",null,"An example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Theme")," component in use is illustrated in the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Grid,\n  Button,\n  TextArea,\n  Heading,\n  Flex,\n  Card,\n  Theme,\n  Text,\n} from "@radix-ui/themes";\n\nfunction App() {\n  return (\n    <div>\n      <Card size="2">\n        <Flex gap="6">\n          <Flex direction="column" gap="3">\n            <Heading as="h5" size="2">\n              Regular card\n            </Heading>\n            <Grid gap="1">\n              <Text as="div" weight="bold" size="2" mb="1">\n                Feedback\n              </Text>\n              <TextArea placeholder="Write your feedback\u2026" />\n            </Grid>\n            <Button>Send</Button>\n          </Flex>\n\n          <Theme accentColor="cyan" radius="full">\n            <Card size="2">\n              <Flex gap="6">\n                <Flex direction="column" gap="3">\n                  <Heading as="h5" size="2">\n                    Card with cyan theme\n                  </Heading>\n                  <Grid gap="1">\n                    <Text as="div" weight="bold" size="2" mb="1">\n                      Feedback\n                    </Text>\n                    <TextArea placeholder="Write your feedback\u2026" />\n                  </Grid>\n                  <Button>Send</Button>\n                </Flex>\n\n                <Theme accentColor="orange">\n                  <Card size="2">\n                    <Flex direction="column" gap="3">\n                      <Heading as="h5" size="2">\n                        Card with orange theme\n                      </Heading>\n                      <Grid gap="1">\n                        <Text as="div" weight="bold" size="2" mb="1">\n                          Feedback\n                        </Text>\n                        <TextArea placeholder="Write your feedback\u2026" />\n                      </Grid>\n                      <Button>Send</Button>\n                    </Flex>\n                  </Card>\n                </Theme>\n              </Flex>\n            </Card>\n          </Theme>\n        </Flex>\n      </Card>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"According to the code, cards wrapped in the Cyan and Orange themes reflected these themes on their cards, whilst cards that were not wrapped in the theme reflected ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix's")," default theme."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/4.png",alt:"radix ui"})),(0,a.yg)("h3",{id:"setup-radix-in-your-react-project"},"Setup Radix in your React Project"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"First, we'll develop a React application. We can achieve this with Vite or CRA. However, Vite is highly recommended.")),(0,a.yg)("h3",{id:"installing-primitives"},"Installing Primitives"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To install a primitive component, add the name of the component to a ",(0,a.yg)("inlineCode",{parentName:"p"},"radix-ui/")," prefix as shown in the example below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"}," # with npm\n npm install @radix-ui/react-popover@latest -E\n\n # with yarn\nyarn add @radix-ui/react-popover@latest -E\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"import the parts of the primitive as shown below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as Popover from "@radix-ui/react-popover";\n\nconst PopoverDemo = () => (\n  <Popover.Root>\n    <Popover.Trigger>More info</Popover.Trigger>\n    <Popover.Portal>\n      <Popover.Content>\n        Some more info\u2026\n        <Popover.Arrow />\n      </Popover.Content>\n    </Popover.Portal>\n  </Popover.Root>\n);\n\nexport default PopoverDemo;\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Add styles to the primitives"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"javascript"),":"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as Popover from "@radix-ui/react-popover";\nimport "./styles.css";\n\nconst PopoverDemo = () => (\n  <Popover.Root>\n    <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>\n    <Popover.Portal>\n      <Popover.Content className="PopoverContent">\n        Some content\n        <Popover.Arrow className="PopoverArrow" />\n      </Popover.Content>\n    </Popover.Portal>\n  </Popover.Root>\n);\n\nexport default PopoverDemo;\n')),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"CSS:")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n.PopoverTrigger {\n  background-color: white;\n  border-radius: 4px;\n}\n\n.PopoverContent {\n  border-radius: 4px;\n  padding: 20px;\n  width: 260px;\n  background-color: white;\n}\n\n.PopoverArrow {\n  fill: white;\n}\n")))),(0,a.yg)("h3",{id:"installing-themes"},"Installing Themes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To install Themes, type the command below on your terminal:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# with npm\nnpm install @radix-ui/themes\n\n# with yarn\nyarn add @radix-ui/themes\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Next, import the styles to the entrypoint of your application"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-css"},"import '@radix-ui/themes/styles.css';\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Add the Theme import to the entrypoint of the application()"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import "@radix-ui/themes/styles.css";\nimport { Theme } from "@radix-ui/themes";\n\nexport default function () {\n  return (\n    <Theme>\n      <MyApp />\n    </Theme>\n  );\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Start adding the themes components to your application"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Flex, Text, Button } from "@radix-ui/themes";\n\nexport default function MyApp() {\n  return (\n    <Flex direction="column" gap="2">\n      <Text>Hello from Radix Themes :)</Text>\n      <Button>Let\'s go</Button>\n    </Flex>\n  );\n}\n')))),(0,a.yg)("h3",{id:"installing-icons"},"Installing Icons"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To install colors type the command below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# with npm\nnpm install @radix-ui/react-icons\n\n# with yarn\nyarn add @radix-ui/react-icons\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Import the Icons into your project"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";\n\nfunction MyComponent() {\n  return (\n    <div>\n      <FaceIcon />\n      <SunIcon />\n      <ImageIcon />\n    </div>\n  );\n}\n')))),(0,a.yg)("h3",{id:"installing-colors"},"Installing Colors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To install colors, type the command below on your terminal"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# with npm\nnpm install @radix-ui/colors\n\n# with yarn\nyarn add @radix-ui/colors\n")))),(0,a.yg)("h4",{id:"vanilla-css"},"Vanilla CSS"),(0,a.yg)("p",null,"Radix Colours gives the colours as raw ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," files. When using a bundler like Parcel or Webpack, you can simply import them into your files."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"/* Import only the scales you need */\n@import '@radix-ui/colors/gray.css';\n@import '@radix-ui/colors/blue.css';\n@import '@radix-ui/colors/green.css';\n@import '@radix-ui/colors/red.css';\n@import '@radix-ui/colors/gray-dark.css';\n@import '@radix-ui/colors/blue-dark.css';\n@import '@radix-ui/colors/green-dark.css';\n@import '@radix-ui/colors/red-dark.css';\n\n/* Use the colors as CSS variables */\n.button {\n  background-color: var(--blue-4);\n  color: var(--blue-11);\n  border-color: var(--blue-7);\n}\n.button:hover {\n  background-color: var(--blue-5);\n  border-color: var(--blue-8);\n}\n")),(0,a.yg)("h4",{id:"component-objects"},"Component Objects"),(0,a.yg)("p",null,"Radix Colours can also be provided as ",(0,a.yg)("inlineCode",{parentName:"p"},"Objects")," that can be incorporated into any ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  gray,\n  blue,\n  red,\n  green,\n  grayDark,\n  blueDark,\n  redDark,\n  greenDark,\n} from "@radix-ui/colors";\n')),(0,a.yg)("h3",{id:"build-components-with-radix"},"Build components with Radix"),(0,a.yg)("p",null,"This article will include sample components for ",(0,a.yg)("strong",{parentName:"p"},"Dialogs")," and ",(0,a.yg)("strong",{parentName:"p"},"Slider"),"."),(0,a.yg)("h4",{id:"dialogs"},"Dialogs"),(0,a.yg)("p",null,"The anatomy of a ",(0,a.yg)("strong",{parentName:"p"},"Dialog")," with Radix consists of the following eight elements:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Root"),": Contains all the components of a Dialog."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Trigger"),": Contains the button that will be used to trigger the Dialog."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Portal"),": When used, it move your overlay and content elements into the ",(0,a.yg)("inlineCode",{parentName:"li"},"body")," element in the DOM."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Overlay"),": This is a layer that, when the dialog is open, covers the inactive area of the view."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Content"),": Contains holds the contents of the dialog."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Title"),": THolds the title of the content when the dialog is opened."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Description"),": Holds the description of the content when the dialog is opened."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Close"),": Holds the button that closes the dialog.")),(0,a.yg)("p",null,"The code of a Dialog using ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," primitives and ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," classes is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as Dialog from "@radix-ui/react-dialog";\nimport { Cross2Icon } from "@radix-ui/react-icons";\n\nfunction App() {\n  return (\n    <div style={{ marginTop: "150px" }}>\n      <Dialog.Root>\n        <Dialog.Trigger asChild>\n          <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">\n            Edit profile\n          </button>\n        </Dialog.Trigger>\n\n        <Dialog.Portal>\n          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />\n          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">\n            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">\n              Edit profile\n            </Dialog.Title>\n            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">\n              Make changes to your profile here. Click save when you\'re done.\n            </Dialog.Description>\n            <fieldset className="mb-[15px] flex items-center gap-5">\n              <label\n                className="text-violet11 w-[90px] text-right text-[15px]"\n                htmlFor="name"\n              >\n                Name\n              </label>\n              <input\n                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"\n                id="name"\n                defaultValue="Pedro Duarte"\n              />\n            </fieldset>\n            <fieldset className="mb-[15px] flex items-center gap-5">\n              <label\n                className="text-violet11 w-[90px] text-right text-[15px]"\n                htmlFor="username"\n              >\n                Username\n              </label>\n              <input\n                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"\n                id="username"\n                defaultValue="@peduarte"\n              />\n            </fieldset>\n            <div className="mt-[25px] flex justify-end">\n              <Dialog.Close asChild>\n                <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">\n                  Save changes\n                </button>\n              </Dialog.Close>\n            </div>\n            <Dialog.Close asChild>\n              <button\n                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"\n                aria-label="Close"\n              >\n                <Cross2Icon />\n              </button>\n            </Dialog.Close>\n          </Dialog.Content>\n        </Dialog.Portal>\n      </Dialog.Root>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/5.png",alt:"radix ui"})),(0,a.yg)("h4",{id:"slider"},"Slider"),(0,a.yg)("p",null,"The following four components make up the anatomy of a ",(0,a.yg)("strong",{parentName:"p"},"Slider")," made with Radix:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Root"),": Comprising every component of a slider"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Track"),": The Slider-containing track."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Range"),": The portion of the range that has to fit inside the slider."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Thumb"),": The thumb can be moved.")),(0,a.yg)("p",null,"The code of a Slider using ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix")," primitives and ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," classes is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as Slider from "@radix-ui/react-slider";\n\nfunction App() {\n  return (\n    <div>\n      <Slider.Root\n        className="relative flex items-center select-none touch-none w-[200px] h-5"\n        defaultValue={[50]}\n        max={100}\n        step={1}\n      >\n        <Slider.Track className="bg-black relative grow rounded-full h-[3px]">\n          <Slider.Range className="absolute bg-red-100 rounded-full h-full" />\n        </Slider.Track>\n        <Slider.Thumb\n          className="block w-5 h-5 bg-red-100 shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"\n          aria-label="Volume"\n        />\n      </Slider.Root>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-04-radix-ui/6.gif",alt:"radix ui"})),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this article, we looked at ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix"),", discussed ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix's")," Primitives, Colours, Icons, and Themes, and finally built components with Radix Primitives. Radix is an outstanding component library that you should consider using if you want to create design systems or visually appealing web apps."))}u.isMDXComponent=!0}}]);