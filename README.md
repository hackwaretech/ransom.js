# Ransom.js - Hackware Strike Force

Este é um ransomware simples, para fins didáticos e escrito toalmente em JavaScript
Todo e qualquer uso do material aqui disposto é exclusivamente de sua responsabilidade e risco.

# Requerimentos

- Node.JS 11.12.0
- NPM >= 6

# Instruções

## Instalação

Instale o projeto localmente e em seguida, instale as dependências dele.

```bash
git clone https://github.com/hackwaretech/ransom.js.git
cd ransom.js
npm install
```

## Build

O Build deste projeto está disponível para **Windows**, **MacOS** e **Linux**, em dois modos, `development` e `production`.
Os builds de desenvolvimento serão gerados binários que só encriptarão/desencriptarão arquivos no endereço relativo `./files`  e com as extensões especificadas em `config/dev.js`, ao iniciar o executável, ele tentará se comunicar com um servidor C2 especificado no arquivo `config/dev.js`. 

Já no Build de produção, o funcionamento é muito similar ao de desenvolvimento, entretanto, ele encriptará arquivos especificados em `config/prod.js` e se comunicará com um servidor especificado no mesmo arquivo.

### Comandos de BUILD

Builds de desenvolvimento
```bash
npm run build:dev:linux
npm run build:dev:windows
npm run build:dev:macos
```
Builds de Produção
```bash
npm run build:prod:linux
npm run build:prod:windows
npm run build:prod:macos
```

# Aviso Legal

Não nos responsabilizamos por qualquer mal uso proveniente do código parcial ou em sua totalidade, disposto neste repositório, todo e qualquer uso deste código deve ter como exclusividade, fins acadêmicos no treinamento e aperfeiçoamento de métodos de defesa cibernética e mitigação de ciber ataques.

Não utilize este código sob qualquer justificativa para causar qualquer dano ou prejuízo a terceiros, não execute em ambiente de infraestrutura real, ou qualquer outro ambiente que não seja de sua responsabilidade, sem a prévia autorização do responsa'vel.
