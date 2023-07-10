(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6SEy":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return m}));var n=t("wx14"),s=t("Ff2n"),i=(t("q1tI"),t("7ljp")),r=t("hhGP");t("qKvR");const l=["components"],c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!Object.prototype.hasOwnProperty.call(c,"__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/directory-structure.md"}});const o={_frontmatter:c},b=r.a;function m(e){let{components:a}=e,t=Object(s.a)(e,l);return Object(i.b)(b,Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"directory-structure"},"Directory structure"),Object(i.b)("p",null,"Tanka uses the following directories and special files:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk9"},"."),Object(i.b)("span",{parentName:"span",className:"mtk1"}," "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# the project (<rootDir>)")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"├── environments "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# code defining clusters")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"│   └── default "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# <baseDir>")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"│       ├── main.jsonnet "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# starting point of the Jsonnet compilation")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"│       └── spec.json "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# environment's config")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"├── jsonnetfile.json "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# direct dependencies")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"├── jsonnetfile.lock.json "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# all dependencies with exact versions")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"├── lib "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# libraries for this project only")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"│   └── k.libsonnet "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# alias file for vendor/github.com/jsonnet-libs/k8s-libsonnet/1.21/main.libsonnet")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"└── vendor "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# external libraries installed using jb")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    ├── github.com")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   ├── grafana")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   │   └── jsonnet-libs")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   │       └── ksonnet-util "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Grafana Labs' usability extensions to k.libsonnet")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   │           ├── ...")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   │           └── kausal.libsonnet")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │   └── jsonnet-libs")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │       └── k8s-libsonnet")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │           └── 1.21 "),Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# kubernetes library")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │               ├── ...")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    │               └── main.libsonnet")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    ├── 1.21 -"),Object(i.b)("span",{parentName:"span",className:"mtk12"},">"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," github.com/jsonnet-libs/k8s-libsonnet/1.21")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"    └── ksonnet-util -"),Object(i.b)("span",{parentName:"span",className:"mtk12"},">"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," github.com/grafana/jsonnet-libs/ksonnet-util")))),Object(i.b)("h2",{id:"environments"},"Environments"),Object(i.b)("p",null,"Tanka organizes configuration in environments. For the rationale behind this,\nsee the ",Object(i.b)("a",{parentName:"p",href:"/tutorial/environments"},"section in the tutorial"),"."),Object(i.b)("p",null,"An environment consists of at least two files:"),Object(i.b)("h4",{id:"specjson"},"spec.json"),Object(i.b)("p",null,"This file configures environment properties such as cluster connection\n(",Object(i.b)("inlineCode",{parentName:"p"},"spec.apiServer"),"), default namespace (",Object(i.b)("inlineCode",{parentName:"p"},"spec.namespace"),"), etc."),Object(i.b)("p",null,"For the full set of options, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/grafana/tanka/blob/main/pkg/spec/v1alpha1/environment.go"},"Golang source\ncode"),"."),Object(i.b)("h4",{id:"mainjsonnet"},"main.jsonnet"),Object(i.b)("p",null,"Like other programming languages, Jsonnet needs an entrypoint into the\nevaluation, something to begin with. ",Object(i.b)("inlineCode",{parentName:"p"},"main.jsonnet")," is exactly this: The very\nfirst file being evaluated, importing or directly specifying everything required\nfor this specific environment."),Object(i.b)("h2",{id:"root-and-base"},"Root and Base"),Object(i.b)("p",null,"When talking about directories, Tanka uses the following terms:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Term"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Identifier file"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"rootDir")),Object(i.b)("td",{parentName:"tr",align:null},"The root of your project"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"jsonnetfile.json")," or ",Object(i.b)("inlineCode",{parentName:"td"},"tkrc.yaml"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"baseDir")),Object(i.b)("td",{parentName:"tr",align:null},"The directory of the current environment"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"main.jsonnet"))))),Object(i.b)("p",null,"Regardless what subdirectory of the project you are in, Tanka will always be\nable to identify both directories, by searching for the identifier files in the\nparent directories.",Object(i.b)("br",{parentName:"p"}),"\n","Tanka needs these for correctly setting up the ",Object(i.b)("a",{parentName:"p",href:"/libraries/import-paths"},"import paths"),"."),Object(i.b)("p",null,"This is similar to how ",Object(i.b)("inlineCode",{parentName:"p"},"git")," always works, by looking for the ",Object(i.b)("inlineCode",{parentName:"p"},".git")," directory."),Object(i.b)("h2",{id:"libraries"},"Libraries"),Object(i.b)("p",null,"Tanka relies heavily on code-reuse, so libraries are a natural thing. Roughly\nspoken, they can be imported from two paths:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/lib"),": Project local libraries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/vendor")," External libraries")),Object(i.b)("p",null,"For more details consider the ",Object(i.b)("a",{parentName:"p",href:"/libraries/import-paths"},"import paths"),"."),Object(i.b)("h3",{id:"jsonnetfilejson-and-the-lock"},"jsonnetfile.json and the lock"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"jb")," records all external packages installed in a file called\n",Object(i.b)("inlineCode",{parentName:"p"},"jsonnetfile.json"),". This file is the source of truth about what should be\nincluded in ",Object(i.b)("inlineCode",{parentName:"p"},"vendor/"),". However, it should only include what is really directly\nrequired, all recursive dependencies will be handled just fine."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"jsonnetfile.lock.json")," is generated on every run of jsonnet-bundler, including\na list of packages that must be included in ",Object(i.b)("inlineCode",{parentName:"p"},"vendor/"),", along with the exact\nversion and a ",Object(i.b)("inlineCode",{parentName:"p"},"sha256")," hash of the package contents."),Object(i.b)("p",null,"Both files should be checked into source control: The ",Object(i.b)("inlineCode",{parentName:"p"},"jsonnetfile.json"),"\nspecifies what you need and the ",Object(i.b)("inlineCode",{parentName:"p"},"jsonnetfile.lock.json")," is important to make\nsure that subsequent ",Object(i.b)("inlineCode",{parentName:"p"},"jb install")," invocations always do the exact same thing."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Tip"),": The ",Object(i.b)("inlineCode",{parentName:"p"},"vendor/")," directory can be safely added to ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," to keep your\nrepository size down, as long as ",Object(i.b)("inlineCode",{parentName:"p"},"jsonnetfile.lock.json")," is checked in.")),Object(i.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/directory-structure.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-directory-structure-md-ad19d2c71c0ca53087c6.js.map