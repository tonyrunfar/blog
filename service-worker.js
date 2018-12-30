/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3f4547e2c173ca0339cff4f8088b9e3d"
  },
  {
    "url": "about/index.html",
    "revision": "3b0896af64a8b35ab5afe76f38ad66a3"
  },
  {
    "url": "assets/css/1.styles.cb421415.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.df3e32a2.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.72d6706d.css",
    "revision": "66e0d44e04b10a4fa22e8bbaafdd66bd"
  },
  {
    "url": "assets/img/blog.c5a9a0ab.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "assets/img/home.6a04dd0a.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cb421415.js",
    "revision": "e65dd1576d56a0d3822658485d3daeb9"
  },
  {
    "url": "assets/js/10.e404034e.js",
    "revision": "11cf673ae54a409b9ee2380441aed1c5"
  },
  {
    "url": "assets/js/11.1378472f.js",
    "revision": "192846fe773a60bd603b211101df2756"
  },
  {
    "url": "assets/js/12.7434b2fa.js",
    "revision": "76598f4513c6a0477642c576c6ddf30f"
  },
  {
    "url": "assets/js/13.ff1739a9.js",
    "revision": "5725862de972ffd2cd3e4e343140dbdb"
  },
  {
    "url": "assets/js/14.0f9d8bd8.js",
    "revision": "fbb03f124f632a82a45c83ab17ddd63f"
  },
  {
    "url": "assets/js/15.91df113f.js",
    "revision": "80e8ae482ba7edcd6271faa3df0f7314"
  },
  {
    "url": "assets/js/16.9d315117.js",
    "revision": "54ac6b03c50858dd34a09156b64d7f13"
  },
  {
    "url": "assets/js/17.0be3247d.js",
    "revision": "55f343f1244c5e5f428060eca1536f41"
  },
  {
    "url": "assets/js/18.f66b5c5a.js",
    "revision": "8af21825e593c27afedd50bfb73269d3"
  },
  {
    "url": "assets/js/19.d0494c6e.js",
    "revision": "9a277ae4330c6492bfc2c44d2d95dacc"
  },
  {
    "url": "assets/js/2.df3e32a2.js",
    "revision": "b734f67f4fb1be49ed73630c6a0fcf10"
  },
  {
    "url": "assets/js/20.2a526a8d.js",
    "revision": "90289e7c71bad8d27fc164bace2973c1"
  },
  {
    "url": "assets/js/21.4535ccdf.js",
    "revision": "a13c742ff9b110676baccd17bbbc2969"
  },
  {
    "url": "assets/js/22.57277c4b.js",
    "revision": "7ec640af80ea18eeaf5ea11f9083430c"
  },
  {
    "url": "assets/js/23.5c68f21b.js",
    "revision": "e07b42be88cbcd48c64f6148890f64bb"
  },
  {
    "url": "assets/js/24.3b30af57.js",
    "revision": "7791cc7b96d9a5b2991cf8bbb1c869d8"
  },
  {
    "url": "assets/js/25.ad57ee56.js",
    "revision": "bebdec0ac203763fdb83c20766c530cb"
  },
  {
    "url": "assets/js/26.3ad03778.js",
    "revision": "8b7676815b81c8e6f89f5dc2aadda3d3"
  },
  {
    "url": "assets/js/3.ee615cef.js",
    "revision": "dc293bb40a27709f171558057d9a841f"
  },
  {
    "url": "assets/js/4.cd60779c.js",
    "revision": "abeab0a6469c7ae8587b2830c49d98a4"
  },
  {
    "url": "assets/js/5.669ca99a.js",
    "revision": "ebd9df3b3fd0f22bbdba55daa4ec2f27"
  },
  {
    "url": "assets/js/6.ce317369.js",
    "revision": "4f42d4e655b0dde288c08c616408778d"
  },
  {
    "url": "assets/js/7.1d6871d9.js",
    "revision": "6a185225a85ec24457915b47311eed01"
  },
  {
    "url": "assets/js/8.26294794.js",
    "revision": "198dc611def8ad98f8c2fd349dc3c287"
  },
  {
    "url": "assets/js/9.6efd6aa2.js",
    "revision": "cf6c31f5292e1cc201199dfd92098ed9"
  },
  {
    "url": "assets/js/app.72d6706d.js",
    "revision": "a673d2ed9e9e58a0d6cc2f44d966e0b7"
  },
  {
    "url": "blog/canvas2Image.html",
    "revision": "fcb27ac614bdd584f74e06315c0faef9"
  },
  {
    "url": "blog/css-problem.html",
    "revision": "09c3ec17a0bee40a02036a1c5e8a09a3"
  },
  {
    "url": "blog/elegant-code.html",
    "revision": "2b222da76bd8286d3591bc26d601301a"
  },
  {
    "url": "blog/ES6-study.html",
    "revision": "279fc18ccf24c1961f09e98cb5d10c3d"
  },
  {
    "url": "blog/eslint-rules-list.html",
    "revision": "dcbcc097d23e216605ce6ccde3527ce2"
  },
  {
    "url": "blog/front-end-progress.html",
    "revision": "d8e9c66610bb910d95fffd45f2dd5bda"
  },
  {
    "url": "blog/github-use-notes.html",
    "revision": "145f0b6ad913126e57d2271bfdd42621"
  },
  {
    "url": "blog/html5-IOS-Android.html",
    "revision": "33e8d5da5db970cbc7734b868d74671c"
  },
  {
    "url": "blog/javaScript-error-type.html",
    "revision": "b3cb8dc0fda0e6049666dce00e67f44e"
  },
  {
    "url": "blog/javaScript-execCommand.html",
    "revision": "f4f14b8aeab25f6d5f4e74237e28545f"
  },
  {
    "url": "blog/javaScript-skill.html",
    "revision": "3fdac1f7ac9ca5c195531480a09169bf"
  },
  {
    "url": "blog/js-diabolic-tricks-and-wicked-craft.html",
    "revision": "fd3be0d734e18ae8ee1509c3ccdc225a"
  },
  {
    "url": "blog/mac-command.html",
    "revision": "058d006224c2edabb99ce42e839ce840"
  },
  {
    "url": "blog/mac-mysql-attention.html",
    "revision": "39c33e7e5f8e05323c4c94c32f77016a"
  },
  {
    "url": "blog/mobile-hack.html",
    "revision": "0feecd91096f37463054f7cc69191171"
  },
  {
    "url": "blog/node-code-standard.html",
    "revision": "a2bb1e0d45800f33d447e8ec7727a473"
  },
  {
    "url": "blog/node-common-methods.html",
    "revision": "28882fadd899abc782a979741e0d2b1d"
  },
  {
    "url": "blog/node-study.html",
    "revision": "aa249a73e728e964b276718517edbc9e"
  },
  {
    "url": "blog/vue-attention.html",
    "revision": "408c17f795a8c67775df3ecd00a9a2be"
  },
  {
    "url": "blog/vue-source-study.html",
    "revision": "eae711a919456ab27f51cdaf6726368a"
  },
  {
    "url": "blog/vuepress-theme-toos.html",
    "revision": "e99b00089059fe497bb3ac397f7292f3"
  },
  {
    "url": "img/blog.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/home.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "199a83159b8f086aa5b53f3ba7e67d82"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
