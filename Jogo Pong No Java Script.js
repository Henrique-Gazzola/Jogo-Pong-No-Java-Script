 Jogo Pong No Java Script

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordaBolinha();
  mostraMinhaRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordaBolinha() {
  if (xBolinha + raio> width ||
      xBolinha - raio< 0){
     velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
      yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
  }
}

function mostraMinhaRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
}

function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}

function colisaoMinhaRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
      velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
      yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}
