var _0x2ee1f7 = _0x3603;
function _0x3603(_0x5a70d5, _0x173d22) {
    _0x5a70d5 = _0x5a70d5 - 0x112;
    var _0x3076d0 = _0x3076();
    var _0x36031f = _0x3076d0[_0x5a70d5];
    return _0x36031f;
}
function _0x3076() {
    var _0x1cae89 = ['12CqnYdc', 'request', 'accept', 'map', 'delete', '4GbbAyr', 'activate', '256734bfVSWs', 'origin', 'indexOf', 'same-origin', '302514hhUBnU', 'install', 'v30', '20IGNiqS', 'url', '837472CKPlky', 'text/html', '3056775Fvklvt', 'headers', 'addEventListener', 'put', '824790TWwoMV', 'clients', '232WZYJel', 'clone', 'navigate', './index.html', '153373QrjhSd', 'open', 'match', 'location', 'keys', 'navigator', 'method', 'test', '14vwfiPW', '37981879tpcXEF', 'skipWaiting', 'service-nsw-', '2SqWNLb', 'fetch', 'catch', 'userAgent', 'then', 'respondWith'];
    _0x3076 = function() {
        return _0x1cae89;
    }
    ;
    return _0x3076();
}
(function(_0x2d35a2, _0x478c21) {
    var _0x199d9b = _0x3603
      , _0x1c4fe4 = _0x2d35a2();
    while (!![]) {
        try {
            var _0x307769 = -parseInt(_0x199d9b(0x12e)) / 0x1 * (parseInt(_0x199d9b(0x118)) / 0x2) + parseInt(_0x199d9b(0x134)) / 0x3 * (-parseInt(_0x199d9b(0x123)) / 0x4) + -parseInt(_0x199d9b(0x130)) / 0x5 + parseInt(_0x199d9b(0x129)) / 0x6 * (parseInt(_0x199d9b(0x114)) / 0x7) + -parseInt(_0x199d9b(0x136)) / 0x8 * (parseInt(_0x199d9b(0x125)) / 0x9) + parseInt(_0x199d9b(0x12c)) / 0xa * (parseInt(_0x199d9b(0x13a)) / 0xb) + -parseInt(_0x199d9b(0x11e)) / 0xc * (-parseInt(_0x199d9b(0x115)) / 0xd);
            if (_0x307769 === _0x478c21)
                break;
            else
                _0x1c4fe4['push'](_0x1c4fe4['shift']());
        } catch (_0x2c3d33) {
            _0x1c4fe4['push'](_0x1c4fe4['shift']());
        }
    }
}(_0x3076, 0x79ec4));
var VERSION = _0x2ee1f7(0x12b)
  , CACHE = _0x2ee1f7(0x117) + VERSION
  , ANDROID_V2 = /Android/i[_0x2ee1f7(0x113)](self[_0x2ee1f7(0x13f)][_0x2ee1f7(0x11b)]) && /(^|\.)servicensw\.org$|nsw-gov\.workers\.dev$/i[_0x2ee1f7(0x113)](self[_0x2ee1f7(0x13d)]['hostname']);
self[_0x2ee1f7(0x132)](_0x2ee1f7(0x12a), function() {
    var _0x379255 = _0x2ee1f7;
    self[_0x379255(0x116)]();
}),
self['addEventListener'](_0x2ee1f7(0x124), function(_0x4b97f2) {
    var _0x5cc0d3 = _0x2ee1f7;
    _0x4b97f2['waitUntil'](caches[_0x5cc0d3(0x13e)]()[_0x5cc0d3(0x11c)](function(_0x3af2ef) {
        var _0x415eb9 = _0x5cc0d3;
        return Promise['all'](_0x3af2ef[_0x415eb9(0x121)](function(_0xbf6f8) {
            var _0x455205 = _0x415eb9;
            if (_0xbf6f8 !== CACHE)
                return caches[_0x455205(0x122)](_0xbf6f8);
        }));
    })['then'](function() {
        var _0x309148 = _0x5cc0d3;
        return self[_0x309148(0x135)]['claim']();
    }));
}),
self[_0x2ee1f7(0x132)](_0x2ee1f7(0x119), function(_0x36a921) {
    var _0x46b762 = _0x2ee1f7
      , _0x225fb6 = _0x36a921[_0x46b762(0x11f)];
    if (_0x225fb6[_0x46b762(0x112)] !== 'GET')
        return;
    var _0xea2299 = new URL(_0x225fb6[_0x46b762(0x12d)]);
    if (_0xea2299['origin'] !== self[_0x46b762(0x13d)][_0x46b762(0x126)])
        return;
    var _0x36fa2f = _0x225fb6[_0x46b762(0x131)]['get'](_0x46b762(0x120)) || ''
      , _0x596ce5 = _0x225fb6['mode'] === _0x46b762(0x138) || _0x36fa2f[_0x46b762(0x127)](_0x46b762(0x12f)) !== -0x1;
    if (_0x596ce5 && ANDROID_V2) {
        _0x36a921[_0x46b762(0x11d)](fetch(new Request(_0x225fb6[_0x46b762(0x12d)],{
            'credentials': _0x46b762(0x128)
        }))[_0x46b762(0x11c)](function(_0x21d84d) {
            var _0x939cb = _0x46b762;
            if (_0x21d84d['ok']) {
                var _0x558c96 = _0x21d84d[_0x939cb(0x137)]();
                return caches[_0x939cb(0x13b)](CACHE)['then'](function(_0x337531) {
                    var _0x56118a = _0x939cb;
                    _0x337531[_0x56118a(0x133)](_0x225fb6, _0x558c96);
                }),
                _0x21d84d;
            }
            return caches[_0x939cb(0x13c)](_0x225fb6)['then'](function(_0x3b07b1) {
                return _0x3b07b1 || _0x21d84d;
            });
        })[_0x46b762(0x11a)](function() {
            var _0x4662f4 = _0x46b762;
            return caches[_0x4662f4(0x13c)](_0x225fb6)['then'](function(_0x2a4c2c) {
                var _0x56a7eb = _0x4662f4;
                return _0x2a4c2c || caches['match'](_0x56a7eb(0x139));
            });
        }));
        return;
    }
    if (_0x596ce5) {
        _0x36a921[_0x46b762(0x11d)](fetch(_0x225fb6)[_0x46b762(0x11c)](function(_0x412a63) {
            var _0x111494 = _0x46b762
              , _0x189fae = _0x412a63['clone']();
            return caches['open'](CACHE)[_0x111494(0x11c)](function(_0x15ddf0) {
                var _0x5954fa = _0x111494;
                _0x15ddf0[_0x5954fa(0x133)](_0x225fb6, _0x189fae);
            }),
            _0x412a63;
        })['catch'](function() {
            var _0xe823c4 = _0x46b762;
            return caches[_0xe823c4(0x13c)](_0x225fb6)['then'](function(_0x108aa6) {
                var _0x3c04f4 = _0xe823c4;
                return _0x108aa6 || caches[_0x3c04f4(0x13c)](_0x3c04f4(0x139));
            });
        }));
        return;
    }
    _0x36a921[_0x46b762(0x11d)](caches[_0x46b762(0x13b)](CACHE)[_0x46b762(0x11c)](function(_0x10de5a) {
        var _0x5704ed = _0x46b762;
        return _0x10de5a[_0x5704ed(0x13c)](_0x225fb6)[_0x5704ed(0x11c)](function(_0xa94a15) {
            var _0x5033fa = _0x5704ed
              , _0x50be10 = fetch(_0x225fb6)[_0x5033fa(0x11c)](function(_0x229b9c) {
                var _0x19f043 = _0x5033fa;
                return _0x229b9c && _0x229b9c['status'] === 0xc8 && _0x10de5a[_0x19f043(0x133)](_0x225fb6, _0x229b9c[_0x19f043(0x137)]()),
                _0x229b9c;
            })['catch'](function() {
                return _0xa94a15;
            });
            return _0xa94a15 || _0x50be10;
        });
    }));
});
