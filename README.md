rrn-cli
====================
react 和 react-native 项目的前端基础设施的命令行工具。

##  lint

#### 依赖：
eslint:
```bash
npm i -D elsint
```

flow:
```bash
brew install flow
```

stylelint:
```bash
npm install -g stylelint
```


#### 运行：
``` bash
rrn-cli run lint
```

#### 参数：
参数 | 说明
------------- | -------------
--js | eslint 检查 javascript 文件
--fix | 自动 fix 项目中 eslint 可以解决的 error
--flow | flow 检查 javascript 文件
--css | stylelint 检查 css 文件
