if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!c[e]&&(await new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}),!c[e]))throw new Error(`Module ${e} didn’t register its module`);return c[e]},s=async(s,c)=>{const i=await Promise.all(s.map(e));c(1===i.length?i[0]:i)};s.toUrl=e=>`./${e}`;const c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=new Promise(async c=>{let o={};const r={uri:location.origin+s.slice(1)},n=await Promise.all(i.map(s=>"exports"===s?o:"module"===s?r:e(s))),d=a(...n);o.default||(o.default=d),c(o)}))}}define("./sw.out.js",["./workbox-0747ddb5"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mymoney"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"10-expense.html",revision:"55665d2b7079c2a0c3286ab0bdab2be2"},{url:"404.html",revision:"8c9dc739b61f60097279d76d901fd6fd"},{url:"add.html",revision:"465c3dbd7977a36a246ec7385c7d709e"},{url:"android-chrome-192x192.png",revision:"3f067f3c9e17ddb03f366d89cc1945ae"},{url:"android-chrome-512x512.png",revision:"2763aeedac3db232385e9b00c90ac8c1"},{url:"apple-touch-icon.png",revision:"db24ba760ba57333dd65f393fe256f5a"},{url:"browserconfig.xml",revision:"336755259a2581d04ae837fd67c8ad86"},{url:"build.js",revision:"2197cefc7688e6bfec204256b73fc1dd"},{url:"css/bootstrap.min.css",revision:"e59aa29ac4a3d18d092f6ba813ae1997"},{url:"css/semantic.min.css",revision:"94c487583e9ddd5f3e1d1b2b96aca582"},{url:"css/stylesheet.css",revision:"962ce473c1bd6a853bcf668c20f1f7c1"},{url:"css/stylesheet.min.css",revision:"0d6c57b9bcfa939d104bf48ebb9bb984"},{url:"css/themes/default/assets/fonts/brand-icons.eot",revision:"13db00b7a34fee4d819ab7f9838cc428"},{url:"css/themes/default/assets/fonts/brand-icons.svg",revision:"65363c4d55617bbeb57d8ce6dcd46099"},{url:"css/themes/default/assets/fonts/brand-icons.ttf",revision:"c5ebe0b32dc1b5cc449a76c4204d13bb"},{url:"css/themes/default/assets/fonts/brand-icons.woff",revision:"a046592bac8f2fd96e994733faf3858c"},{url:"css/themes/default/assets/fonts/brand-icons.woff2",revision:"e8c322de9658cbeb8a774b6624167c2c"},{url:"css/themes/default/assets/fonts/icons.eot",revision:"8e3c7f5520f5ae906c6cf6d7f3ddcd19"},{url:"css/themes/default/assets/fonts/icons.otf",revision:"0b462f5cc07779cab3bef252c0271f2b"},{url:"css/themes/default/assets/fonts/icons.svg",revision:"448f2aaa315fa9dce7b2cf6ce31caed6"},{url:"css/themes/default/assets/fonts/icons.ttf",revision:"b87b9ba532ace76ae9f6edfe9f72ded2"},{url:"css/themes/default/assets/fonts/icons.woff",revision:"faff92145777a3cbaf8e7367b4807987"},{url:"css/themes/default/assets/fonts/icons.woff2",revision:"0ab54153eeeca0ce03978cc463b257f7"},{url:"css/themes/default/assets/fonts/outline-icons.eot",revision:"701ae6abd4719e9c2ada3535a497b341"},{url:"css/themes/default/assets/fonts/outline-icons.svg",revision:"b551b554a67e86a840bc80cbb8066c30"},{url:"css/themes/default/assets/fonts/outline-icons.ttf",revision:"ad97afd3337e8cda302d10ff5a4026b8"},{url:"css/themes/default/assets/fonts/outline-icons.woff",revision:"ef60a4f6c25ef7f39f2d25a748dbecfe"},{url:"css/themes/default/assets/fonts/outline-icons.woff2",revision:"cd6c777f1945164224dee082abaea03a"},{url:"css/themes/default/assets/images/flags.png",revision:"9c74e172f87984c48ddf5c8108cabe67"},{url:"favicon-16x16.png",revision:"00c31a6e3d55d4706be685b8dfe4a218"},{url:"favicon-32x32.png",revision:"a53e588c86cd2807cd8398d3b3b6cbf5"},{url:"favicon.ico",revision:"31f08b689d4e069f0bb58656b5b77140"},{url:"fontawesome/fontawesome-all.min.js",revision:"ab38412fb64bd6a0c89cbf2b82e91031"},{url:"home.html",revision:"7fb8dc65c4c0143f702a83919be3d859"},{url:"index.html",revision:"0019412d2b8ce55ab836c7742a2ed280"},{url:"js/bootstrap.min.js",revision:"85636d56f74c4c11d1abecae2051c1e4"},{url:"js/fdb-all.min.js",revision:"a7620c795f4ad0ccf6380dde79792e2b"},{url:"js/jquery.min.js",revision:"378087a64e1394fc51f300bb9c11878c"},{url:"js/main.js",revision:"04313fd83f81896cf5f65430f2e13be0"},{url:"js/main.min.js",revision:"78d6ba7b03e69ae0e71e6fb419c594b2"},{url:"js/popper.min.js",revision:"af26339a60a5d543a01a128fd0418f83"},{url:"js/semantic.min.js",revision:"11aebfc02b703002c1b7d851b53004cf"},{url:"mstile-150x150.png",revision:"cbcf95f652d32cd0da33f85cb96caa5e"},{url:"package.json",revision:"26810e41cf37ee10f6800624d01df6da"},{url:"resource/favicon.ico",revision:"d0882743ae4441d60611efa9dc2e17cb"},{url:"resource/ios/icon-20.png",revision:"9c6e43a34a9dde91f244303d596d47a7"},{url:"resource/ios/icon-20@2x-1.png",revision:"24bbdb9965d206f7102dd34e582cf7f4"},{url:"resource/ios/icon-20@2x.png",revision:"24bbdb9965d206f7102dd34e582cf7f4"},{url:"resource/ios/icon-20@3x.png",revision:"ee43f81d049822b9f6696094b0fee7f7"},{url:"resource/ios/icon-29.png",revision:"15421451bdb0a8692faf0fdb0cdd0715"},{url:"resource/ios/icon-29@2x-1.png",revision:"59476dbaa2517fd4ec88e3d3fc349528"},{url:"resource/ios/icon-29@2x.png",revision:"59476dbaa2517fd4ec88e3d3fc349528"},{url:"resource/ios/icon-29@3x.png",revision:"0400c0fd5fd5c5cc8c3192c1b094c8a4"},{url:"resource/ios/icon-40.png",revision:"db7fd9a518541c50f12d8e72d61eec62"},{url:"resource/ios/icon-40@2x-1.png",revision:"b70686d8359421c3dd1871eae8d4b8f7"},{url:"resource/ios/icon-40@2x.png",revision:"b70686d8359421c3dd1871eae8d4b8f7"},{url:"resource/ios/icon-40@3x.png",revision:"e0ab8a81c7263bf6d6633be16d431528"},{url:"resource/ios/icon-60.png",revision:"a59aef6b2074626f8cfa55f11f7c80b6"},{url:"resource/ios/icon-60@2x.png",revision:"ce975d40fbb601b4149d2fe0ad928b6d"},{url:"resource/ios/icon-60@3x.png",revision:"0271efc0ac51f728cf2ad3ab396e3685"},{url:"resource/ios/icon-76.png",revision:"424b505df90fe11ff0aad825b68ea1c8"},{url:"resource/ios/icon-76@2x.png",revision:"a9750aa9d2d217aca0306f115bf5e6cd"},{url:"resource/ios/icon-83.5@2x.png",revision:"455520d9a99e9323590583c1c29b807d"},{url:"safari-pinned-tab.svg",revision:"3ae868991a2b542b3791172f547672a8"},{url:"search.html",revision:"5ddb39ca3f92ec683bd76905012af8e5"},{url:"site.webmanifest",revision:"93c9cc5f7dd11198b8076c0e739d3f61"},{url:"sw.js",revision:"21d65b00b1489a619b958e2d0743cb74"},{url:"zh-TW/10-expense.html",revision:"92ee87f8f57a79fd9d43da75a57cdb9a"},{url:"zh-TW/add.html",revision:"e6810e0c82790a05ad1055f586b2c06c"},{url:"zh-TW/home.html",revision:"6b713e939dba254e6b943d8b896e750d"},{url:"zh-TW/index.html",revision:"3ede59b6ddd18b0245997c80569ef5b5"},{url:"zh-TW/search.html",revision:"f3bae2946a68fbce6ac6e25c69491291"}],{}),e.cleanupOutdatedCaches()}));