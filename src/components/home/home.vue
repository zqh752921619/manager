<template>
    <el-container class="container">
        <el-header class="header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="@/assets/logo.png" alt="无法显示图片">
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <h3>电商管理系统</h3>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple">
                        <a class="loginout" @click.prevent="handleSignout()">退出</a>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px" class="aside">
                <el-menu
            :router="true"
            :unique-opened="true">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="users">
                        <i class="el-icon-circle-check"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 2 -->
                 <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>角色列表</span>
                    </el-menu-item>
                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>权限列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 3 -->
                 <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>商品列表</span>
                    </el-menu-item>
                      <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>分类参数</span>
                    </el-menu-item>
                      <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>商品分类</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 4 -->
                 <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>订单列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 5 -->
                 <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据统计</span>
                    </template>
                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>数据报表</span>
                    </el-menu-item>
                </el-submenu>

            </el-menu>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    beforeCreate() {
        const token=localStorage.getItem('token')
        if(!token){
            this.$router.push({ name:'login' })
        }
    },
    methods:{
        handleSignout(){
            localStorage.clear()
            this.$message.success('退出成功')
            this.$router.push({name:'login'})
        }
    }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
}
.bg-purple-light{
    text-align: center;
}
.bg-purple{
    line-height: 60px;
}
.loginout{
    text-decoration: none;
    color: blueviolet;
    cursor: pointer;
}
</style>
