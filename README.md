## Aula 04 - Styled Components

Vamos instalar uma biblioteca muito boa para estilizar a aplicação com React.

```
yarn add styled-components
```

Ela muda a forma de escrever o CSS no React e no React Native.

Agora não usaremos as propriedades style e nem className, o próprio componente será estilizado.

No VSCode tem a extensão do styled-components que é ajuda muito a desenvolver pois ele entende a sintax css de dentro do js.

O código é escrito com JS e também usamos a sintaxe CSS.

Legal que o styled-components permite o encadeamento de CSS também. E o estilo não é global, é apenas aplicado para o componente.

Podemos também acessar as propriedades dos componentes no CSS.

Criamos o arquivo `styles.js`  na pasta `Main`.
```
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ error }) => (error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
```
Agora criaremos componentes estilizados.

Vamos aplicar no Main/index.js:

```
import React from 'react';

import { Title } from './styles';

const Main = () => (
  <Title error>
    Main
    <small>menor</small>
  </Title>
);

export default Main;
```

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula04-styled-components](https://github.com/tgmarinho/front-react/tree/aula04-styled-components)
