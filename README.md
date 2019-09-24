## Aula 07 - Adicionando repositórios

Quando o usuário digitar o nome de usuário valido, vamos buscar o repostório e salvar no estado.

Instalamos a lib axios para fazer requisição a API externa.

```
yarn add axios
```
E agora podemos configurar um baseURL para fazer requisições passando apenas a rota e os paramêtros de consulta da API.

Crio a pasta `services` dentro da `src` e o arquivo `api.js` dentro da nova pasta, com o conteúdo.

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

E no método handleSubmit da Main.js, quando o usuário salvar o formulário, pegamos o valor digitado e buscamos na api do github o repositório informado:

```
...
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);
    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };
 ...
```

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula07-add-repositorios](https://github.com/tgmarinho/front-react/tree/aula07-add-repositorios)
