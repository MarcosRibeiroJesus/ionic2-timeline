import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   cards: any[] = [
     {
       avatar: 'https://avatars.io/facebook/taoentao',
       nome: 'Sebastião Pedra',
       titulo: 'Feliz dia dos pais!',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/14590326_1148640448548089_3782406141728196681_n.jpg?oh=c993e4bd4502b63033544472df9f6330&oe=5A236233https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/14590326_1148640448548089_3782406141728196681_n.jpg?oh=c993e4bd4502b63033544472df9f6330&oe=5A236233',
       texto: 'Olha meu estilo de omim, eu nasci pra ser Papai, não é mesmo pessoal?'
    },
    {
       avatar: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/20108185_1427932233952241_2487164604192471927_n.jpg?oh=495e00e8ba7c2432ba8ab14d38489b32&oe=5A27D2B8',
       nome: 'Amor Eterno, Mamãe Estrela',
       titulo: 'A tranquilidade no olhar de... ',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/20108185_1427932233952241_2487164604192471927_n.jpg?oh=495e00e8ba7c2432ba8ab14d38489b32&oe=5A27D2B8',
       texto: 'uma esposa que sabe que se casou com um bom Pai! Meu eterno amor, continue cuidando deles por mim!'
    },
    {
       avatar: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/12439068_965723573506445_7375150810856667462_n.jpg?oh=d7d11b107b932f251bf331d05a74ceb4&oe=59EC3F03',
       nome: '1 - Luana Ribeiro de Jesus',
       titulo: 'Filha do coração.',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/12439068_965723573506445_7375150810856667462_n.jpg?oh=d7d11b107b932f251bf331d05a74ceb4&oe=59EC3F03',
       texto: 'Há 35 anos atrás você foi Pai pela primeira vez! Papai saiba que sempre te amarei!'
    },
    {
      avatar: 'https://avatars.io/facebook/marcos.ribeiro.bsb',
      nome: '2 - Marcos Ribeiro',
      titulo: 'Te amo Papai!',
      foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/20106472_1427934197285378_3763007881562077493_n.jpg?oh=fa9d7e4fe8dc134c614558f1e170b5fa&oe=59F0FCE8',
      texto: 'Sobre esse dia eu só tenho a dizer OBRIGADO POR SER MEU PAI! Você é o melhor pai que eu poderia desejar.'
    },
    {
       avatar: 'https://avatars.io/facebook/ana.karolina.7146',
       nome: '3 - Ana Karolyna',
       titulo: 'Meu Herói',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/10543651_557312907707941_6714971511121012278_n.jpg?oh=5fe5d7048e83961013067d1c12815374&oe=5A221EA3',
       texto: 'Paaai, como queria estar ao seu lado hoje, poder te abraçar, te beijar... Mas mesmo com a distância, nunca deixo de pensar e orar pelo senhor um dia sequer. E sou muitooo feliz por ser sua filha! Feliz Dia dos Pais! Te amo muitoooo, muitooooo!'
    },
    {
       avatar: 'https://avatars.io/facebook/100004206978874',
       nome: '4 - Ana Paula',
       titulo: 'Vai dar tudo certo!',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/307111_182162118529265_1879548327_n.jpg?oh=b78bdeae21268285074741667af38e4e&oe=59EC2803',
       texto: 'Paiiiii, parabéns pelo seu dia! Quero que saiba que te amo muito e torço por sua felicidade. Se você for feliz eu também vou ser, sempre que precisar estarei ao seu lado. Te Amo! s2'
    },

    {
       avatar: 'https://avatars.io/facebook/100008651203087',
       nome: '5 - Ana Luísa',
       titulo: 'Acreditar!',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/20476097_1752027585095598_371999390268525633_n.jpg?oh=ca26470342c71ff83d8aecd60a8312eb&oe=5A3542C1',
       texto: 'Por mais difícil que seja, nunca deixe de acreditar em dias melhores.'
    },

    {
       avatar: 'https://avatars.io/facebook/maryaeduarda.lucio',
       nome: '6 - Marya Eduarda',
       titulo: 'Duda, a atleta.',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/10543647_713056158773189_7002403435241332245_n.jpg?oh=ddceec4dd6aa2ea44e921f31f181857e&oe=5A2981C4',
       texto: 'Pai, pra mim você é mais que um pai, você é uma PÃE!!! Te amo!'
    },
    {
       avatar: 'https://avatars.io/facebook/ana.karolina.7146',
       nome: '7 - Grazy',
       titulo: 'Grazy, em busca dos Unicórnios!',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/20708450_1449622048449926_4984688161564198038_n.jpg?oh=3458bf9bd92e43f47750e097e9917806&oe=5A25B88A',
       texto: 'Olha como eu pareço uma personagem de desenho animado vovô! Feliz dia dos Pais!'
    },
    {
       avatar: 'https://avatars.io/facebook/100004206978874',
       nome: '8 - Sophie',
       titulo: 'Sophie, a menina de areia.',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/10649985_965711650174304_5791925774023026979_n.jpg?oh=8ffeb173d881620979c0a4c078ab5be0&oe=5A39602E',
       texto: 'Vovô, o senhor sabe que eu sou marrenta! Sou linda né vovô!?'
    },
    {
       avatar: 'https://avatars.io/facebook/ana.karolina.7146',
       nome: '9 - Eryck',
       titulo: 'Eryck, o Super Bolotinha!',
       foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/19990319_1426108677467930_6815691120517096593_n.jpg?oh=799bd7acc03db2d18e64292a408a6bb3&oe=5A331109',
       texto: 'Mamar nos peitinhos e AVANTEEE! Te amo vovôzinho!'
    },
    {
      avatar: 'https://avatars.io/facebook/marcos.ribeiro.bsb',
      nome: '10 - Peixe Diabócolo',
      titulo: 'O filho do Mako Diabóculo!',
      foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/1618585_835767119835425_7571871315369565558_n.jpg?oh=59595eb2eccdefc7fecbb13c43c7e5bb&oe=59F36356',
      texto: 'Vocês pelo menos deram um enterro digno ao meu alienígenazinho???',
    },
    {
      avatar: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/1458665_705217286223743_8919982735105370344_n.jpg?oh=11be6c7b5481f34ef0ac9557fd4fb6de&oe=59F284F5',
      nome: '11 - Sirigueijos de Cunhaú',
      titulo: 'Os filhos perdidos de seu Tião!',
      foto: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/1458665_705217286223743_8919982735105370344_n.jpg?oh=11be6c7b5481f34ef0ac9557fd4fb6de&oe=59F284F5',
      texto: 'Papai! Papai! Meu Paimm!',
    }
  ];

  videos: any[] = [
    {
       avatar: 'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/13151581_1024022657647595_8118232293893416762_n.jpg?oh=d1f8a1d84dcac4114d4cca75dccec765&oe=5A25F08B',
       nome: '1 - Luana Ribeiro de Jesus',
       titulo: 'Filha do coração.',
       video: 'https://www.youtube.com/embed/jcc7FBlYFWI'
    },

    {
      avatar: 'https://avatars.io/facebook/marcos.ribeiro.bsb',
      nome: '2 - Marcos Ribeiro',
      titulo: 'Vou te honrar sempre meu Pai!',
      video: 'https://www.youtube.com/embed/mdnhqPKjF1c'
    },

    {
      avatar: 'https://avatars.io/facebook/ana.karolina.7146',
      nome: '3 - Ana Karolyna',
      titulo: 'Meu Herói',
      video: 'https://www.youtube.com/embed/JoTzAy5C8eY'
    },

    {
      avatar: 'https://avatars.io/facebook/100004206978874',
      nome: '4 - Ana Paula',
      titulo: 'Vai dar tudo certo!',
      video: 'https://www.youtube.com/embed/VmnqlXCpIYE'
    },

    {
      avatar: 'https://avatars.io/facebook/maryaeduarda.lucio',
      nome: '5 - Marya Eduarda',
      titulo: 'Duda, a moderninha.',
      video: 'https://www.youtube.com/embed/sWhy1VcvvgY'
    },

  ]

  constructor(public navCtrl: NavController) {}

  goToProfile():void {
    this.navCtrl.push('PerfilPage')
  }

}
