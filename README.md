# popular-shots

Acesse a [popular-shots](http://joelsonlucena.com) por aqui.

Esta aplicação é uma consumidora de dados do [Dribbble](https://dribbble.com/) que tem por sua simples função mostrar apenas os 'Shots' mais populares e seus detalhes.

### **Configurando e Rodando a Aplicação** ###

Assumo que você já tenha o [Git](https://git-scm.com) e o [NodeJs](https://nodejs.org/) em sua máquina.

* Pelo Git, clone este repositório: `git clone https://github.com/joelsoncl/popular-shots.git`
* Posicione-se no console na pasta raiz da aplicação. Provavelmente apenas mais o comando `cd popular-shots` no mesmo console
* Execute o comando `npm install` no console
* Execute `npm start` para iniciar a aplicação
* No navegador, entrar com o endereço `http://localhost:8000/app`

Observações:
A porta padrão está 8000, mas pode ser alterada pelo arquivo `package.json`, na raiz do projeto. Caso altere, não se esqueça de alterar também no arquivo `e2e-tests/protractor.conf.js`.


### **Rodando os Testes** ###

Para rodar os testes unitários, siga os seguintes passos (sempre posicionado no diretório raiz da aplicação):
* Execute o comando `npm run test-single-run` no terminal (Caso dê um erro acusando a impossibilidade de iniciar o Chrome, no console exibirá a informação para que você configure a variável de ambiente CHROME_BIN. Para o uso de outros navegadores, configurar no arquivo karma.conf.js que encontra-se na raiz da aplicação.)

Para rodar os testes "end to end":
* Inicie o seridor através do comando `npm start` pelo console
* Execute o comando `npm run update-webdriver` apenas na primeira execução para atualizar o WebDriver, que é a base para o Protractor, sendo esse último o responsável por simular as interações de usuário
* Execute `npm run protractor` em outro console (mantenha o servidor iniciado no anterior), para finalmente rodar os testes e2e

Pronto! Está pronto para brincar! =)


# Sobre as Escolhas (Daqui para baixo, apenas importa aos meus avaliadores)

Como eu não conhecia o Dribbble, então a primeira coisa que decidi fazer foi estudar basicamente sua proposta e sua API de exposição de dados. Nesse momento aproveitei e fiz os dois cadastros: pessoal e de uso pela aplicação.

Durante o estudo da API, deparei com algumas regras:
* Todas as requisições são sob o protocolo HTTPS e lidas/escritas através em JSON.
* Poderia usar duas formas de autenticação OAuth: pelo cabeçalho ou por parâmetro (optei trabalhar o parâmetro a princípio e, se coubesse no tempo faria pelo cabeçalho).
* Descobri que a maioria das respostas que têm retorno de mais de 30 itens recebe paginação automática e que devemos usar paramentros como page e per_page para tratar a navegação através dos links que são retornados no header (mas nem todas as operações têm essas regras).
* Há limite de requisições por minuto à API e as informações como o limite restante dentro do tempo especificado e o tempo para reset desse valor, vêm especificadas também nos headers das respostas.
* Vi que através de requisições condicionais, há a possibilidade de trabalhar na performance da aplicação, fazendo cache provisório das informações imutáveis. Há no termo de uso o pedido para que o cache fosse limpado há cada 24 horas (não tive tempo de implementar).

Sobre a decisão sobre o framework frontend, não tive muita dúvida ao escolher o AngularJS, mas esta escolha foi principalmente por segurança, pelo pouco tempo hábil para a entrega da implementação do requisito. Apesar de não ter especialidade profunda nos frameworks de frontend como tenho em Java, preferi me manter na "zona de segurança" e atuar com o que mais conheço dentre as opções. Em uma "zona de conforto", estudaria melhos as opções que atenderiam a todos os critérios funcionais e não funcionais do requisito como: estimativa de quantidade de acessos por minuto, estimativa de quantidade de acessos simultâneos, tolerância em tempo de resposta para o publico alvo, configuração do servidor onde a aplicação seria hospedada, etc.

Há uma plataforma bem legal chamada Yeoman (uso em outro projeto), que otimiza bastante a produção de aplicações RIA com alguns frameworks, inclusive com o Angular, mas devido a simplicidade e atomicidade da solução pedida, optei por usar o próprio Projeto Seed sugerido pelo site do Angular.

Escolhi usar o Twitter Bootstrap para trabalhar a interface com usuário e as questões de responsividade das telas.


Com relação ao ambiente de desenvolvimento, não precisei investir muito tempo por já ter boa parte do que precisava configurado.

### **Sobre o Deploy** ###

Não compressei/minifiquei os arquivos próprios da aplicação pela natureza do projeto, pois assim pode haver uma depuração mais transparente, se desejado.