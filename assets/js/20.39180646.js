(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{227:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"npm-설치-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-설치-명령어","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 설치 명령어")]),a._v(" "),t("p",[a._v("NPM에서 가장 많이 사용되는 명령어인 "),t("code",[a._v("npm install")]),a._v("에 대해 알아보겠습니다.")]),a._v(" "),t("h2",{attrs:{id:"npm-지역-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-지역-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 지역 설치")]),a._v(" "),t("p",[a._v("NPM 초기화 명령어로 "),t("code",[a._v("package.json")]),a._v(" 파일을 생성하고 나면 해당 프로젝트에서 사용할 자바스크립트 라이브러리를 설치하게 됩니다. 이 때 명령어는 아래와 같습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jquery --save-prod\n")])])]),t("p",[a._v("그리고 지역 설치 명령어의 경우 명령어 옵션으로 "),t("code",[a._v("--save-prod")]),a._v("를 붙이지 않아도 동일한 효과가 납니다. 또한, "),t("code",[a._v("install")]),a._v(" 대신 "),t("code",[a._v("i")]),a._v("를 사용해도 됩니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 위 명령어와 동일한 효과")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i jquery\n")])])]),t("h2",{attrs:{id:"npm-지역-설치-경로"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-지역-설치-경로","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 지역 설치 경로")]),a._v(" "),t("p",[a._v("위 명령어로 라이브러리를 설치하면 해당 프로젝트의 "),t("code",[a._v("node_modules")]),a._v(" 라는 폴더가 생깁니다. 그리고 그 폴더 아래에 해당 라이브러리 파일들이 설치되어 있는 것을 확인할 수 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"npm-전역-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-전역-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 전역 설치")]),a._v(" "),t("p",[a._v("NPM 전역 설치는 위와 같이 프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gulp --global\n")])])]),t("p",[a._v("라이브러리가 설치되고 나면 이제 명령어 실행 창에 해당 라이브러리 이름을 입력했을 때 명령어를 인식합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gulp\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",[a._v("전역 설치 명령어 옵션 "),t("code",[a._v("--global")]),a._v(" 대신 "),t("code",[a._v("-g")]),a._v("를 사용해도 됩니다.")])]),a._v(" "),t("h2",{attrs:{id:"npm-전역-설치-경로"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-전역-설치-경로","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 전역 설치 경로")]),a._v(" "),t("p",[a._v("이렇게 설치된 자바스크립트 라이브러리는 어느 위치에서 해당 명령어를 실행했던지 간에 OS별로 아래와 같은 폴더 경로에 설치됩니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# window")]),a._v("\n%USERPROFILE%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("AppData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Roaming"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("node_modules\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mac")]),a._v("\n/usr/local/lib/node_modules\n")])])]),t("h2",{attrs:{id:"npm-지역-설치-옵션-2가지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-지역-설치-옵션-2가지","aria-hidden":"true"}},[a._v("#")]),a._v(" NPM 지역 설치 옵션 2가지")]),a._v(" "),t("p",[a._v("NPM 지역 설치에 자주 사용되는 2가지 옵션은 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jquery --save-prod\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jquery --save-dev\n")])])]),t("p",[a._v("위 명령어는 아래와 같이 각각 축약할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i jquery\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i jquery -D\n")])])]),t("p",[a._v("여기서 설치 옵션에 아무것도 넣지 않은 "),t("code",[a._v("npm i jquery")]),a._v("는 "),t("code",[a._v("package.json")]),a._v("의 "),t("code",[a._v("dependencies")]),a._v("에 등록됩니다.")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// package.json")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"jquery"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^3.4.1"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("설치 옵션으로 "),t("code",[a._v("-D")]),a._v("를 넣은 경우에는 해당 라이브러리가 "),t("code",[a._v("package.json")]),a._v("의 "),t("code",[a._v("devDependencies")]),a._v("에 등록됩니다.")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// package.json")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"jquery"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^3.4.1"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("code",[a._v("-D")]),a._v("를 넣을 때와 넣지 않을 때의 차이점은 무엇일까요? 아래에서 살펴보겠습니다.")]),a._v(" "),t("h2",{attrs:{id:"개발용-라이브러리와-배포용-라이브러리-구분하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개발용-라이브러리와-배포용-라이브러리-구분하기","aria-hidden":"true"}},[a._v("#")]),a._v(" 개발용 라이브러리와 배포용 라이브러리 구분하기")]),a._v(" "),t("p",[a._v("NPM 지역 설치를 할 때는 해당 라이브러리가 배포용(dependencies)인지 개발용(devDependencies)인지 꼭 구분해주어야 합니다.\n예를 들어, "),t("code",[a._v("jquery")]),a._v("와 같이 화면 로직과 직접적으로 관련된 라이브러리는 배포용으로 설치해야 합니다. 아래와 같이 말이죠.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 배포용 라이브러리 설치")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i jquery\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"jquery"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^3.4.1"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("이렇게 설치된 배포용 라이브러리는 "),t("code",[a._v("npm run build")]),a._v("로 빌드를 하면 최종 애플리케이션 코드 안에 포함됩니다.")]),a._v(" "),t("p",[a._v("그런데 만약 반대로 설치 옵션에 "),t("code",[a._v("-D")]),a._v("를 주었다면 해당 라이브러리는 빌드하고 배포할 때 애플리케이션 코드에서 빠지게 됩니다. 따라서, 최종 애플리케이션에 포함되어야 하는 라이브러리는 "),t("code",[a._v("-D")]),a._v("로 설치하면 안 됩니다. 개발할 때만 사용하고 배포할 때는 빠져도 좋은 라이브러리의 예시는 다음과 같습니다.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("webpack")]),a._v(" : 빌드 도구")]),a._v(" "),t("li",[t("code",[a._v("eslint")]),a._v(" : 코드 문법 검사 도구")]),a._v(" "),t("li",[t("code",[a._v("imagemin")]),a._v(" : 이미지 압축 도구")])])])}),[],!1,null,null,null);s.default=n.exports}}]);