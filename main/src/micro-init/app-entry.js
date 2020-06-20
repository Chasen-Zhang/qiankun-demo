export default [
  {
    id: '1',
    title: '物流',
    module: 'subapp-logistics',
    defaultRegister: true,
    devEntry: '//localhost:8081',
    depEntry: '//localhost:8084/',
    routerBase: '/subapp-logistics'
  },
  {
    id: '2',
    title: '营销',
    module: 'subapp-marketing',
    defaultRegister: false,
    devEntry: '//localhost:8082',
    depEntry: '//localhost:8085/',
    routerBase: '/subapp-marketing'
  }
];
