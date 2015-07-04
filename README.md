# popular-shots
Esta aplicação é uma consumidora de dados do [Dribbble](https://dribbble.com/) que tem por sua simples função mostrar apenas os 'Shots' mais populares e seus detalhes.

### **Configurando e Rodando a Aplicação** ###

Assumo que você já tenha o [Git](https://git-scm.com) e o [NodeJs](https://nodejs.org/) em sua máquina.

* Pelo Git, clone este repositório: `git clone https://github.com/joelsoncl/popular-shots.git`;
* Posicione-se no console na pasta raiz da aplicação. Provavelmente apenas mais o comando `cd popular-shots` no mesmo console;
* Execute o comando `npm install` no console;
* Execute `npm start` para iniciar a aplicação.
* No navegador, entrar com o endereço `http://localhost:8000/app`

Observações:
A porta padrão está 8000, mas pode ser alterada pelo arquivo `package.json`, na raiz do projeto. Caso altere, não se esqueça de alterar também no arquivo `e2e-tests/protractor.conf.js`.


### **Rodando os Testes** ###

Para rodar os testes unitários, siga os seguintes passos (sempre posicionado no diretório raiz da aplicação):
* 



### **Sobre o Deploy** ###

Não compressei/minifiquei os arquivos próprios da aplicação pela natureza do projeto, pois assim pode haver uma depuração mais transparente, se desejado.