## Aula 03 - Roteamento no React

Estamos criando um SPA, e as nossas páginas terão uma navegação, porém não teremos um refresh na tela quando mudarmos de página, isso será instantâneo, o usuário chama outra rota, muda a página, faz requisição no servidor e página é exibida e a tela nem pisca!

E para fazer esse gerenciamento de rotas no frontend da aplicação vamos utilizar a biblioteca [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start):

```
yarn add react-router-dom
```

E agora podemos criar um arquivo `routes.js` na pasta `src`.

Criamos também uma pasta `pages` que conterá a pasta `Main` com um arquivo chamando  `index.js`. E outra pasta `Repository` com um arquivo chamado `index.js`.

O conteúdo do arquivo vai estar no link do github.

Dentro do routes.js vamos importar o BrowserRouter da lib react-router-dom,
BrowserRouter é responsável por permitir criar uma navegação entre rotas e atualizar a barra de endereços.

** BrowserRouter **: Deve englobar todas as rotas

o ** Switch ** é usado para controlar que apenas uma rota seja chamada por momento.

No ** react-router-dom  ** é possível chamar mais de uma rota pro vez.

** Route ** é a cada rota da aplicação.

** Route ** recebe um caminho (path) e o componente (Component).

OBS: Toda vez eu estiver utilizando uma sintaxe de jsx temos que importar o react.

```
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

```

Até aqui criamos um componente Routes que será importado no `App.js`, ele retorna um BrowserRouter que engloba todas as routas para fazer o gerenciamento das rotas na barra de endereço no navegador, e ele tem um filho Switch que é responsável por executar apenas uma rota por vez e dentro dele tem uma ou mais rotas, que são as Route que recebe um path e o seus respectivo Component.

Agora só importar a routa no App.js:

```
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

Testando a aplicação vamos observer um comportamento não esperado.

Só conseguimos acessar a rota / que redireciona para o componente Main.

Quando tentamos acessar /repository é redirecionado para o componente Main, também!

Isso ocorre porque o react-router-dom não vê se o path é igual ao path da routa, mas ele  verifica o começo, se começa com '/' ele já envia para a primeira rota que tenha o '/'. E como ambas tem o '/' e a primeira rota leva para a Main, então sempre a aplicação será redirecionada para a Main.

Para verificar por igualdade nas rotas, basta usar a propriedade `exact`.

```
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
```

Agora sim as duas páginas estão sendo renderizadas!

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula03-roteamento-no-react](https://github.com/tgmarinho/front-react/tree/aula03-roteamento-no-react)
