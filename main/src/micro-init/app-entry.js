export default [
  {
    id: '1',
    title: '物流',
    module: 'subapp-logistics',
    defaultRegister: true,
    devEntry: '//localhost:8081',
    depEntry: 'http://localhost:8086',
    routerBase: '/subapp-logistics'
  },
  {
    id: '2',
    title: '营销',
    module: 'subapp-marketing',
    defaultRegister: false,
    devEntry: '//localhost:8082',
    depEntry: 'http://localhost:8087',
    routerBase: '/subapp-marketing'
  }
];
