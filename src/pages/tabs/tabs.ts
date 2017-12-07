import { Component } from '@angular/core';

import { EnviarFotosPage } from '../enviar-fotos/enviar-fotos';
import { MuralPage } from '../mural/mural';
import { HomePage } from '../home/home';
import { UsuariosPage } from '../usuarios/usuarios';
import { Fan } from '../fan/fan';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EnviarFotosPage;
  tab3Root = MuralPage;
  tab4Root = UsuariosPage;
  tab5Root = Fan;
  tab6Root = PerfilPage;

  constructor() {

  }
}
