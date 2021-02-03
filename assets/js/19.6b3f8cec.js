(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{225:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"npm-커스텀-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-커스텀-명령어","aria-hidden":"true"}},[s._v("#")]),s._v(" NPM 커스텀 명령어")]),s._v(" "),a("p",[s._v("NPM 커스텀 명령어란 사용자가 임의로 명령어의 이름과 동작을 정의해서 사용할 수 있는 기능을 의미합니다. 아래 코드를 봅시다.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo hi"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("NPM 패키지 관리 파일인 "),a("code",[s._v("package.json")]),s._v("에 위와 같이 "),a("code",[s._v("scripts")]),s._v("라는 속성을 추가할 수 있습니다. 그리고 아래의 명령어를 실행하면 콘솔에 "),a("em",[s._v("hi")]),s._v(" 가 출력됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run hello\n")])])]),a("p",[s._v("이처럼 명령어 실행 창에 매번 긴 명령어를 입력할 필요 없이 커스텀 명령어를 이용해 원하는 동작을 실행할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[s._v("NPM 커스텀 명령어는 모두 "),a("code",[s._v("npm run 명령어 이름")]),s._v(" 형식으로 실행할 수 있습니다.")])]),s._v(" "),a("h2",{attrs:{id:"npm-커스텀-명령어-실제-사례"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-커스텀-명령어-실제-사례","aria-hidden":"true"}},[s._v("#")]),s._v(" NPM 커스텀 명령어 실제 사례")]),s._v(" "),a("p",[s._v("NPM 커스텀 명령어는 웹팩 같은 도구 뿐만 아니라 Node.js 등을 사용할 때도 유용합니다.")]),s._v(" "),a("p",[s._v("앞에서 배운 내용으로 실제 커스텀 명령어 사례를 몇 가지 살펴보겠습니다.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node server.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode=none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("위 코드는 서버를 실행하는 "),a("code",[s._v("dev")]),s._v(" 명령어와 웹팩으로 빌드하는 "),a("code",[s._v("build")]),s._v(" 명령어를 정의한 코드입니다. 사용자는 매번 "),a("code",[s._v("node server.js")]),s._v("와 "),a("code",[s._v("webpack --mode=none")]),s._v("를 칠 필요 없이 "),a("code",[s._v("npm run dev")]),s._v("와 "),a("code",[s._v("npm run build")]),s._v("를 입력하면 됩니다.")]),s._v(" "),a("p",[s._v("아래와 같이 실행하려는 명령어가 길수록 더 빛을 발휘합니다.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack --progress --hide-modules"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("매번 긴 명령어를 실행하는 것보다 커스텀 명령어를 사용하는 것이 더 편하겠죠? 😃")]),s._v(" "),a("h2",{attrs:{id:"npm-커스텀-명령어-실전-활용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-커스텀-명령어-실전-활용","aria-hidden":"true"}},[s._v("#")]),s._v(" NPM 커스텀 명령어 실전 활용")]),s._v(" "),a("p",[s._v("커스텀 명령어의 또 다른 장점은 해당 명령어에 실행 옵션 뿐만 아니라 다른 커스텀 명령어를 조합할 수 있다는 점입니다.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build -- --mode production"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("위와 같은 "),a("code",[s._v("scripts")]),s._v(" 속성을 정의하고 아래 명령어를 입력하면 어떻게 될까요?")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run deploy\n")])])]),a("p",[s._v("먼저 "),a("code",[s._v("build")]),s._v("에 정의한 "),a("code",[s._v("webpack")]),s._v(" 명령어가 실행되면서 명령어 뒤쪽에 붙은 실행 옵션들이 수행됩니다. 이후 웹팩 챕터에서 더 자세히 살펴보겠지만 여기서는 "),a("code",[s._v("webpack")]),s._v("이라는 도구의 "),a("code",[s._v("mode")]),s._v("에 "),a("code",[s._v("production")]),s._v("이라는 값을 넘겨준 것입니다.")])])}),[],!1,null,null,null);t.default=n.exports}}]);