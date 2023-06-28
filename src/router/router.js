export default [
    {
        path: "/",
        name: 'index',
        component: ()=>import('@/pages/index.vue')
        // meta:{show:true}
    },
    {
        path: "/login",
        name: 'Login',
        component: ()=>import('@/pages/login/index.vue')
        // meta:{show:true}
    },
]
