Graphical symbols for identification of specific securities labeled by the 12-digit code, ISIN.<br>
📦 [Node.js](https://www.npmjs.com/package/@extra-isin/logos),
🌐 [Web](https://www.npmjs.com/package/@extra-isin/logos.web),
📜 [Files](https://unpkg.com/@extra-isin/logos/),
📰 [Docs](https://nodef.github.io/extra-isin/).

This is part of the [extra-isin] project, and includes all available logos
of [securities] in India. Details of securities are obtained from [FYERS]
[symbol master files], and PNG files are fetched from [Groww] CDN.

This package is available in both *Node.js* and *Web* formats. The web format
is exposed as `extra_isin_logos` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/@extra-isin/logos.web/index.js

<br>

```javascript
const isin_logos = require('@extra-isin/logos');


isin_logos.path('INE062A01020');
//→ C:\Documents\logos\data\INE062A01020.jpeg

isin_logos.unpkgUrl('INE062A01020');
//→ https://unpkg.com/@extra-isin/logos/data/INE062A01020.png

isin_logos.jsDelivrUrl('INE062A01020');
//→ https://cdn.jsdelivr.net/npm/@extra-isin/logos/data/INE062A01020.png
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [path] | Get local path of a security's logo. |
| [unpkgUrl] | Get UNPKG URL of a security's logo. |
| [jsDelivrUrl] | Get jsDelivr URL of a security's logo. |

<br>
<br>


## References

- [FYERS Symbol master files][symbol master files]
- [FYERS Securities Pvt Ltd (FYERS)][FYERS]
- [Nextbillion Technology Pvt Ltd (Groww)][Groww]

<br>
<br>

[![](https://img.youtube.com/vi/0uYnj1i1EQw/maxresdefault.jpg)](https://www.youtube.com/watch?v=0uYnj1i1EQw)


[FYERS]: https://fyers.in
[Groww]: https://groww.in
[extra-isin]: https://github.com/nodef/extra-isin
[securities]: https://www.investopedia.com/terms/s/security.asp
[symbol master files]: https://myapi.fyers.in/docs/#tag/Broker-Config/paths/~1Broker%20Config/post
[path]: https://nodef.github.io/@extra-isin/logos/modules.html#path
[unpkgUrl]: https://nodef.github.io/@extra-isin/logos/modules.html#unpkgUrl
[jsDelivrUrl]: https://nodef.github.io/@extra-isin/logos/modules.html#jsDelivrUrl
