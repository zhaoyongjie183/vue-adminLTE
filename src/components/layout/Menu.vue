<template>
    <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../assets/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>张三</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- /.sidebar-menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">Navigation</li>
            <li class="treeview">
          <router-link to="/home">
            <i class="fa fa-cog"></i> <span>系统管理</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </router-link>
          <ul class="treeview-menu">
            <li>
                <router-link to="/home/link" >用户</router-link>
            </li>
            <li>
              <router-link to="/home/link" >角色</router-link>
            </li>
          </ul>
        </li>
      </ul>
  </section>
  </aside>
</template>
<script>
export default {
  name:"webmenu"
}
</script>
