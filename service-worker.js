!function(){"use strict";const e=["client/client.214e15e8.js","client/courses.c5e71ae0.js","client/sites.633205ac.js","client/dictionaries.cdf61762.js","client/podcasts.9e3a3d03.js","client/youtube.e90d898b.js","client/index.9e311db4.js","client/ResourcePage.7c7b0a65.js","client/client.f026c23a.js"].concat(["service-worker-index.html","manifest.json","splash.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1620673760273").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1620673760273"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1620673760273").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
