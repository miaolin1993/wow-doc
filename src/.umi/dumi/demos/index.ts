// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Foo-demo': {
    component: function DumiDemo() {
  var React;

  var _wowDoc = require("wow-doc");

  var _default;

  return React.createElement(function _default() {
    return /*#__PURE__*/React.createElement(_wowDoc.Foo, {
      title: "Hello dumi!"
    });
  });
},
    previewerProps: {"sources":{"_":{"jsx":"import { Foo } from 'wow-doc';\n\nexport default () => <Foo title=\"Hello dumi!\" />"}},"dependencies":{"wow-doc":{"version":"0.0.1"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
};
