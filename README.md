## Aula 02 - ESLint, Prettier e EditorConfig

Vamos configurar as ferramentas ESLint, Prettier e EditorConfig para manter uma *style guide* no projeto.

### Editor Config

Primeiro vamos configurar o EditorConfig, usando o VSCode e a extensão do EditorConfig basta clicar com botão direito do mouse e escolher: `generate .editorConfig`, e o VSCode vai criar um arquivo para nós.

E faço uma pequena alteração.

```
root = true

[*]
end_of_line = lf # forçar o padrão do final da linha para padrão unix
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true # mudo para  true
insert_final_newline = true # mudo para true

```

### Eslint

Vamos instalar o eslint como dependência de desenvolvimento:

```
yarn add eslint -D
```

e executar:

```
yarn eslint --init
```

Opções:

```
❯ To check syntax, find problems, and enforce code style

❯ JavaScript modules (import/export)

❯ React

❯ Typscript -> Não

❯ Browser

❯ Use a popular style guide

❯ Airbnb (https://github.com/airbnb/javascript)

❯ JavaScript

❯ Y
```

e as dependências serão instaladas.

O Eslint usa o npm por padrão, então depois de baixar as dependências, eu removo o arquivo `package.json-lock` e rodo o comando `yarn` novamente para atualizar as dependências no `yarn.lock`.

Pronto, agora o código vai acusar alguns erros, e para concluir a configuração vamos instalar o Prettier.

### Prettier

Para instalar o prettier e alguns plugins de configuração, vamos rodar no terminal:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

E agora configuraremos o `.eslintrc`:

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', 'js'] }],
    'import/prefer-default-export': 'off',
  },
};
```

E depois criamos um arquivo `.prettierrc` na raiz do projeto, com a seguinte configuração:

```
{
	"singleQuote":  true,
	"trailingComma":  "es5"
}
```

Isso melhora a integração do prettier com a style guid airbnb que estamos utilizando.

Pronto! Agora o prettier deixa o código mais bonita e o eslint procura por erros na style-guide.

Agora toda vez que entrar em um arquivo e salvar, ele vai verificar se as regras estão de acordo com o style-guide através do eslint e o prettier irá formatar de acordo com as regras do style-guide e eslint.

Podemos automatizar isso fazendo um script no package.json:

```
"lint":  "eslint --fix src --ext .js"
```

e agora rodar o comando:

```
yarn lint
```

Para deixar o código seguindo as normas da style-guide.



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula02-eslint-prettier-editorconfig](https://github.com/tgmarinho/front-react/tree/aula02-eslint-prettier-editorconfig)
