import { $t } from "/@/plugins/i18n";
const Layout = () => import("/@/layout/index.vue");

const routes = [
  {
    path: "/", // 路由地址
    name: "home", // 路由名字（对应不要重复）
    component: Layout, // Layout组件，一般不用动（如需整体空白页面，请去掉）
    redirect: "/welcome", // 路由重定向
    meta: {
      icon: "home-filled", // 菜单图标
      title: $t("menus.hshome"), // 菜单名称
      i18n: true, // 国际化
      showLink: true, // 是否在菜单中显示（可不写，默认true）
      rank: 0 // 菜单升序排序，值越高排的越后
    },
    children: [
      // 子路由配置项
      {
        path: "/welcome", // 子路由地址
        name: "welcome", // 路由名字
        component: () => import("/@/views/welcome.vue"), // 按需加载组件
        meta: {
          title: $t("menus.hshome"),
          i18n: true,
          showLink: true // 是否在菜单中显示（可不写，默认true）
        }
      }
    ]
  },
  {
    path: "/able",
    component: Layout,
    redirect: "/able/watermark",
    meta: {
      icon: "ubuntu-fill",
      title: $t("menus.hsAble"),
      i18n: true,
      rank: 3
    },
    children: [
      {
        path: "/able/watermark",
        name: "reWatermark",
        component: () => import("/@/views/able/watermark.vue"),
        meta: {
          title: $t("menus.hsWatermark"),
          i18n: true
        }
      },
      {
        path: "/able/print",
        name: "rePrint",
        component: () => import("/@/views/able/print.vue"),
        meta: {
          title: $t("menus.hsPrint"),
          i18n: true
        }
      },
      {
        path: "/able/iconSelect",
        name: "reIconSelect",
        component: () => import("/@/views/able/icon-select.vue"),
        meta: {
          title: $t("menus.hsIconSelect"),
          i18n: true
        }
      },
      {
        path: "/able/timeline",
        name: "reTimeline",
        component: () => import("/@/views/able/timeline.vue"),
        meta: {
          title: $t("menus.hsTimeline"),
          i18n: true
        }
      },
      {
        path: "/able/menuTree",
        name: "reMenuTree",
        component: () => import("/@/views/able/menu-tree.vue"),
        meta: {
          title: $t("menus.hsMenuTree"),
          i18n: true
        }
      },
      {
        path: "/able/lineTree",
        name: "reLineTree",
        component: () => import("/@/views/able/line-tree.vue"),
        meta: {
          title: $t("menus.hsLineTree"),
          i18n: true
        }
      },
      {
        path: "/able/antTabs",
        name: "reAntTabs",
        component: () => import("/@/views/able/ant-tabs.vue"),
        meta: {
          title: $t("menus.hsAntTabs"),
          i18n: true
        }
      },
      {
        path: "/able/antAnchor",
        name: "reAntAnchor",
        component: () => import("/@/views/able/ant-anchor.vue"),
        meta: {
          title: $t("menus.hsAntAnchor"),
          i18n: true
        }
      },
      {
        path: "/able/antTreeSelect",
        name: "reAntTreeSelect",
        component: () => import("/@/views/able/ant-treeSelect.vue"),
        meta: {
          title: $t("menus.hsAntTreeSelect"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/list",
    component: Layout,
    redirect: "/list/card",
    meta: {
      icon: "list-check",
      title: $t("menus.list"),
      i18n: true,
      rank: 12
    },
    children: [
      {
        path: "/list/card",
        name: "listCard",
        component: () => import("/@/views/list/card/index.vue"),
        meta: {
          title: $t("menus.listCard"),
          i18n: true,
          showParent: true
        }
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    redirect: "/about/index",
    meta: {
      icon: "question-line",
      title: $t("menus.hsAbout"),
      i18n: true,
      rank: 15
    },
    children: [
      {
        path: "/about/index",
        name: "reAbout",
        component: () => import("/@/views/about/index.vue"),
        meta: {
          title: $t("menus.hsAbout"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/error",
    component: Layout,
    redirect: "/error/403",
    meta: {
      icon: "information-line",
      title: $t("menus.hserror"),
      i18n: true,
      rank: 9
    },
    children: [
      {
        path: "/error/403",
        name: "403",
        component: () => import("/@/views/error/403.vue"),
        meta: {
          title: $t("menus.hsfourZeroOne"),
          i18n: true
        }
      },
      {
        path: "/error/404",
        name: "404",
        component: () => import("/@/views/error/404.vue"),
        meta: {
          title: $t("menus.hsfourZeroFour"),
          i18n: true
        }
      },
      {
        path: "/error/500",
        name: "500",
        component: () => import("/@/views/error/500.vue"),
        meta: {
          title: $t("menus.hsFive"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    meta: {
      icon: "guide",
      title: $t("menus.hsguide"),
      i18n: true,
      rank: 14
    },
    children: [
      {
        path: "/guide/index",
        name: "reGuide",
        component: () => import("/@/views/guide/index.vue"),
        meta: {
          title: $t("menus.hsguide"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/result",
    component: Layout,
    redirect: "/result/success",
    meta: {
      icon: "checkbox-circle-line",
      title: $t("menus.hsResult"),
      i18n: true,
      rank: 8
    },
    children: [
      {
        path: "/result/success",
        name: "reSuccess",
        component: () => import("/@/views/result/success.vue"),
        meta: {
          title: $t("menus.hsSuccess"),
          i18n: true
        }
      },
      {
        path: "/result/fail",
        name: "reFail",
        component: () => import("/@/views/result/fail.vue"),
        meta: {
          title: $t("menus.hsFail"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1/menu1-1",
    meta: {
      title: $t("menus.hsmenus"),
      icon: "histogram",
      i18n: true,
      rank: 6
    },
    children: [
      {
        path: "/nested/menu1",
        meta: {
          title: $t("menus.hsmenu1"),
          i18n: true,
          keepAlive: true
        },
        redirect: "/nested/menu1/menu1-1",
        children: [
          {
            path: "/nested/menu1/menu1-1",
            component: () => import("/@/views/nested/menu1/menu1-1/index.vue"),
            name: "Menu1-1",
            meta: {
              title: $t("menus.hsmenu1-1"),
              i18n: true,
              keepAlive: true
            }
          },
          {
            path: "/nested/menu1/menu1-2",
            redirect: "/nested/menu1/menu1-2/menu1-2-1",
            meta: {
              title: $t("menus.hsmenu1-2"),
              i18n: true,
              keepAlive: true
            },
            children: [
              {
                path: "/nested/menu1/menu1-2/menu1-2-1",
                component: () => import("/@/views/nested/menu1/menu1-2/menu1-2-1/index.vue"),
                name: "Menu1-2-1",
                meta: {
                  title: $t("menus.hsmenu1-2-1"),
                  i18n: true,
                  keepAlive: true
                }
              },
              {
                path: "/nested/menu1/menu1-2/menu1-2-2",
                component: () => import("/@/views/nested/menu1/menu1-2/menu1-2-2/index.vue"),
                name: "Menu1-2-2",
                meta: {
                  title: $t("menus.hsmenu1-2-2"),
                  keepAlive: true,
                  i18n: true,
                  extraIcon: {
                    svg: true,
                    name: "team-iconxinpinrenqiwang"
                  }
                }
              }
            ]
          },
          {
            path: "/nested/menu1/menu1-3",
            component: () => import("/@/views/nested/menu1/menu1-3/index.vue"),
            name: "Menu1-3",
            meta: {
              title: $t("menus.hsmenu1-3"),
              i18n: true,
              keepAlive: true
            }
          }
        ]
      },
      {
        path: "/nested/menu2",
        name: "Menu2",
        component: () => import("/@/views/nested/menu2/index.vue"),
        meta: {
          title: $t("menus.hsmenu2"),
          i18n: true,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/editor",
    component: Layout,
    redirect: "/editor/index",
    meta: {
      icon: "edit",
      title: $t("menus.hseditor"),
      i18n: true,
      rank: 2
    },
    children: [
      {
        path: "/editor/index",
        name: "reEditor",
        component: () => import("/@/views/editor/index.vue"),
        meta: {
          title: $t("menus.hseditor"),
          i18n: true,
          keepAlive: true,
          extraIcon: {
            svg: true,
            name: "team-iconxinpin"
          }
        }
      }
    ]
  },
  {
    path: "/flowChart",
    component: Layout,
    redirect: "/flowChart/index",
    meta: {
      icon: "set-up",
      title: $t("menus.hsflowChart"),
      i18n: true,
      rank: 1
    },
    children: [
      {
        path: "/flowChart/index",
        name: "flowChart",
        component: () => import("/@/views/flow-chart/index.vue"),
        meta: {
          title: $t("menus.hsflowChart"),
          i18n: true
        }
      }
    ]
  },
  {
    path: "/components",
    component: Layout,
    redirect: "/components/video",
    meta: {
      icon: "menu",
      title: $t("menus.hscomponents"),
      i18n: true,
      rank: 4
    },
    children: [
      {
        path: "/components/video",
        name: "video",
        component: () => import("/@/views/components/video/index.vue"),
        meta: {
          title: $t("menus.hsvideo"),
          i18n: true
        }
      },
      {
        path: "/components/map",
        name: "map",
        component: () => import("/@/views/components/map/index.vue"),
        meta: {
          title: $t("menus.hsmap"),
          keepAlive: true,
          i18n: true,
          transition: {
            name: "fade"
          }
        }
      },
      {
        path: "/components/draggable",
        name: "draggable",
        component: () => import("/@/views/components/draggable/index.vue"),
        meta: {
          title: $t("menus.hsdraggable"),
          i18n: true,
          transition: {
            enterTransition: "animate__zoomIn",
            leaveTransition: "animate__zoomOut"
          }
        }
      },

      {
        path: "/components/splitPane",
        name: "splitPane",
        component: () => import("/@/views/components/split-pane/index.vue"),
        meta: {
          title: $t("menus.hssplitPane"),
          i18n: true,
          extraIcon: {
            svg: true,
            name: "team-iconxinpinrenqiwang"
          }
        }
      },
      {
        path: "/components/button",
        name: "button",
        component: () => import("/@/views/components/button/index.vue"),
        meta: {
          title: $t("menus.hsbutton"),
          i18n: true
        }
      },
      {
        path: "/components/cropping",
        name: "cropping",
        component: () => import("/@/views/components/cropping/index.vue"),
        meta: {
          title: $t("menus.hscropping"),
          i18n: true
        }
      },
      {
        path: "/components/countTo",
        name: "countTo",
        component: () => import("/@/views/components/count-to/index.vue"),
        meta: {
          title: $t("menus.hscountTo"),
          i18n: true
        }
      },
      {
        path: "/components/selector",
        name: "selector",
        component: () => import("/@/views/components/selector/index.vue"),
        meta: {
          title: $t("menus.hsselector"),
          i18n: true
        }
      },
      {
        path: "/components/seamlessScroll",
        name: "seamlessScroll",
        component: () => import("/@/views/components/seamless-scroll/index.vue"),
        meta: {
          title: $t("menus.hsseamless"),
          i18n: true
        }
      },
      {
        path: "/components/contextmenu",
        name: "contextmenu",
        component: () => import("/@/views/components/contextmenu/index.vue"),
        meta: {
          title: $t("menus.hscontextmenu"),
          i18n: true
        }
      }
    ]
  }
];

const remainingRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/login.vue"),
    meta: {
      title: $t("menus.hslogin"),
      showLink: false,
      i18n: true,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: $t("menus.hshome"),
      i18n: true,
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("/@/layout/redirect.vue")
      }
    ]
  }
];

export { routes, remainingRouter };
