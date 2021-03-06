export interface IRouter {
  title: string,
  key: string, // key值如果是菜单统一使用小写(使用驼峰需定义方法,将点击菜单的key转换成驼峰形式),如果是路由则大小写无限制,
  path?: string,
  icon?: string,
  child?: IRouter[]
}

const router: IRouter[] = [
  {
    title: '首页',
    icon: 'CrownOutlined',
    path: '/firstPages',
    key: '/firstPages',
  },
  {
    title: '博客',
    icon: 'DatabaseOutlined',
    key: '/blogabout',
    child: [
      {
        title: '可编辑blog',
        key: '/blogedit',
        path: '/blogedit',
        icon: ''
      },
      {
        title: '文章列表',
        key: '/bloglist',
        path: '/bloglist',
        icon: ''
      },
    ]
  },
  {
    title: '业务组件',
    icon: 'RadiusSettingOutlined',
    key: '/businesscomponent',
    child: [
      {
        title: 'scroll滑块',
        icon: '',
        key:'/scrollTab',
        path:'/scrollTab',
      }

    ]
  },
  {
    title: 'Dashboard',
    icon: 'GitlabOutlined',
    key: '/dashboard',
    child: [
      {
        title: '分析页',
        key: '/analysis',
        path: '/analysis',
        icon: ''
      },
      {
        title: '监控',
        key: '/monitory',
        path: '/monitory',
        icon: ''
      },
      {
        title: '工作台',
        key: '/work',
        icon: '',
        child: [
          {
            title: '日志',
            key: '/workLog',
            path: '/workLog',
            icon: '',
          },
        ]
      }
    ]
  },
  {
    title: '表单页',
    icon: 'MenuOutlined',
    key: '/formlist',
    child: [
      {
        title: '可编辑表单',
        icon: '',
        key: '/editorForm',
        path: '/editorForm'
      },
      {
        title: '详情',
        icon: '',
        key: '/detailForm',
        path: '/detailForm'
      },
      {
        title: '可搜索表单',
        icon: '',
        key: '/searchForm',
        path: '/searchForm'
      },
      {
        title: '测试表单',
        icon: '',
        key: '/testForm',
        path: '/testForm'
      },
    ]
  },
  {
    title: '表格页',
    icon: 'TableOutlined',
    key: '/tablelist',
    child: [
      {
        title: '普通表格',
        icon: '',
        key: '/generalTable',
        path: '/generalTable'
      },
      {
        title: '可编辑表格(无接口)',
        icon: '',
        key: '/operationTable',
        path: '/operationTable'
      },
      {
        title: '可编辑表格(调接口)',
        icon: '',
        key: '/requestTable',
        path: '/requestTable'
      },
      {
        title: '可编辑表格',
        icon: '',
        key: '/editTable',
        path: '/editTable'
      }
    ]
  },
  {
    title: '结果页',
    icon: 'DropboxOutlined',
    key: '/resultPages',
    path: '/resultPages'
  },
  {
    title: '异常页',
    icon: 'StopOutlined',
    key: '/unusual',
    path: '/unusual'
  },
  {
    title: '个人页',
    icon: 'UserOutlined',
    key: '/personal',
    path: '/personal'
  },
  {
    title: '测试',
    icon: 'DragOutlined',
    key: '/testpage',
    child: [
      {
        title: '进度条',
        icon: '',
        key: '/progressBar',
        path: '/progressBar'
      },
    ]
  },
]

export default router