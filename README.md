#  QA API Tests Portfolio

Projeto de automação de testes focado na validação de APIs REST, utilizando Cypress e Postman para garantir qualidade, confiabilidade e consistência dos serviços.

---

##  Objetivo

Simular um cenário real de testes em APIs, cobrindo validações funcionais, testes automatizados e documentação de QA, com foco em garantir a qualidade de endpoints de usuários e posts.

---

##  Escopo dos Testes

- Validação de endpoints de **Users** e **Posts**
- Testes de API com diferentes métodos HTTP (GET, POST)
- Validação de status codes
- Verificação de estrutura e dados das respostas
- Execução de testes positivos e negativos

---

##  Tipos de Teste Aplicados

- Testes Funcionais  
- Testes de API  
- Testes de Regressão  
- Testes Exploratórios  
- Testes Negativos  

---

##  Tecnologias Utilizadas

- Cypress (Automação de testes)
- Postman (Testes manuais e collections)
- JavaScript
- Node.js

---

##  Estrutura do Projeto
```bash
qa-api-tests-portfolio/
│
├── cypress/
│ └── e2e/
│ ├── users.cy.js
│ └── posts.cy.js
│
├── collections/
│ └── postman_collection.json
│
├── docs/
│ ├── test-plan.md
│ ├── test-cases.md
│ └── bug-report.md
│
├── package.json
└── README.md
```
---

##  Como Executar o Projeto
```bash
1. Clone o repositório:
git clone https://github.com/netoMiguel1/qa-api-tests-portfolio.git

2. Acesse a pasta:
cd qa-api-tests-portfolio

3. Instale as dependências:
npm install

4. Execute o Cypress:
npx cypress open
