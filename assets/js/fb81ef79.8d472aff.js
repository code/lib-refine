"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a Refine application",slug:"react-markdown",authors:"david_omotayo",tags:["react","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/social.png",hide_table_of_contents:!1},p=void 0,d={permalink:"/blog/react-markdown",source:"@site/blog/2023-08-24-react-markdown.md",title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a Refine application",date:"2023-08-24T00:00:00.000Z",formattedDate:"August 24, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"Refine",permalink:"/blog/tags/refine"}],readingTime:12.83,hasTruncateMarker:!1,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a Refine application",slug:"react-markdown",authors:"david_omotayo",tags:["react","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a React Admin Panel with Refine and daisyUI",permalink:"/blog/daisy-ui-react-admin-panel"},nextItem:{title:"How to use Docker Exec command?",permalink:"/blog/docker-exec"},relatedPosts:[{title:"Dynamic Forms with React Hook Form",description:"How to build dynamic forms with React hook form in React CRUD apps.",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.955,date:"2022-12-23T00:00:00.000Z"},{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.235,date:"2022-09-01T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"}],authorPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.145,date:"2023-03-07T00:00:00.000Z"},{title:"Best React Admin Dashboard Libraries 2023",description:"We have curated a compilation of the 5 best React admin dashboard libraries that encompass all the essential features needed to create modern and feature-rich dashboards with minimal effort.",permalink:"/blog/react-admin-dashboard",formattedDate:"March 17, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:6.495,date:"2023-03-17T00:00:00.000Z"},{title:"Dynamic Forms with React Hook Form",description:"How to build dynamic forms with React hook form in React CRUD apps.",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.955,date:"2022-12-23T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is react-md-editor",id:"what-is-react-md-editor",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Using the MDEditor component",id:"using-the-mdeditor-component",level:2},{value:"Custom toolbar",id:"custom-toolbar",level:2},{value:"commands prop",id:"commands-prop",level:2},{value:"extraCommands prop",id:"extracommands-prop",level:2},{value:"Adding custom preview",id:"adding-custom-preview",level:2},{value:"KaTeX preview",id:"katex-preview",level:2},{value:"Sanitize Markdown",id:"sanitize-markdown",level:2},{value:"rehype-sanitize plugin",id:"rehype-sanitize-plugin",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live CodeSandbox Example",id:"live-codesandbox-example",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const h={toc:c};function k(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Prior to John Gruber's invention of Markdown in 2004, WYSIWYG editors were commonly used for editing content on websites and the web in general. However, Markdown introduced a new era of advanced content editing by providing a simpler way to format elements in plain text documents. Today, Markdown has become one of the most popular markup languages worldwide, enabling web writers to create articles that require HTML without the complexity of writing actual HTML code."),(0,a.kt)("p",null,"Markdown has gained popularity due to its straightforward syntax, making it accessible to anyone familiar with basic text formatting tools. It offers a wide range of features compared to traditional methods, leading to the widespread adoption of Markdown in enterprise web applications that require text formatting capabilities."),(0,a.kt)("p",null,"In this article, we will explore the process of integrating the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uiw/react-md-editor"},(0,a.kt)("strong",{parentName:"a"},"uiw/react-md-editor"))," library into a React application to create a standard Markdown editor."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-react-md-editor"},"What is react-md-editor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-the-mdeditor-component"},"Using the MDEditor component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-toolbar"},"Custom toolbar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#commands-prop"},"commands prop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extracommands-prop"},"extraCommands prop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-custom-preview"},"Adding custom preview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#katex-preview"},"KaTeX preview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sanitize-markdown"},"Sanitize Markdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rehype-sanitize-plugin"},"rehype-sanitize plugin"))),(0,a.kt)("h2",{id:"what-is-react-md-editor"},"What is react-md-editor"),(0,a.kt)("p",null,"The React markdown editor, also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"uiw/react-md-editor"),", is a straightforward yet powerful Markdown editing library developed for React by the UIW (React UI components) team. It offers a seamless text editing experience for creating and modifying Markdown content within a React application."),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiw/react-md-editor")," library, users can easily compose and edit Markdown content through a user-friendly and customizable editor interface. It comes equipped with a variety of features including syntax highlighting, toolbar options for text formatting, real-time preview, and the ability to render Markdown as HTML."),(0,a.kt)("p",null,"What sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiw/react-md-editor"),' library apart from other React markdown libraries is its inclusion of a dedicated "preview" pane, enabling users to instantly visualize their content as they make changes.'),(0,a.kt)("p",null,"Note. Throughout this article, we will refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiw/react-md-editor"),' library as the "',(0,a.kt)("strong",{parentName:"p"},"React markdown editor"),'" for the sake of simplicity and clarity.'),(0,a.kt)("h2",{id:"project-setup"},"Project setup"),(0,a.kt)("p",null,"In this tutorial, we will create a React application using Refine, a React framework designed for developing headless enterprise web applications. We will leverage Refine's pre-generated pages and content to illustrate how to incorporate React Markdown into an application that closely resembles a real-world application."),(0,a.kt)("p",null,"We'll use the npm create refine-app command to interactively initialize the project."),(0,a.kt)("p",null,"Since this tutorial does not require a complex project setup, we can opt for the following options, which will be more than sufficient for our purposes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2714 Choose a project template \xb7 refine-react\n\u2714 What would you like to name your project?: \xb7 refine-markdown\n\u2714 Choose your backend service to connect: \xb7 REST API\n\u2714 Do you want to use a UI Framework?: \xb7 Ant Design\n\u2714 Do you want to add example pages?: \xb7 No\n")),(0,a.kt)("p",null,"Once the setup is complete, navigate to the project folder and start your app with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install\nnpm run dev\n")),(0,a.kt)("p",null,"Once you have executed the commands, the development server will automatically launch the application in a new tab of your default web browser. If, for any reason, the application does not open automatically, you can manually access it by navigating to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5173"),"."),(0,a.kt)("p",null,"Upon accessing the URL, the application will be displayed, and you should see a similar screen to the image depicted below."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/project-setup.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"With our project now fully set up and ready for use, we can proceed and integrate the React markdown editor package into our application."),(0,a.kt)("h2",{id:"using-the-mdeditor-component"},"Using the MDEditor component"),(0,a.kt)("p",null,"The first step in integrating the React markdown editor into your project is to install the package as a dependency. To accomplish this, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @uiw/react-md-editor\n")),(0,a.kt)("p",null,"The next step is to implement the",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component wherever it is required in your project. In our example, we will be using the component within the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," pages, where the forms of our application are located."),(0,a.kt)("p",null,"To begin, import the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component into the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," pages, remove the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Textarea")," component from the forms, and insert the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import MDEditor from "@uiw/react-md-editor";\n ...\n\n<Form.Item\n  label={translate("blog_posts.fields.content")}\n  name="content"\n  rules={[\n    {\n      required: true,\n    },\n  ]}\n>\n  <MDEditor data-color-mode="light" />\n</Form.Item>;\n\n  ...\n')),(0,a.kt)("p",null,"This will render a native ",(0,a.kt)("inlineCode",{parentName:"p"},"Textarea")," element with support for markdown editing and a preview pane on the form."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/using-md-editor-min.gif",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"In most cases, utilizing the following props will allow you to render a fully functional React markdown editor within your applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": This prop is used to specify the initial value or the current value of the markdown content."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onChange"),": This prop is responsible for handling changes made to the markdown content.")),(0,a.kt)("p",null,"In our example app, you may notice that we aren't utilizing these props, yet the application is functioning effectively. This is because the Ant Design form component in Refine is specifically designed to seamlessly integrate with the React markdown editor package. As a result, it automatically retrieves the markdown value without requiring additional effort."),(0,a.kt)("p",null,"In a typical React application, it is necessary to create a state to capture and store the markdown value, which is then assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," props on the markdown editor component. This ensures proper functionality and synchronization between the editor and the markdown content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport MDEditor from "@uiw/react-md-editor";\n\nexport default function App() {\n  const [value, setValue] = React.useState("");\n  return (\n    <div className="container">\n      <MDEditor value={value} onChange={setValue} />\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"However, the package offers several additional props that can be utilized to customize the toolbar of the editor and introduce extra functionalities. Below is a list of some of the available properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"commands"),(0,a.kt)("li",{parentName:"ul"},"extraCommands"),(0,a.kt)("li",{parentName:"ul"},"previewOptions"),(0,a.kt)("li",{parentName:"ul"},"enableScroll"),(0,a.kt)("li",{parentName:"ul"},"preview")),(0,a.kt)("p",null,"The React markdown editor offers several other properties beyond the ones mentioned above. To explore and learn more about these properties, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://uiwjs.github.io/react-md-editor/"},"documentation")," for detailed information."),(0,a.kt)("h2",{id:"custom-toolbar"},"Custom toolbar"),(0,a.kt)("p",null,"The default toolbar provided by the React markdown editor is comprehensive enough, to begin with. However, if you need to further customize the toolbar to better suit your needs, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"extraCommand")," props. These props enable you to implement custom functionality and extend the editor's capabilities based on your individual requirements."),(0,a.kt)("h2",{id:"commands-prop"},"commands prop"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," prop allows for customization of the commands displayed in the toolbar of the editor. It takes an array of objects that define the specific commands to be included in the toolbar."),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," property is provided, it automatically replaces the default toolbar with the custom commands defined. For instance, if we declare an empty array for the commands property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component, the default toolbar commands are overridden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor commands={[]} data-color-mode="light" />\n')),(0,a.kt)("p",null,"Every command on the toolbar will be removed."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/command-prop.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To manually add predefined command properties to the toolbar, you can pass them as objects within the array assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor commands={[commands.bold, commands.italic]} data-color-mode="light" />\n')),(0,a.kt)("p",null,"This will only render the ",(0,a.kt)("inlineCode",{parentName:"p"},"bold")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"italic")," commands on the toolbar."),(0,a.kt)("p",null,"We also have the flexibility to create custom commands by defining objects with specific properties and passing them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," array."),(0,a.kt)("p",null,"Each object in the array will include various properties that define the command, such as its name, key command, events, and more. Here are some of the primary properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": Specifies the name of the command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyCommand"),": Defines the key command associated with the command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buttonProps"),": Allows the addition of accessibility properties to the command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Icon"),": Sets an icon for the command on the toolbar."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"execute"),": Assigns events or actions to the command.")),(0,a.kt)("p",null,"For instance, if we wish to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," command to the toolbar, the following code demonstrates how it can be accomplished:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const help = {\n  name: "help",\n  keyCommand: "help",\n  buttonProps: { "aria-label": "insert help" },\n  icon: (\n    <svg viewBox="0 0 16 16" width="12px" height="12px">\n      <path\n        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"\n        fill="currentColor"\n      />\n    </svg>\n  ),\n  execute: () => {\n    window.open("https://refine.dev/", "_blank");\n  },\n};\n\nreturn (\n  <Form.Item\n    label={translate("blog_posts.fields.content")}\n    name="content"\n    rules={[\n      {\n        required: true,\n      },\n    ]}\n  >\n    <MDEditor\n      commands={[commands.bold, commands.italic, help]}\n      data-color-mode="light"\n    />\n  </Form.Item>\n);\n')),(0,a.kt)("p",null,"Here, we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," object and assign the previously mentioned properties to define the command. This includes specifying a ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"keyCommand"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonProps"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"icon"),". Additionally, an event is assigned to execute when the command is clicked, which opens Refine's documentation in a new window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'execute: () => {\n  window.open("https://refine.dev/", "_blank");\n},\n')),(0,a.kt)("p",null,"Then, we pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," array on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor\n  commands={[commands.bold, commands.italic, help]}\n  data-color-mode="light"\n/>\n')),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/common-prop2.gif",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"extracommands-prop"},"extraCommands prop"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"extraCommand")," property serves the same purpose as the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," property. It is an array of objects that define the commands displayed on the toolbar. However, it is specifically used to add additional commands to the toolbar, and these commands are positioned on the right side of the toolbar."),(0,a.kt)("p",null,"This indicates that the ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fullscreen")," commands displayed on the toolbar are predefined extra commands."),(0,a.kt)("p",null,"We can add custom extra commands using the same approach as the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor\n  commands={[commands.bold, commands.italic, help]}\n  extraCommands={[\n    commands.title1,\n    commands.title2,\n    commands.codePreview,\n    commands.codeEdit,\n  ]}\n  data-color-mode="light"\n/>\n')),(0,a.kt)("p",null,"Also, you have the option to assign either predefined command objects or create custom ones, as demonstrated in the following example from the documentation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'    import React, { useContext } from "react";\n    import MDEditor, { commands, EditorContext } from "@uiw/react-md-editor";\n\n            ...\n\n      const Button = () => {\n        const { preview, dispatch }: { preview?: any; dispatch?: any } =\n          useContext(EditorContext);\n        const click = () => {\n          dispatch({\n            preview: preview === "edit" ? "preview" : "edit",\n          });\n        };\n        if (preview === "edit") {\n          return (\n            <svg width="12" height="12" viewBox="0 0 520 520" onClick={click} />\n          );\n        }\n        return (\n          <svg width="12" height="12" viewBox="0 0 520 520" onClick={click} />\n\n        );\n      };\n\n      const codePreview = {\n        name: "preview",\n        keyCommand: "preview",\n        value: "preview",\n        icon: <Button />,\n      };\n\n            ...\n\n      return (\n        ...\n\n      <Form.Item\n        label={translate("blog_posts.fields.content")}\n        name="content"\n        rules={[\n          {\n            required: true,\n          },\n        ]}\n      >\n        <MDEditor\n          commands={[commands.bold, commands.italic, help]}\n          extraCommands={[codePreview]}\n          data-color-mode="light"\n        />\n      </Form.Item>\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EditorContext")," is employed to dispatch an action that combines two preview functionalities (",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),") into a single command using conditionals. When clicked, the command toggles the editor's preview state from ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," and vice versa."),(0,a.kt)("h2",{id:"adding-custom-preview"},"Adding custom preview"),(0,a.kt)("p",null,"A markdown editor is capable of performing complex computational editing tasks, including rendering TeX mathematical equations and generating diagrams and flowcharts from text. While the React markdown editor doesn't include these functionalities by default, it offers the option to integrate with libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"kaTeX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mermaid preview"),"."),(0,a.kt)("p",null,"To integrate the ",(0,a.kt)("inlineCode",{parentName:"p"},"kaTeX")," library with the React markdown editor package in your application, open up your terminal and execute the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install katex\n")),(0,a.kt)("p",null,"This command will install the kaTeX package as a dependency of your project."),(0,a.kt)("p",null,"Similarly, you can integrate the mermaid preview library by following the corresponding steps outlined in its ",(0,a.kt)("a",{parentName:"p",href:"https://uiwjs.github.io/react-md-editor/"},"documentation"),"."),(0,a.kt)("h2",{id:"katex-preview"},"KaTeX preview"),(0,a.kt)("p",null,"kaTeX is a JavaScript library designed for rendering TeX mathematical expressions on the web. The React markdown editor utilizes kaTeX as a plugin to preview mathematical expressions."),(0,a.kt)("p",null,"To add it to your editor, you must first import the package and its peer-style dependency into your component, which in our case is the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import katex from "katex";\nimport "katex/dist/katex.css";\n')),(0,a.kt)("p",null,"Then, we'll configure the editor to format and preview kaTeX expressions as mathematical expressions by assigning the ",(0,a.kt)("inlineCode",{parentName:"p"},"previewOptions")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MDEditor")," component using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor\n  data-color-mode="light"\n  previewOptions={{\n    components: {\n      code: ({ inline, children = [], className, ...props }) => {\n        const txt = children[0] || "";\n        if (inline) {\n          if (typeof txt === "string" && /^\\$\\$(.*)\\$\\$/.test(txt)) {\n            const html = katex.renderToString(\n              txt.replace(/^\\$\\$(.*)\\$\\$/, "$1"),\n              {\n                throwOnError: false,\n              },\n            );\n            return <code dangerouslySetInnerHTML={{ __html: html }} />;\n          }\n          return <code>{txt}</code>;\n        }\n        const code =\n          props.node && props.node.children\n            ? getCodeString(props.node.children)\n            : txt;\n        if (\n          typeof code === "string" &&\n          typeof className === "string" &&\n          /^language-katex/.test(className.toLocaleLowerCase())\n        ) {\n          const html = katex.renderToString(code, {\n            throwOnError: false,\n          });\n          return (\n            <code\n              style={{ fontSize: "150%" }}\n              dangerouslySetInnerHTML={{ __html: html }}\n            />\n          );\n        }\n        return <code className={String(className)}>{txt}</code>;\n      },\n    },\n  }}\n/>\n')),(0,a.kt)("p",null,"The code above is specifying how the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," component should behave when it encounters inline or block-level code elements. If the code is inline and contains a KaTeX expression (indicated by ",(0,a.kt)("inlineCode",{parentName:"p"},"$$"),"), it will be rendered using the KaTeX library. If the code is block-level and has a ",(0,a.kt)("inlineCode",{parentName:"p"},"language-katex")," class, it will also be rendered using the KaTeX library. Otherwise, the code will be displayed as plain text."),(0,a.kt)("p",null,"Now, if we input KaTeX expressions into the editor, they will be previewed as mathematical expressions."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/katex-preview.gif",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"sanitize-markdown"},"Sanitize Markdown"),(0,a.kt)("p",null,"Markdown inputs need to be parsed into HTML elements before they can be rendered in a browser. However, this parsing process can create a potential vulnerability for cross-site scripting (XSS) attacks."),(0,a.kt)("p",null,"XSS is a common security vulnerability found in web applications, allowing malicious users to inject client-side scripts into web pages, bypassing access controls like the same-origin policy."),(0,a.kt)("p",null,"To mitigate this risk, it's important to sanitize the markdown text by removing any potentially harmful HTML tags and attributes. This ensures that user inputs are properly formatted without compromising the security of your application."),(0,a.kt)("h2",{id:"rehype-sanitize-plugin"},"rehype-sanitize plugin"),(0,a.kt)("p",null,"To prevent the entry of malicious scripts in the input area and protect our application, we need to sanitize the parsed HTML to ensure its safety before rendering. This is where rehype-sanitize comes into play."),(0,a.kt)("p",null,"rehype-sanitize is a security plugin used by the React markdown editor package to handle sanitization within its editor. It provides a reliable way to sanitize the HTML content and mitigate any potential security risks."),(0,a.kt)("p",null,"Integrating the rehype-sanitize plugin into our application is a straightforward process. We simply need to install the package as a dependency using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install rehype-sanitize\n")),(0,a.kt)("p",null,"Then, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"rehypeSanitize")," function into the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," files as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import rehypeSanitize from "rehype-sanitize";\n')),(0,a.kt)("p",null,"Finally, we pass it as a value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rehypePlugins")," property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"previewOptions")," props, as shown in the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<MDEditor\n  data-color-mode="light"\n  previewOptions={{\n    rehypePlugins: [[rehypeSanitize]],\n  }}\n/>\n')),(0,a.kt)("p",null,"Now, if you try to parse malicious codes into the editor, the rehype-sanitize plugin will remove the code before previewing the content. The GIFs below provide a clear demonstration of this in action."),(0,a.kt)("p",null,"Before integrating rehype-sanitize:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/rehype-sanitize.gif",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"After integrating rehype-sanitize:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-24-react-markdown/rehype-sanitze-2.gif",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have covered a substantial amount on integrating a markdown editor into a React application using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiw/react-md-editor")," library. However, there is much more to explore with the markdown editor."),(0,a.kt)("p",null,"For a comprehensive understanding and implementation of advanced features, I recommend referring to the official ",(0,a.kt)("a",{parentName:"p",href:"https://uiwjs.github.io/react-md-editor/"},"documentation"),". It is essential to consult the documentation and explore the examples provided by the library's creators to gain detailed instructions and discover additional usage options."),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live CodeSandbox Example"),(0,a.kt)(m,{path:"blog-refine-markdown",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);