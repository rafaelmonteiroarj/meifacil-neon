# MEI Fácil - Backend

Este projeto servirá como `avaliação` do Vinicius Monteiro Arjonas

### Health

Determinando o status de integridade do servidor

```bash
HMG - http://localhost:3000
```

## Tecnologia

- [node.js] - registrada para o back-end
- [Express] - estrutura rápida de aplicativos de rede node.js.
- [SQLSERVER] - gerenciador de banco de dados para o ambiente de production.
- [SQLITE] - gerenciador de banco de dados para o ambiente de development.
- [Sequelize] - sequelize é um ORM baseado em promessa para Node.js

## Introdução

Nosso diretório de aplicativos consiste nas seguintes pastas

| Diretório        | Descrição                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| app/config/      | Contém todos os seus ambientes, configuração de banco de dados e configurações de ambiente                   |
| app/controllers/ | Contém todas as nossas definições de terminais.                                                              |
| app/db           | scripts de migrations e seeders de banco de dados. Execute npm run db:up migrar o esquema do banco de dados. |
| app/models/      | Contém ás entidades.                                                                                         |
| app/routes/      | Nossa lista de terminais.                                                                                    |

Primeiro, defina o esquema do banco de dados no arquivo config/database.json.
Use [Sequelize CLI](http://docs.sequelizejs.com/en/v3/docs/migrations/) para inicializar seu banco de dados.

## Intalação do projeto

### Configuração local

Verifique se você possui o [Node.js], [SQLITE] e o [SQLSERVER] instalado. Instale as dependências do projeto e inicie o servidor.

### Requisitos

- [Nodejs 10.0](https://nodejs.org/en/download/) ou superior

### Windows

Recomendamos o uso do _[chocolatey](https://chocolatey.org/install#individual)_ para instalação do nodejs

```bash
choco install nodejs.install -y
```

Para que o node funcione melhor no ambiente windows recomendamos a instalação dos compiladores oriundos do _[Visual Studio](https://www.microsoft.com/en-us/download/details.aspx?id=48159)_ 2015

```bash
npm install --global windows-build-tools --vs2015
```

Obs.: Essa instalação pode demorar um pouco.

### Linux

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
```

### Instalação do projeto:

```bash
git clone https://github-*
cd back-end
yarn
```

Se você estiver no ambiente de desenvolvimento, é recomendável instalar o SQLlite primeiro e criar um arquivo chamado "db.development.sqlite" na raiz do projeto.

### Linux

```bash
sudo apt-get install sqlite3
sudo apt-get install libsqlite3-dev
sudo apt-get install sqlitebrowser
```

### Windows

https://sqlitebrowser.org/dl/

Se você estiver no ambiente de produção, não esqueça de alterar os dados do arquivo .env na raiz do projeto, com os dados do seu banco de dados SQLServer.

## Rodar migrations e seeds

```bash
yarn run db:up
```

## Rodar projeto em desenvolvimento

```bash
yarn run dev
```

## Rodar testes

```bash
yarn run test
```

## Gerar build para produção

```bash
yarn run build
yarn run start
```

### Testar arquivo Dockerfile

```bash
docker build -t mei-facil .
docker run -p 3000:3000 mei-facil
```
