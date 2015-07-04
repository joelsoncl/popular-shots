# popular-shots

Acesse a [popular-shots](http://joelsonlucena.com) por [aqui](http://joelsonlucena.com).

Esta aplicação é uma consumidora de dados do [Dribbble](https://dribbble.com/) e tem por sua simples função mostrar os 'Shots' mais populares do site e seus detalhes.

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

Assumo, a princípio, que você tem o navegador [Chrome](http://www.google.com/chrome/) instalado em sua máquina. Para o uso de outros navegadores, configurar essa informação no arquivo `karma.conf.js` que encontra-se na raiz da aplicação.

Para rodar os testes unitários, siga os seguintes passos (sempre posicionado no diretório raiz da aplicação):
* Execute o comando `npm run test-single-run` no terminal (Caso dê um erro acusando a impossibilidade de iniciar o Chrome, no console exibirá a informação para que você configure a variável de ambiente `CHROME_BIN`.)

Para rodar os testes "end to end":
* Inicie o seridor através do comando `npm start` pelo console
* Execute o comando `npm run update-webdriver` apenas na primeira execução para atualizar o WebDriver, que é a base para o Protractor, sendo esse último o responsável por simular as interações de usuário
* Execute `npm run protractor` em outro console (mantenha o servidor iniciado no anterior), para finalmente rodar os testes e2e

Pronto! =)


### **Sobre as Escolhas (Daqui para baixo, apenas importa aos meus avaliadores)** ###

Como eu não conhecia o Dribbble, então a primeira coisa que decidi fazer foi estudar basicamente sua proposta e sua API de exposição de dados. Nesse momento aproveitei e fiz os dois cadastros: pessoal e de uso pela aplicação.

Durante o estudo da API, deparei com algumas regras:
* Todas as requisições são sob o protocolo HTTPS e lidas/escritas através em JSON.
* Poderia usar duas formas de autenticação OAuth: pelo cabeçalho ou por parâmetro (optei trabalhar o parâmetro a princípio e, se coubesse no tempo faria pelo cabeçalho).
* Descobri que a maioria das respostas que têm retorno de mais de 30 itens recebe paginação automática e que devemos usar paramentros como `page` e `per_page` para tratar a navegação através dos links que são retornados no header (mas nem todas as operações tem essas regras).
* Há limite de requisições por minuto à API e essas informações (como o limite restante dentro do tempo especificado e o tempo para reset desse valor), vêm especificadas também nos headers das respostas.
* Vi que através de requisições condicionais, há a possibilidade de trabalhar na performance da aplicação, fazendo cache provisório das informações imutáveis. Há no termo de uso, porém, um pedido para que o cache seja limpo a cada 24 horas (não tive tempo de implementar).

Da decisão sobre o framework frontend, não tive muita dúvida ao escolher o [AngularJS](https://angularjs.org/), mas esta escolha foi principalmente por segurança, devido ao pouco tempo hábil para a entrega da implementação do requisito. Apesar de não ter especialidade profunda nos frameworks de frontend como tenho em Java, preferi me manter na "zona de segurança" e atuar com o que mais conheço dentre as opções. Em uma "zona de conforto", estudaria melhor as opções que atenderiam a todos os critérios funcionais e não funcionais do requisito como: estimativa de quantidade de acessos por minuto, estimativa de quantidade de acessos simultâneos, tolerância em tempo de resposta para o publico alvo, configuração do servidor onde a aplicação seria hospedada, etc.

Há uma plataforma bem legal chamada [Yeoman](http://yeoman.io/) (uso em outro projeto), que otimiza bastante a produção de aplicações RIA em alguns frameworks, inclusive com o Angular, mas devido a simplicidade e atomicidade da solução pedida, optei por usar o próprio Projeto Seed sugerido pelo site do Angular.

Escolhi usar o [Twitter Bootstrap](http://getbootstrap.com/) para trabalhar a interface com usuário e as questões de responsividade das telas.

Com relação ao ambiente de desenvolvimento, não precisei investir muito tempo por já ter boa parte do que precisava configurado.

### **Ferramentas e Decisões Técnicas Durante o Desenvolvimento** ###

Não criei branchs no projeto para esta prmeira e única release por não estar configurada uma situação onde houvesse essa necessidade (desenvolvimentos paralelos, diferentes versões, hotfix, etc.)

Procurando o serviço que me retornaria os Shots mais populares e fazendo testes com os retornos dos serviços, descobri que por padrão o serviço principal já retorna os mais populares. Senti falta dessa informação na API. Usei o [SoapUI](http://www.soapui.org/) para criar MOCK clients.

Como IDE, usei o [Sublime Text](http://www.sublimetext.com/). Easy and cool! \o/

Os browsers usados em tempo de desenvolvimento foram:
* Chrome Versão 43.0.2357.124
* Firefox 38.0.5
* Internet Explorer 11.0.9600

Observação: O IE constou problemas com certificados, mas ignorando, funcionou normalmente.

Para debug e inspeção, usei o [Chrome DevTools](https://developer.chrome.com/devtools). Através do DevTools também emulei diversos ambientes mobile diferentes.


### **Não deu tempo...** ###

Ao sabor como de qualquer apaixonado pelo que faz, senti falta de investimento em algumas melhorias. Realmente o tempo ficou apertado e não pude fazer tudo o que queria. Para pontuar algumas coisas que foram deixadas pendentes:
* Terminar de tratar as exceções que podem ser lançadas no consumo do serviço. Hoje apenas calei para não culminar em quebra de funcionamento, mas o ideal é tratar cada tipo de erro que for necessário.
* Terminar os testes. Sabendo que o tempo estava apertado para tudo o que tinha pendente, desinvesti tempo para alcançar a cobertura ideal nos testes, visando conseguir entregar a funcionalidade. Com certeza isso é muito arriscado, mas não tive como deixar de assumir esse risco nesse momento.
* Apesar de não ser especialista em UX, gosto de fazer o melhor possível. Acredito que poderia ter melhorado bastante a usabilidade, identidade visual (que não investi nisso) e a responsividade. Tudo isso está funcional, mas sinto longe do que considero ideal.


### **Integração Contínua** ###

Associei meu repositório do Git ao [Travis CI](https://travis-ci.org/) e ele está realizando o build a cada novo push.

Não vi a necessidade de configurar o deploy a cada fim de rodada da integração contínua, mas se o fizesse, a princípio usaria o [CloudBees](https://www.cloudbees.com/) para isso.


### **Sobre o Deploy** ###

Não compressei/minifiquei os arquivos próprios da aplicação pela natureza do projeto, pois assim pode haver uma depuração mais transparente, se desejado.

Despejei o conteúdo produzido em um WWW através de um cliente FTP e redirecionei o domínio [http://www.joelsonlucena.com](http://www.joelsonlucena.com) para lá.


### **Finalizando** ###

Gostei bastante de participar do desafio. Espero que tenham gostado do resultado e do resumão do que foi este período para mim. Fico na expectativa da resposta!

Um grande abraço e fiquem com Deus! =D