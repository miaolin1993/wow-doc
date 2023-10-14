// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/code/my/wow-doc/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('D:/code/my/wow-doc/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('D:/code/my/wow-doc/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/foo",
        "component": require('D:/code/my/wow-doc/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Foo/index.md",
          "updatedTime": 1697262499270,
          "componentName": "Foo",
          "slugs": [
            {
              "depth": 1,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "hasPreviewer": true,
          "group": {
            "path": "/foo",
            "title": "Foo"
          }
        },
        "title": "Foo - wow-doc"
      },
      {
        "path": "/",
        "component": require('D:/code/my/wow-doc/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1697261842608,
          "hero": {
            "title": "library",
            "description": "A react library developed with dumi",
            "actions": [
              {
                "text": "快速开始",
                "link": "/"
              },
              {
                "text": "World",
                "link": "/"
              }
            ]
          },
          "features": [
            {
              "title": "Hello",
              "emoji": "💎",
              "description": "Put hello description here"
            },
            {
              "title": "World",
              "emoji": "🌈",
              "description": "Put world description here"
            },
            {
              "title": "!",
              "emoji": "🚀",
              "description": "Put ! description here"
            }
          ],
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - wow-doc"
      },
      {
        "path": "/goods/equip",
        "component": require('D:/code/my/wow-doc/docs/goods/equip.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/goods/equip.md",
          "updatedTime": 1697262182899,
          "oroder": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "装备",
              "heading": "装备"
            }
          ],
          "title": "装备",
          "group": {
            "path": "/goods",
            "title": "Goods"
          }
        },
        "title": "装备 - wow-doc"
      },
      {
        "path": "/goods/jewel",
        "component": require('D:/code/my/wow-doc/docs/goods/jewel.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/goods/jewel.md",
          "updatedTime": 1697261618780,
          "oroder": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "珠宝加工",
              "heading": "珠宝加工"
            }
          ],
          "title": "珠宝加工",
          "group": {
            "path": "/goods",
            "title": "Goods"
          }
        },
        "title": "珠宝加工 - wow-doc"
      },
      {
        "path": "/goods/mounts",
        "component": require('D:/code/my/wow-doc/docs/goods/mounts.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/goods/mounts.md",
          "updatedTime": 1697261187925,
          "oroder": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "坐骑",
              "heading": "坐骑"
            }
          ],
          "title": "坐骑",
          "group": {
            "path": "/goods",
            "title": "Goods"
          }
        },
        "title": "坐骑 - wow-doc"
      },
      {
        "path": "/goods/pet",
        "component": require('D:/code/my/wow-doc/docs/goods/pet.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/goods/pet.md",
          "updatedTime": 1697261218956,
          "oroder": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "宠物",
              "heading": "宠物"
            }
          ],
          "title": "宠物",
          "group": {
            "path": "/goods",
            "title": "Goods"
          }
        },
        "title": "宠物 - wow-doc"
      },
      {
        "path": "/goods/toy",
        "component": require('D:/code/my/wow-doc/docs/goods/toy.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/goods/toy.md",
          "updatedTime": 1697261249294,
          "oroder": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "玩具",
              "heading": "玩具"
            }
          ],
          "title": "玩具",
          "group": {
            "path": "/goods",
            "title": "Goods"
          }
        },
        "title": "玩具 - wow-doc"
      },
      {
        "path": "/person/base",
        "component": require('D:/code/my/wow-doc/docs/person/base.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/person/base.md",
          "updatedTime": 1697262045366,
          "oroder": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "基础信息",
              "heading": "基础信息"
            }
          ],
          "title": "基础信息",
          "group": {
            "path": "/person",
            "title": "Person"
          }
        },
        "title": "基础信息 - wow-doc"
      },
      {
        "path": "/goods",
        "meta": {},
        "exact": true,
        "redirect": "/goods/equip"
      },
      {
        "path": "/person",
        "meta": {},
        "exact": true,
        "redirect": "/person/base"
      }
    ],
    "title": "wow-doc",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
