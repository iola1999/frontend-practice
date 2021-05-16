参考 [https://www.bilibili.com/video/BV1fp4y1x752](https://www.bilibili.com/video/BV1fp4y1x752)

各种环境下安装 Tailwind

# Vanilla

也就是纯 HTML、JavaScript、css 的项目。

准备空目录，`npm init` 初始化。

## 依赖和配置项

安装三个依赖项`npm i -D tailwindcss postcss-cli autoprefixer`

然后 `npx tailwind init -p` 初始化两个文件：`tailwind.config.js`、`postcss.config.js`。

在 css 目录下新建`style.css`，在其中写入 Tailwind 的三大核心组件。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

package.json 中新增命令：`"watch": "postcss css/style.css -o dist/style.css --watch"`

执行后可以看到 dist/style.css 里面是完整的 Tailwind css，有 18 万行之多。

tailwindcss 是框架，postcss 是生成 css 的，而 autoprefixer，则是处理兼容性的。

尝试注释掉`postcss.config.js`里的`autoprefixer: {}`,再次生成（其实正在 watch，直接去看即可）。可以看到生成的 css 中少了 -webkit-、-moz- 的兼容样式。

## 顺便尝试一下 live-server

它是一个轻量的 http 服务器，能在文件更新时告知浏览器重新加载。使用 `npm install -g live-server` 安装它。

新增一个 `index.html` 文件并引入 `dist/style.css`。使用 `live-server path-to-dir` 启动服务。

尝试修改 html 节点的样式类，应该能够正常使用 Tailwindcss。VSCode 里 Tailwindcss 代码提示可以用 `Tailwind CSS IntelliSense` 插件。

## 按需生成

TailWind 支持 PurgeCSS，能够在打包结果中移除未真正使用的样式类。

在 `tailwind.config.js` 的 purge 中填写所有会使用 Tailwindcss 样式类的文件，如 './\*/.html'。

新增一个 build 指令，内容 `set NODE_ENV=production&&postcss css/style.css -o dist/style.css`。这是 Windows 下的写法，简单些还可以用 `cross-env NODE_ENV=production command-content`。

然后执行 build，查看输出的样式文件只有不到一千行。

# Vue

## 初始化一个项目

执行 `npm init @vitejs/app vue-demo` 创建一个 vite+vue 的项目。

安装自带依赖以及同样的 `npm i -D tailwindcss postcss-cli autoprefixer`。

然后 `npx tailwind init -p` 初始化两个文件：`tailwind.config.js`、`postcss.config.js`。

purge 需要设置的是 `index.html` 和 src 下的 .vue、.js，参考设置 `purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]`。

src 下新增 `index.css`，同样加载 Tailwind 加载三大部件。`main.js` 中引入它。

启动项目，编写 Tailwind Css，能够正常生效，不过似乎会很慢。

尝试构建，得益于 purge，生成的 css 也比较小。

# React

`npx create-react-app react-demo` 创建项目。

安装 Tailwind Css 依赖时则要注意指定版本：`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`。

由于 React 本身不能覆盖 css 设置，需要安装 `npm install @craco/craco`，修改 `package.json`，修改 start、build、test 的 `react-scripts` 为 `craco`。新增 `craco.config.js`，内容为：

```javascript
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

它相当于此前的 `postcss.config.js`。再用 `npx tailwind init` 初始化 Tailwind Css 的配置。

设置 purge：`["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]`。

编写 `src/index.css`，引入 Tailwind Css 三大组件。

修改 `App.js` 尝试编写 Tailwind Css，启动项目。

以上。