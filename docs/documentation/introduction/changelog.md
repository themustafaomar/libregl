---
title: Changelog
metadata:
  title: Changelog
  description: This section clear the possible ways to install libregl.
---

This section covers all the release notes for LibreGL.

## v0.0.0 (latest)

- feat: missing encoding prop in vector source ([aeeb103](https://github.com/themustafaomar/libregl/commit/aeeb1036f7646d15147254705f07f6533379d6dc))
- feat: add reactive filter prop for layers ([#17](https://github.com/themustafaomar/libregl/pull/17)) ([bf814d3](https://github.com/themustafaomar/libregl/commit/bf814d381da6ca837acf444567f337f402be4fd5))
- feat: add click event support to Marker component ([#18](https://github.com/themustafaomar/libregl/pull/18)) ([35cf4ec](https://github.com/themustafaomar/libregl/commit/35cf4ec6e44d2a7fdc0cfebb550b96e79bee3b54))
- feat: add locationOccludedOpacity and padding props to popup component ([#21](https://github.com/themustafaomar/libregl/pull/21)) ([284391c](https://github.com/themustafaomar/libregl/commit/284391c26e224619849191f20282fbb71d9bd10c))
- feat: add pseudo prop to FullscreenControl component ([6938616](https://github.com/themustafaomar/libregl/commit/693861654a7eb7d0e4fffbbc12a4562cf2667654))
- feat: add zoomSnap and anisotropicFilterPitch props to Map component ([d9e1de9](https://github.com/themustafaomar/libregl/commit/d9e1de97e0f7ae73f770b67e7d61ad1171519c94))
- feat(playground): enhance circle layer with dynamic filter and paint properties ([6abab66](https://github.com/themustafaomar/libregl/commit/6abab667a84fdca4e0923e03bd8efff3fe26c336))
- feat: reactively change paint properties in useLayer function ([ddbb90d](https://github.com/themustafaomar/libregl/commit/ddbb90dea0374e71b91dad80bd83b25b10c535e3))
- feat: add deprecation notice for 'click' event in Marker component ([37bfaa3](https://github.com/themustafaomar/libregl/commit/37bfaa37a57ec4c44db2a6b19535def7e9801341))

## v0.0.0-beta.6

- feat: update marker props ([#15](https://github.com/themustafaomar/libregl/pull/15)) ([eb41808](https://github.com/themustafaomar/libregl/commit/eb41808408ae73e291c544dab18812819f6bb70d))
- feat: update map's props ([#16](https://github.com/themustafaomar/libregl/pull/16)) ([c259bc0](https://github.com/themustafaomar/libregl/commit/c259bc0a6a97672ea613686245cc62b0a4c086c4))
- fix(ssr): prop type HTMLElement confueses ssr ([c6b6422](https://github.com/themustafaomar/libregl/commit/c6b6422470d06d6f7eb64ffcff1d8548598145b4))

## v0.0.0-beta.3

- fix: terrain control options ([#8](https://github.com/themustafaomar/libregl/pull/8)) ([294d676](https://github.com/themustafaomar/libregl/commit/294d6763dcc8932b76800ba9c6659bd6f193b2eb))
- docs(layers): add layer events section ([#7](https://github.com/themustafaomar/libregl/pull/7)) ([e94ab94](https://github.com/themustafaomar/libregl/commit/e94ab945fd5c6bc4fac8be525553f2e7ca40fc70))
- chore: enhance the playground examples ([#6](https://github.com/themustafaomar/libregl/pull/6)) ([7f0f913](https://github.com/themustafaomar/libregl/commit/7f0f913d642ea895e79838a191f718c0a414bc19))
- feat: support listening to layer events ([#5](https://github.com/themustafaomar/libregl/pull/5)) ([43af2df](https://github.com/themustafaomar/libregl/commit/42e29fc9554790e4132281cb051a68a9e39480cf))
- refactor: organize controls imports and props ([43af2df](https://github.com/themustafaomar/libregl/commit/43af2df08abf8d210c85a71769c2a9d996139b6b))

## v0.0.0-beta.2

This release updates [maplibre-gl](https://github.com/maplibre/maplibre-gl-js/) to v5.0.0 for more information about what's changed please visit the release notes at https://github.com/maplibre/maplibre-gl-js/releases/tag/v5.0.0

- refactor: move WebGL context options to canvasContextAttributes ([80d9f8e](https://github.com/themustafaomar/libregl/pull/3/commits/bd54b727354b5fc778a42b45f09be3cf7fae94b5))
- refactor: leverage unsubscribe method to unsubscribe events ([80d9f8e](https://github.com/themustafaomar/libregl/pull/3/commits/80d9f8e33bbc6f3d9fe3c123f85b7b82afb35f59))
- feat(controls): add globe control ([ea29d81](https://github.com/themustafaomar/libregl/pull/3/commits/ea29d81e62d1fd2b41524c25c436b93bef488138))
- fix: remove the hard coded position at globe control ([10334b3](https://github.com/themustafaomar/libregl/pull/3/commits/10334b3bc87431e91474f382f2b5a3f067ed9cd7))
- feat: add elevation and centerClampedToGround props ([b38d34f](https://github.com/themustafaomar/libregl/pull/3/commits/b38d34f3947717b6e2c8cacae3c0682e5bd071f8))
- chore: update maplibre-gl to v5 ([73e443b](https://github.com/themustafaomar/libregl/pull/3/commits/73e443b1951a2ff658e713fabe676b33c6a2d967))
- chore(playground): add controls example ([090505c](https://github.com/themustafaomar/libregl/pull/3/commits/090505c6fbb2a84c1319a24309078de9cf8568a3))
- build: update pnpm lock ([fbfd56c](https://github.com/themustafaomar/libregl/pull/3/commits/fbfd56c6d306e54236e814c0e7011de752b7d709))