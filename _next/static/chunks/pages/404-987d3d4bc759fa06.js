(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(7492)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,r=n(7273).Z,o=l(n(7294)),a=n(1003),s=n(7795),i=n(4465),u=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function x(e,t,n,l){if(a.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function m(e){return"string"==typeof e?e:s.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let n,l;let{href:s,as:h,children:v,prefetch:y,passHref:b,replace:g,shallow:j,scroll:_,locale:k,onClick:M,onMouseEnter:N,onTouchStart:C,legacyBehavior:E=!1}=e,w=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let P=!1!==y,O=o.default.useContext(u.RouterContext),L=o.default.useContext(c.AppRouterContext),T=null!=O?O:L,S=!O,{href:I,as:R}=o.default.useMemo(()=>{if(!O){let e=m(s);return{href:e,as:h?m(h):e}}let[t,n]=a.resolveHref(O,s,!0);return{href:t,as:h?a.resolveHref(O,h):n||t}},[O,s,h]),H=o.default.useRef(I),D=o.default.useRef(R);E&&(l=o.default.Children.only(n));let K=E?l&&"object"==typeof l&&l.ref:t,[U,A,B]=f.useIntersection({rootMargin:"200px"}),X=o.default.useCallback(e=>{(D.current!==R||H.current!==I)&&(B(),D.current=R,H.current=I),U(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[R,K,I,B,U]);o.default.useEffect(()=>{T&&A&&P&&x(T,I,R,{locale:k})},[R,I,A,k,P,null==O?void 0:O.locale,T]);let Z={ref:X,onClick(e){E||"function"!=typeof M||M(e),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,l,r,s,i,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:s,locale:u,scroll:i}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,T,I,R,g,j,_,k,S,P)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),T&&(P||!S)&&x(T,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof C||C(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),T&&(P||!S)&&x(T,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||b||"a"===l.type&&!("href"in l.props)){let q=void 0!==k?k:null==O?void 0:O.locale,z=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(R,q,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);Z.href=z||p.addBasePath(i.addLocale(R,q,null==O?void 0:O.defaultLocale))}return E?o.default.cloneElement(l,Z):o.default.createElement("a",Object.assign({},w,Z),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,u=i||!o,[c,f]=l.useState(!1),[d,p]=l.useState(null);l.useEffect(()=>{if(o){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:l,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=a.get(l)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},s.push(n),a.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),a.delete(l);let t=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let l=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(l)}},[d,u,n,t,c]);let h=l.useCallback(()=>{f(!1)},[]);return[p,c,h]};var l=n(7294),r=n(4686);let o="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7492:function(e,t,n){"use strict";n.r(t),n.d(t,{Error404:function(){return i}});var l=n(5893),r=n(9008),o=n.n(r),a=n(1664),s=n.n(a);let i=()=>(0,l.jsxs)("div",{className:"bg-gray-50",children:[(0,l.jsx)(o(),{children:(0,l.jsx)("title",{children:"404 - Page Not Found"})}),(0,l.jsx)("div",{className:"flex min-h-screen flex-col bg-white pt-16 pb-12",children:(0,l.jsxs)("main",{className:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8",children:[(0,l.jsx)("div",{className:"flex flex-shrink-0 justify-center",children:(0,l.jsx)(s(),{href:"/",className:"inline-flex",passHref:!0,children:(0,l.jsx)("span",{children:(0,l.jsx)("span",{className:"sr-only",children:"About Me"})})})}),(0,l.jsx)("div",{className:"py-16",children:(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-sm font-semibold uppercase tracking-wide text-midnight-500",children:"404 error"}),(0,l.jsx)("h1",{className:"mt-2 text-4xl font-extrabold tracking-tight text-midnight-500 sm:text-5xl",children:"Page not found."}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)(s(),{href:"/",passHref:!0,children:(0,l.jsxs)("span",{className:"hyperlink text-base font-medium",children:["Back to home page ",(0,l.jsx)("span",{"aria-hidden":"true",children:" →"})]})})})]})})]})})]});t.default=i},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);