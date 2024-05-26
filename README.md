# InnovateTech - Guia de Execução

Bem-vindo ao projeto InnovateTech! Este guia irá levá-lo através dos passos necessários para configurar e iniciar o aplicativo em React Native.

InnovateTech é um sistema desenvolvido para receber e gerenciar dados de alunos. O aplicativo permite filtrar, procurar e exibir detalhadamente as informações dos alunos.

## Funcionalidades

- Tela de carregamento com a logo da InnovateTech
- Listagem de alunos com paginação, carregando 20 alunos por vez
- Barra de pesquisa para filtrar alunos pelo primeiro ou segundo nome
- Modal detalhado com informações completas do aluno
- Diferenciais:
  - Filtro por gênero
  - Cache interno para armazenar a primeira página de resultados
 
## Telas do projeto

<div align="center" style="display: flex; justify-content: space-between;">
  <img src="https://i.postimg.cc/2SLHcP3v/Whats-App-Image-2024-05-26-at-15-08-30-d2f38e45.jpg" alt="Tela de Carregamento" style="width: 30%;"/>
  <img src="https://i.postimg.cc/JnY4hD89/Whats-App-Image-2024-05-26-at-15-08-31-815efeaa.jpg" alt="Tela Principal" style="width: 30%;"/>
  <img src="https://i.postimg.cc/43T18yDk/Whats-App-Image-2024-05-26-at-15-08-31-ab9ba0ca.jpg" alt="Modal de Detalhes" style="width: 30%;"/>
</div>

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Passo a Passo para Execução do Projeto

### 1. Clone o repositório

Para clonar o repositório usando HTTPS, execute o seguinte comando no terminal:

```bash
git clone https://github.com/matheuspsb/InnovateTech.git
```

Se você preferir usar SSH, execute este comando:

```bash
git clone git@github.com:matheuspsb/InnovateTech.git
```

### 2. Instalar Dependências

Primeiro, clone o repositório do projeto em sua máquina local. No terminal, navegue até o diretório do projeto e execute o comando abaixo para instalar todas as dependências necessárias:

```bash
yarn install
```

### 3. Configurar a API

Em seguida, você precisa configurar a URL da API. Crie um arquivo .env na raiz do projeto e adicione a URL da API conforme mostrado no arquivo env.example.

- Abra o arquivo env.example para ver o formato esperado:

```bash
EXPO_PUBLIC_API_URL='https://your-public-url/api/'
```
- Crie um novo arquivo .env na raiz do projeto e adicione a linha com a URL da API

### 4. Iniciar o Projeto

Com todas as dependências instaladas e a configuração da API feita, agora você pode iniciar o projeto com o Expo. Execute o comando abaixo no terminal:

```bash
npx expo start
```

## Comentários sobre o Projeto

- ### Escolha do Expo:
  Optei por utilizar o Expo para este projeto devido à sua simplicidade de configuração e facilidade de integração com endpoints de API. Como o projeto é de escopo menor e não requer muitas configurações avançadas, o Expo se mostrou uma escolha prática.

- ### Utilização do TypeScript:
  Decidi utilizar TypeScript neste projeto para aproveitar os benefícios de um sistema de tipos estáticos, proporcionando maior segurança e facilidade na detecção de erros durante o desenvolvimento.

- ### Simplicidade na utilização de Hooks e Bibliotecas Externas:
  Optei por manter o código simples e fácil de entender, evitando a adição de muitos hooks e bibliotecas externas. Apenas utilizei o useState e o useEffect do React, juntamente com o Axios para requisições HTTP, mantendo assim o código limpo e eficiente.
