// @ts-nocheck
import { Plugin } from 'D:/code/my/wow-doc/node_modules/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: [
    'modifyClientRenderOpts',
    'patchRoutes',
    'rootContainer',
    'render',
    'onRouteChange',
    '__mfsu',
  ],
});

export { plugin };
