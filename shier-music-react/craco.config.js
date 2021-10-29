/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 15:52:12
 * @LastEditors: went
 * @LastEditTime: 2021-10-29 15:54:24
 */
const path = require("path")
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}