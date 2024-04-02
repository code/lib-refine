"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59664],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",slug:"bash-script-arguments",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-22-bash-script/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/bash-script-arguments",source:"@site/blog/2024-02-22-bash-script.md",title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",date:"2024-02-22T00:00:00.000Z",formattedDate:"February 22, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:6.27,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",slug:"bash-script-arguments",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-22-bash-script/social.png",hide_table_of_contents:!1},prevItem:{title:"Create charts using Recharts",permalink:"/blog/recharts"},nextItem:{title:"How to Hide Scrollbar Using CSS?",permalink:"/blog/css-hide-scrollbar"},relatedPosts:[{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",permalink:"/blog/react-query-guide",formattedDate:"July 4, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:9.735,date:"2023-07-04T00:00:00.000Z"},{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",permalink:"/blog/kubectl-port-forward",formattedDate:"November 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.64,date:"2023-11-05T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.705,date:"2022-11-27T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"},{title:"How to Edit a crontab",description:"Crontab is a powerful scheduling tool in Unix-like systems. This article provides a comprehensive guide on using crontab, covering the basics of creating a crontab, setting up environment variables, scheduling jobs, and error handling.",permalink:"/blog/edit-crontab",formattedDate:"December 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.59,date:"2023-12-27T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.225,date:"2022-09-28T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Positional Parameters",id:"understanding-positional-parameters",level:3},{value:"Using Special Parameters",id:"using-special-parameters",level:3},{value:"Implementing Flags and Options",id:"implementing-flags-and-options",level:2},{value:"Handling Variable Numbers of Arguments",id:"handling-variable-numbers-of-arguments",level:2},{value:"Best Practices for Script Arguments",id:"best-practices-for-script-arguments",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m};function d(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Arguments in any bash script are inevitable for any scripting task. They make the script flexible and dynamic instead of static and hard coded. Now there are many variations in how arguments can be used effectively in a script, and this is exactly what we will discuss today. Remember, a solid understanding of arguments is crucial to automate your tasks through script arguments. For each point in this article, we will provide an example from a practical perspective as well."),(0,n.kt)("p",null,"Let's start with understanding how positional parameters work in the bash script."),(0,n.kt)("p",null,"Steps to be covered:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#understanding-positional-parameters"},"Understanding Positional Parameters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-special-parameters"},"Using Special Parameters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#implementing-flags-and-options"},"Implementing Flags and Options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#handling-variable-numbers-of-arguments"},"Handling Variable Numbers of Arguments"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#best-practices-for-script-arguments"},"Best Practices for Bash Script Arguments"))))),(0,n.kt)("h3",{id:"understanding-positional-parameters"},"Understanding Positional Parameters"),(0,n.kt)("p",null,"In bash scripting, positional parameters are a fundamental concept. They\u2019re the variables that bash scripts use to handle input data. When you run a script, you can pass arguments to it, and these arguments are stored in special variables known as positional parameters. The first argument you pass is stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"$1"),", the second in ",(0,n.kt)("inlineCode",{parentName:"p"},"$2"),", and so on."),(0,n.kt)("p",null,"Let\u2019s understand this in detail through an example. Let's say you have a bash script that needs to process three pieces of input data and you want to make use of positional parameters. The below snippet shows how you might use positional parameters to handle this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "Arg 1: $1"\necho "Arg 2: $2"\necho "Arg 3: $3"\n')),(0,n.kt)("p",null,"When you run this script with three arguments, it will echo back the first three arguments you passed to it. For instance, if you run ",(0,n.kt)("inlineCode",{parentName:"p"},"./myscript.sh marketing sales engineering"),", the script will output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Arg 1: marketing\nArg 2: sales\nArg 3: engineering\n")),(0,n.kt)("p",null,"This shows how ",(0,n.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$2"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"$3")," correspond to the first, second, and third arguments you passed to the script. It is a simple yet powerful way to make your scripts more flexible and reusable."),(0,n.kt)("h3",{id:"using-special-parameters"},"Using Special Parameters"),(0,n.kt)("p",null,"In bash scripting, there are special parameters that provide additional ways to handle input data. These include ",(0,n.kt)("inlineCode",{parentName:"p"},"$*"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$@"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"$#"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$*")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$@")," parameters represent all arguments that were passed to the script. While they might seem identical, their behavior diverges when you try to iterate over them in a script. Let\u2019s illustrate this with an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "Iterating with \\$*"\nfor arg in "$*"\ndo\n    echo $arg\ndone\n\necho "Iterating with \\$@"\nfor arg in "$@"\ndo\n    echo $arg\ndone\n')),(0,n.kt)("p",null,"If you run this script with the arguments ",(0,n.kt)("inlineCode",{parentName:"p"},"./myscript.sh one two three"),", you\u2019ll notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"$*")," treats all arguments as a single string, while ",(0,n.kt)("inlineCode",{parentName:"p"},"$@")," treats each argument as a separate string."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$#")," parameter is different - it doesn\u2019t represent the arguments themselves, but the number of arguments. This can be useful when your script needs to know how many arguments were passed. Here\u2019s a simple script that uses ",(0,n.kt)("inlineCode",{parentName:"p"},"$#"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "You provided $# arguments."\n')),(0,n.kt)("p",null,"If you run ",(0,n.kt)("inlineCode",{parentName:"p"},"./myscript.sh apple banana cherry"),", the script will output ",(0,n.kt)("inlineCode",{parentName:"p"},"You provided 3 arguments.")," This shows how ",(0,n.kt)("inlineCode",{parentName:"p"},"$#")," can be used to count the number of arguments passed to a script."),(0,n.kt)("h2",{id:"implementing-flags-and-options"},"Implementing Flags and Options"),(0,n.kt)("p",null,"Bash scripts often require input parameters to customize behavior, and ",(0,n.kt)("inlineCode",{parentName:"p"},"getopts")," is a utility that can be used to parse positional parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Initialize our own variables\nOPTIND=1         # Reset in case getopts has been used previously in the shell.\nverbose=0\nname=""\n\nwhile getopts "h?vn:" opt; do\n    case "$opt" in\n    h|\\?)\n        echo "Usage: $0 [-v] [-n name]"\n        exit 0\n        ;;\n    v)  verbose=1\n        ;;\n    n)  name=$OPTARG\n        ;;\n    esac\ndone\n\nshift $((OPTIND-1))\n\n[ "${1:-}" = "--" ] && shift\n\necho "verbose=$verbose, name=\'$name\', Leftovers: $@"\n')),(0,n.kt)("p",null,"In the script above, ",(0,n.kt)("inlineCode",{parentName:"p"},"-h")," is used for displaying help information, and ",(0,n.kt)("inlineCode",{parentName:"p"},"-n")," is used for setting a name. The ",(0,n.kt)("inlineCode",{parentName:"p"},"v")," flag is used to set verbose mode. If ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," is provided when the script is run, ",(0,n.kt)("inlineCode",{parentName:"p"},"verbose")," is set to 1. If ",(0,n.kt)("inlineCode",{parentName:"p"},"-n")," is provided, the next argument is assigned to the variable ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,n.kt)("p",null,"Here\u2019s an example of how you might run this script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./myscript -v -n "Example Name" leftover args\n\n')),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"verbose=1, name='Example Name', Leftovers: leftover args\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," flag sets verbose mode, and ",(0,n.kt)("inlineCode",{parentName:"p"},"-n")," sets the name to \u201cExample Name\u201d. Any arguments provided after the flags (in this case, \u201cleftover args\u201d) are still available in the script."),(0,n.kt)("h2",{id:"handling-variable-numbers-of-arguments"},"Handling Variable Numbers of Arguments"),(0,n.kt)("p",null,"Bash scripts often need to accept a variable number of arguments. This is where ",(0,n.kt)("inlineCode",{parentName:"p"},"$@")," comes into play. It\u2019s a special shell variable that holds all the arguments provided to the script."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Initialize an empty string\nconcatenated=""\n\n# Loop through all arguments\nfor arg in "$@"; do\n    concatenated+="$arg "\ndone\n\n# Print the concatenated string\necho "Concatenated string: $concatenated"\n')),(0,n.kt)("p",null,"In the script above, we initialize an empty string ",(0,n.kt)("inlineCode",{parentName:"p"},"concatenated"),". We then loop through all arguments provided to the script using ",(0,n.kt)("inlineCode",{parentName:"p"},"$@")," and append each argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"concatenated"),"."),(0,n.kt)("p",null,"Here\u2019s an example of how you might run this script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./myscript arg1 arg2 arg3\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Concatenated string: arg1 arg2 arg3\n")),(0,n.kt)("p",null,"In this example, the script concatenates the three arguments ",(0,n.kt)("inlineCode",{parentName:"p"},"arg1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"arg2"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"arg3")," into a single string. This demonstrates how a bash script can handle a variable number of arguments."),(0,n.kt)("h3",{id:"best-practices-for-script-arguments"},"Best Practices for Script Arguments"),(0,n.kt)("p",null,"Here are some best practices for designing bash scripts with arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use Intuitive Argument Names:")," Opt for descriptive and intuitive names for arguments. This improves readability and helps maintain the code."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bad: ",(0,n.kt)("inlineCode",{parentName:"li"},"bash script.sh $1 $2")),(0,n.kt)("li",{parentName:"ul"},"Good: ",(0,n.kt)("inlineCode",{parentName:"li"},"bash script.sh -u username -p password")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Assign Default Values:")," Where practical, assign default values to arguments. This ensures that your script behaves predictably even when certain inputs are omitted."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example: ",(0,n.kt)("inlineCode",{parentName:"li"},'file_path=${1:-"/default/path"}')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Inline Comments:")," Use inline comments to explain the purpose and expected values of arguments. This documentation aids future maintainers and users of your script."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"# -u: Username for login")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Leverage ",(0,n.kt)("inlineCode",{parentName:"strong"},"getopts")," for Option Parsing:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"getopts")," allows for more flexible and robust argument parsing, supporting both short and long options."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'while getopts ":u:p:" opt; do\n  case ${opt} in\n    u ) username=$OPTARG;;\n    p ) password=$OPTARG;;\n    \\? ) echo "Usage: cmd [-u] [-p]";;\n  esac\ndone\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validate Input Early:")," Check for the existence and format of required arguments at the start of your script to prevent execution with invalid inputs.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -z "$username" ] || [ -z "$password" ]; then\n  echo "Username and password are required."\n  exit 1\nfi\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Beware of Unquoted Variables:")," Always quote variables to handle values with spaces correctly.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bad: ",(0,n.kt)("inlineCode",{parentName:"li"},"if [ -z $var ]; then")),(0,n.kt)("li",{parentName:"ul"},"Good: ",(0,n.kt)("inlineCode",{parentName:"li"},'if [ -z "$var" ]; then')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Explicitly Declare Intent:")," Use ",(0,n.kt)("inlineCode",{parentName:"li"},"set -u")," to treat unset variables and parameters as an error, preventing scripts from running with unintended states.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"set -u")," at the beginning of your script.")))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The importance of arguments in developing scripts that can adapt to different situations is highlighted by the fact that they are extensively used in bash scripts. We focused on improving script functionality and user interaction by using positional parameters, special variables, and ",(0,n.kt)("inlineCode",{parentName:"p"},"getopts"),"."),(0,n.kt)("p",null,"Not only do the given examples provide a useful roadmap, but they also inspire developers to try new things and incorporate these ideas into their scripts. Your scripting skills will certainly improve after adopting these best practices and techniques, allowing you to make your automation tasks more efficient and adaptable."))}d.isMDXComponent=!0}}]);