# commitlint-config

### Usage

安装

```bash
npm install @tvrcgo/commitlint-config --save
```

package.json 配置

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@tvrcgo/commitlint-config"
    ]
  }
}
```
