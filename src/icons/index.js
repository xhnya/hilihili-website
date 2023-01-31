// // 获取当前目录所有为.svg的文件
// const req = require.context('./svg', false, /\.svg$/)
//
// // 解析获取的.svg文件的文件名称并返回
// const requireAll = (requireContext) =>{
//     return requireContext.keys().map(requireContext)
// }
// requireAll(req)
const requireAll = requireContext => requireContext.keys().map(requireContext)

const req = require.context('./svg/*', false, /\.svg$/)

console.log("REQ", requireAll(req))

/*

   第一个参数是:'./svg' => 需要检索的目录，

   第二个参数是：false => 是否检索子目录,

   第三个参数是: /\.svg$/ => 匹配文件的正则

  */

requireAll(req);
