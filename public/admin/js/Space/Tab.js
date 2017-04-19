Ext.define('Admin.Space.Tab', {

  extend: 'Ext.tab.Panel',
  title: 'Space',
  listeners: {
    tabchange(tabs, tab) {
      var tabIndex = tabs.items.indexOf(tab);
      if(tabIndex == 0 || tabIndex == 1) {
        localStorage.setItem('space-default-item', tabIndex);
      }
    }
  },

  closable: true,
  iconCls: 'fa fa-hdd-o',

  requires: [
    'Admin.Space.Collection',
    'Admin.Space.Info',
  ],

  initComponent() {
    this.title = this.params.space.split('_').map(Ext.util.Format.capitalize).join('');
    this.activeTab = +localStorage.getItem('space-default-item') || 0;
    this.callParent(arguments);
  },

  items:[{
    xtype: 'space-info',
  }, {
    xtype: 'space-collection'
  }]
});
