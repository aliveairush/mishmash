# Mishmash
It is project for learning purposes. 

## Configure project
### VS Code
Install extension: **dbaeumer.vscode-eslint** (It is ESLINT)

Install extension: **esbenp.prettier-vscode** (It is Prettier)

Change .vscode/settings.json

```json
{
    "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.formatOnSave": true
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.formatOnSave": true
    },
    "[json]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.formatOnSave": true
    },
    "editor.fontSize": 20
  }
```

Чтобы eslint подсказывал например если мы указываем неправильный префиск для компонента нужно установить
`ng add @angular-eslint/schematics` он также автоматом устрановит и другие пакеты.
 
Затем в `.eslintrc` включаем настройки

```json
"overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {}
    }
  ]
```

### Auto import
Configure `tsconfig.json` so vs code helps to Use auto imports.

Add in "compilerOptions" 

```json
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@angular",
      "node_modules/@angular/common/http",
      "node_modules/@angular/material"
    ],
```