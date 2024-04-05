"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82565],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(96540);var o=t(15680);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"clone-button",title:"Clone",swizzle:!0},c=void 0,l={unversionedId:"api-reference/antd/components/buttons/clone-button",id:"version-3.xx.xx/api-reference/antd/components/buttons/clone-button",title:"Clone",description:"` uses Ant Design's  component. It uses the clone` method from useNavigation under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/clone.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/clone-button",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/clone.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1712303720,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"clone-button",title:"Clone",swizzle:!0},sidebar:"someSidebar",previous:{title:"Breadcrumb",permalink:"/docs/3.xx.xx/api-reference/antd/components/breadcrumb"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/create-button"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("PropsTable"),y={toc:d},f="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,o.yg)(f,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<CloneButton>")," uses Ant Design's ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"clone")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},"useNavigation")," under the hood.\nIt can be useful when redirecting the app to the create page with the record id route of resource."),(0,o.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,o.yg)("strong",{parentName:"a"},"refine CLI")))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  Table,\n  List,\n  useTable,\n  // highlight-next-line\n  CloneButton,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="100%" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          key="actions"\n          render={(_, record) => (\n            // highlight-next-line\n            <CloneButton size="small" recordItemId={record.id} />\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"recorditemid"},(0,o.yg)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n  return <CloneButton resourceNameOrRouteName="posts" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        create: ClonedPage,\n      },\n    ]}\n    DashboardPage={MyCloneComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"clone")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.yg)("inlineCode",{parentName:"p"},"/posts/clone/1"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"<CloneButton>"))," component reads the id information from the route by default."))),(0,o.yg)("h3",{id:"resourcenameorroutename"},(0,o.yg)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.yg)(m,{id:"resourcenameorroutename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/clone")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,o.yg)("inlineCode",{parentName:"p"},"/clone")," defined by the name property of the resource object."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n  return <CloneButton resourceNameOrRouteName="categories" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n        create: ClonedPage,\n      },\n    ]}\n    DashboardPage={MyCloneComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"clone")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.yg)("inlineCode",{parentName:"p"},"/categories/clone/2"),".")),(0,o.yg)("h3",{id:"hidetext"},(0,o.yg)("inlineCode",{parentName:"h3"},"hideText")),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n  return (\n    <CloneButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyCloneComponent,\n        create: ClonedPage,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},(0,o.yg)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"This prop can be used to skip access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n  return (\n    <CloneButton\n      accessControl={{\n        enabled: true,\n        hideIfUnauthorized: true,\n      }}\n    />\n  );\n};\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(g,{module:"@pankod/refine-antd/CloneButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}b.isMDXComponent=!0}}]);