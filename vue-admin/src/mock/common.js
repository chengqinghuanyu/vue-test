const Mock = require('mockjs')

let listData = Mock.mock({
  'data|10': [
    {
      id: '@id',
      'type|0-1': 1,
      'code|101-110': 1,
      timeLine: '@datetime("yyyyMMddHH")',
      message: '@cparagraph(1, 3)',
      title: '@ctitle(8, 18)',
      createTime: '@datetime("T")',
      senderName: '@last',
      senderPic () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.senderName.substr(0, 1))
      },
    },
  ],
})

const resourceList = [{"id":52,"parentId":null,"sort":0,"name":"登录","code":"/login","type":3,"usable":"1","remarks":"","children":[]},
  {"id":68,"parentId":null,"sort":0,"name":"仪表盘","code":"/index","type":1,"usable":"1","remarks":"","children":[]},
  {"id":69,"parentId":null,"sort":0,"name":"系统管理","code":"/sys","type":1,"usable":"1","remarks":"","children":[{"id":82,"parentId":69,"sort":0,"name":"资源管理","code":"/sys/resource","type":1,"usable":"1","remarks":"","children":[{"id":99,"parentId":82,"sort":0,"name":"/sys/resource/get","code":"/sys/resource/get","type":3,"usable":"1","remarks":"","children":[]},
    {"id":100,"parentId":82,"sort":0,"name":"/sys/resource/update","code":"/sys/resource/update","type":3,"usable":"1","remarks":"","children":[]},
    {"id":101,"parentId":82,"sort":0,"name":"/sys/resource/delete","code":"/sys/resource/delete","type":3,"usable":"1","remarks":"","children":[]},
    {"id":102,"parentId":82,"sort":0,"name":"/sys/resource/add","code":"/sys/resource/add","type":3,"usable":"1","remarks":"","children":[]},
    {"id":103,"parentId":82,"sort":0,"name":"/sys/resource/page","code":"/sys/resource/page","type":3,"usable":"1","remarks":"","children":[]},
    {"id":104,"parentId":82,"sort":0,"name":"/sys/resource/list","code":"/sys/resource/list","type":3,"usable":"1","remarks":"","children":[]},
    {"id":105,"parentId":82,"sort":0,"name":"/sys/resource/list2","code":"/sys/resource/list2","type":3,"usable":"1","remarks":"","children":[]}]},
    {"id":70,"parentId":69,"sort":1,"name":"菜单管理","code":"/sys/menuList","type":1,"usable":"1","remarks":"","children":[{"id":83,"parentId":70,"sort":0,"name":"/sys/menu/get","code":"/sys/menu/get","type":3,"usable":"1","remarks":"","children":[]},
      {"id":84,"parentId":70,"sort":0,"name":"/sys/menu/update","code":"/sys/menu/update","type":3,"usable":"1","remarks":"","children":[]},
      {"id":85,"parentId":70,"sort":0,"name":"/sys/menu/delete","code":"/sys/menu/delete","type":3,"usable":"1","remarks":"","children":[]},
      {"id":86,"parentId":70,"sort":0,"name":"/sys/menu/add","code":"/sys/menu/add","type":3,"usable":"1","remarks":"","children":[]},
      {"id":87,"parentId":70,"sort":0,"name":"/sys/menu/page","code":"/sys/menu/page","type":3,"usable":"1","remarks":"","children":[]},
      {"id":88,"parentId":70,"sort":0,"name":"/sys/menu/list","code":"/sys/menu/list","type":3,"usable":"1","remarks":"","children":[]},
      {"id":89,"parentId":70,"sort":0,"name":"/sys/menu/list2","code":"/sys/menu/list2","type":3,"usable":"1","remarks":"","children":[]}]},
    {"id":71,"parentId":69,"sort":3,"name":"角色管理","code":"/sys/roleList","type":1,"usable":"1","remarks":"","children":[{"id":90,"parentId":71,"sort":0,"name":"/sys/role/get","code":"/sys/role/get","type":3,"usable":"1","remarks":"","children":[]},
      {"id":91,"parentId":71,"sort":0,"name":"/sys/role/update","code":"/sys/role/update","type":3,"usable":"1","remarks":"","children":[]},
      {"id":92,"parentId":71,"sort":0,"name":"/sys/role/delete","code":"/sys/role/delete","type":3,"usable":"1","remarks":"","children":[]},
      {"id":93,"parentId":71,"sort":0,"name":"/sys/role/add","code":"/sys/role/add","type":3,"usable":"1","remarks":"","children":[]},
      {"id":94,"parentId":71,"sort":0,"name":"/sys/role/page","code":"/sys/role/page","type":3,"usable":"1","remarks":"","children":[]},
      {"id":95,"parentId":71,"sort":0,"name":"/sys/role/list","code":"/sys/role/list","type":3,"usable":"1","remarks":"","children":[]},
      {"id":96,"parentId":71,"sort":0,"name":"/sys/role/list2","code":"/sys/role/list2","type":3,"usable":"1","remarks":"","children":[]},
      {"id":97,"parentId":71,"sort":0,"name":"/sys/role/resources","code":"/sys/role/resources","type":3,"usable":"1","remarks":"","children":[]},
      {"id":98,"parentId":71,"sort":0,"name":"/sys/role/setResources","code":"/sys/role/setResources","type":3,"usable":"1","remarks":"","children":[]}]},
    {"id":72,"parentId":69,"sort":6,"name":"用户管理","code":"/sys/userList","type":1,"usable":"1","remarks":"","children":[{"id":106,"parentId":72,"sort":0,"name":"/sys/user/get","code":"/sys/user/get","type":3,"usable":"1","remarks":"","children":[]},
      {"id":107,"parentId":72,"sort":0,"name":"/sys/user/add","code":"/sys/user/add","type":3,"usable":"1","remarks":"","children":[]},
      {"id":108,"parentId":72,"sort":0,"name":"/sys/user/update","code":"/sys/user/update","type":3,"usable":"1","remarks":"","children":[]},
      {"id":109,"parentId":72,"sort":0,"name":"/sys/user/delete","code":"/sys/user/delete","type":3,"usable":"1","remarks":"","children":[]},
      {"id":110,"parentId":72,"sort":0,"name":"/sys/user/page","code":"/sys/user/page","type":3,"usable":"1","remarks":"","children":[]},
      {"id":111,"parentId":72,"sort":0,"name":"/sys/user/roleIds","code":"/sys/user/roleIds","type":3,"usable":"1","remarks":"","children":[]},
      {"id":112,"parentId":72,"sort":0,"name":"/sys/user/setRoles","code":"/sys/user/setRoles","type":3,"usable":"1","remarks":"","children":[]}]}]}]

const menuList = [
  {"id":1,"parentId":null,"sort":0,"name":"仪表盘","href":"/index","icon":"fa fa-dashboard","children":[],
    "isShow":"1"},
  {"id":31,"parentId":null,"sort":1,"name":"测试1","href":"/test/1","icon":"fa fa-upload","children":
    [
      {"id":92,"parentId":31,"sort":0,"name":"测试1-1","href":"/test/1/1","icon":"fa fa-bank","children":[
        {"id":912,"parentId":92,"sort":0,"name":"测试1-1-1","href":"/test/1/1/1","icon":"fa fa-bank","children":[],"isShow":"1"},
        {"id":913,"parentId":92,"sort":0,"name":"测试1-1-2","href":"/test/1/1/2","icon":"fa fa-area-chart","children":[],"isShow":"1"}
      ],"isShow":"1"},
      {"id":93,"parentId":31,"sort":0,"name":"测试1-2","href":"/test/1/2","icon":"fa fa-area-chart","children":[],"isShow":"1"}
    ]
    ,"isShow":"1"},
  {"id":102,"parentId":null,"sort":3,"name":"测试2","href":"/test/2","icon":"fa fa-download","children":
    [
      {"id":103,"parentId":102,"sort":0,"name":"测试2-1","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"}
    ]
    ,"isShow":"1"},
  {"id":6,"parentId":null,"sort":6,"name":"系统管理","href":"/sys","icon":"fa fa-cog","children":
    [
      {"id":108,"parentId":6,"sort":0,"name":" 资源管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
      {"id":7,"parentId":6,"sort":1,"name":"菜单管理","href":"/sys/menuList","icon":"fa fa-navicon","children":[],"isShow":"1"},
      {"id":8,"parentId":6,"sort":2,"name":"角色管理","href":"/sys/roleList","icon":"fa fa-universal-access","children":[],"isShow":"1"},
      {"id":9,"parentId":6,"sort":3,"name":"用户管理","href":"/sys/userList","icon":"fa fa-user-plus","children":[],"isShow":"1"}
    ]
    ,"isShow":"1"}]

const roleList = [
  {"id":26,"delFlag":0,"parentId":null,"sort":0,"name":"超级管理员","enName":"super_manager","usable":"1","remarks":"","children":[]},
  {"id":27,"delFlag":0,"parentId":null,"sort":1,"name":"客服主管","enName":"server_manager","usable":"1","remarks":"","children":[
    {"id":28,"delFlag":0,"parentId":27,"sort":0,"name":"售后客服","enName":"server1","usable":"1","remarks":"","children":[]},
    {"id":29,"delFlag":0,"parentId":27,"sort":1,"name":"售前客服","enName":"server2","usable":"1","remarks":"","children":[]}
  ]}
]

  let database = listData.data

module.exports = {
  'GET /messageList': function (req, res) {
    res.status(200).json(database)
  },
  'GET /sys/resource/list':function (req, res) {
    res.status(200).json(resourceList)
  },
  'GET /sys/menu/list':function (req, res) {
    res.status(200).json(menuList)
  },
  'GET /sys/role/list':function (req, res) {
    res.status(200).json(roleList)
  },
}
