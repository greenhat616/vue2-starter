## 特性

+ ⚡️ [Vite 3](https://cn.vitejs.dev) - 构建工具（就是快！）
+ 🖖 [Vue 2](https://v2.cn.vuejs.org) - 渐进式 JavaScript 框架
+ 🚦 [Vue Router](https://v3.router.vuejs.org/zh) - 官方路由管理器
+ 📦 [Vuex](https://v3.vuex.vuejs.org/zh) - 一个专为 Vue.js 应用程序开发的状态管理模式
+ 🎨 [Scss](https://sass-lang.com/) - CSS 预处理器
+ 🔗 [Axios](https://axios-http.com/zh/) - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
+ 🧰 [Husky](https://typicode.github.io/husky/#/) + [Lint-Staged](https://github.com/okonet/lint-staged) - Git Hook 工具
+ 🛡️ [EditorConfig](http://editorconfig.org) + [ESLint](http://eslint.cn) + [Prettier](https://prettier.cn) + [Stylelint](https://stylelint.cn) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation) - 代码规范
+ 🔨 [Commitizen](https://cz-git.qbb.sh/zh) + [Commitlint](https://commitlint.js.org) - 提交规范
+ 🎉 [AutoImport]() + [Components]() - 自动导入
+ 🎈 [Pages] + [Layouts] - 目录路由 + 布局

## 编码风格

+ [ESLint](https://eslint.org/) 配置为 [eslint-config-standard](https://github.com/standard/eslint-config-standard)
+ [Prettier](https://prettier.io) 配置为  [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
+ [Stylelint](https://stylelint.io) 配置为  [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## 开发工具

+ [npm](https://www.npmjs.com) - 包管理器
+ [Visual Stuido Code 扩展](./.vscode/extensions.json)
  + [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Vue 2 VS Code 工具
  + [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 一套用于统一代码格式的解决方案
  + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 可组装的JavaScript和JSX检查工具
  + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化工具
  + [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - CSS 代码规范工具

## 现在可以试试！

> Vite3 Vue2 JavaScript Starter Template 需要 Node 版本 >= 14.18

### GitHub 模板

[使用这个模板创建仓库](https://github.com/greenhat616/vue2-starter/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
# [可选] 如果您使用的是 windows 系统，需要关闭换行符自动转换
git config --global core.autocrlf input

# 克隆
git clone hhttps://github.com/greenhat616/vue2-starter.git

# 打开文件夹
cd vue2-starter

# 安装依赖
pnpm i
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.js` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 移除 `.github` 文件夹中包含资助的信息
- [ ] 整理 README 并删除路由

## 使用

### 开发

> 只需要执行以下命令就可以在 http://localhost:3000 中看到

```bash
## 安装依赖
pnpm install

## 运行
pnpm run dev
```

### 构建

```bash
## 构建
pnpm run build
```

## 开源协议

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022 ElanYoung & a632079
