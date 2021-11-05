import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestro',
  templateUrl: './nuestro.component.html',
  styleUrls: ['./nuestro.component.scss']
})
export class NuestroComponent implements OnInit {
  popup= false;
  titulo = '';
  form_lista:any;
  public lista:any =
    {
      'MAPP': ["Alcántara Martínez Marco Antonio", "Almora Santiago María Eugenia", "Alonso Maurer Emilio", "Álvarez Espinoza María Amparo", "Arvizu Torres Eder Ivan", "Arzate Escalera Paola", "Ascencio González Rosa Angélica", "Avalos Sánchez María Del Carmen", "Bañuelos Valenzuela Aarón", "Barros Ruiz Cecilia Treemonisha", "Bezares Castrejón Carlos Enrique", "Cabrera Dorado Laura Elena", "Cabrera López José Manuel", "Cabrera Sánchez Isis Josahandi", "Camacho Hernández Athena Guadalupe", "Campos Morales Jorge", "Casas Meneses María Isabel", "Castañeda Arévalo Dara Josabedh", "Castellanos Martínez Juan Carlos", "Concha Leija Diana Karen", "Constantino Trejo Rafael", "Díaz Martínez Luís Jesús", "Elizarraraz Sandoval Adriana", "Espinosa Cravioto Eduardo", "Espinosa Reyes Rafael", "Flores Sánchez Osbaldo", "Frias Hernández Perla Janine", "García Huitrón Victor Manuel", "García Molina José de Jesús", "Garcia Perez Alejandro", "Gómez Olvera Juan Antonio", "Gomez Pezuela Gutierrez Claudio", "González Maíz Efrén", "González Miranda Guillermo", "Gutiérrez Hernández María del Carmen", "Guzmán Vázquez Dulce Gabriela", "Hernandez Hernandez Rosendo", "Hernández Mejía Raúl", "Hernández Riquelme Mónica Gabriela", "Hernández Vázquez Oscar", "Hoyos Ríos Juan Antonio Javier", "Ibarra Zárate Perla Cecilia", "Isáis Ramos Evelyn Dinorah", "Jaramillo Castorena Tania", "Jiménez Gómez Marcos Anselmo", "Jiménez Vargas Isaac", "Joya Herrera Sugey Guadalupe", "Lara Maya Anabel", "León Delgado Miguel Ángel", "Lezama Rodríguez Martín Gustavo", "López Avendaño Ricardo", "López Flores Netzahualcoyotl", "López Gómez Fernando", "López Gómez Pedro De Jesús", "Manzo Vargas José Ramón", "Martínez Moscoso Priscila Del Carmen", "Martinez Puon Luis Alonso", "Martínez Valbuena Gael Alejandro", "Miguel Ramírez Oscar Filemón", "Millán Gómez Mariana Patricia", "Monje Tovar Ernesto", "Monroy Ramírez Juana Minerva", "Morales Ramirez Odalys Yatzinery", "Morales Roura Beatriz Adriana", "Morquecho Reyes José Manuel", "Nazar Morales Rosita", "Otáñez Torres Teresa", "Páez Peñuelas Ana Karen", "Pérez Flores Jorge Alberto", "Pérez Jiménez Daniel Alejandro", "Pérez López María Concepción", "Retana Ortega Adrián", "Reynoso Contreras Orlando Augusto", "Ríos Reyes Juan José", "Rodriguez Alexander María Cristina", "Rodríguez Carreño Luis Ramiro", "Rodríguez Reyes Vianca", "Roque Ibarra Zehidi Kristell", "Rovelo Alamilla Alondra Magaly", "Saavedra Briseño Luz Elena", "Salazar Flores Omar Ernesto", "Sánchez Juárez Jonathan Atilano", "Sánchez León César Joel", "Sánchez Ramírez Luis Alejandro", "Solano Arriaga Epifanio", "Solorio Zepeda Ana Karina", "Talango Cervantes Omar Alberto", "Tello Tosca Pamela Del Carmen", "Trejo Flores Mariana", "Trigo Magaña Absalom Tonatiuh", "Valdés Neria Omar Armando", "Vargas Carrillo Héctor Miguel", "Xicoténcatl Totolhua Jacob", "Yepez Zapien Adriana"],
      'MEPP':["Aguirre García Juan Carlos", "Balderas Alatorre Emiliano", "Barranco Zamora Daniel Alberto", "Bonilla Pérez Alfredo", "Calderón Córdova Karla Yuridia", "Carrillo Lopez Enrique", "Castilleja Molina Silvana", "Hernández Durán José Juan Carlos", "Hernández Garduño Erick Fernando", "Hernández Varela Jorge Antonio", "Huchin Miss Gilberto Del Jesus", "Jiménez Márquez Ana Luz", "López Almaraz Luz Erika", "López Estrello Arturo Azael", "López Gómez Cuauhtemoc", "Mariano Mucul Eliazar", "Martínez Miranda Jonathan", "Miguel Santillán Reyna", "Muñoz Hernández Zasy Elizabeth", "Platas Martínez Jonathan Rogelio", "Ramírez Fragoso Mitzi", "Ramírez Machuca Fernando", "Ramírez Mejía Mario", "Solano García Sergio", "Torres Barba Carlos Miguel", "Valdez Romo Diego Martin", "Vázquez Aranda Laura", "Velázquez Padilla Alejandra Guadalupe", "Zendejas Cárdenas Martha Alicia"],
      'MFPP':["Aguilar Zavaleta Mardocheo", "Altuzar Díaz Carlos Iván", "Arreola Benítez Ana Reyna", "De La Madrid Franco Gabriel Alfonso", "Galindo Vega Ernesto", "Gonzalez Garcia Mitzi Nayanit", "González Hernández Alfredo", "Herrera Borges José Alan", "López Beltrán Javier Antonio", "López Gómez Christian", "Martínez Aguilar Henrry", "Olivera Aguilar Virginia", "Rodríguez Sánchez Juan José", "Rosano Vera José Luis", "Sánchez Gómez Tania Elizabeth", "Sánchez Gomez Yuliana Yanet", "Sánchez Rodríguez Mario Enrique", "Tadeo Lugo Aarón", "Torres Chávez María De Lourdes", "Velazquez Moran Laura Sheila", "Viveros Gallardo Jennifer"],
      'MSPPP':["Acevedo Salgado Julio César", "Acundo García Ivonne Erendira", "Adalid Castañeda Fernando", "Adame Martínez Carlos Abraham", "Aguilar Guadarrama Carlos Eduardo", "Aguilar Jiménez Rosalio", "Aguilar Poot Hiram del Jesus", "Aguilar Santis José Alfredo", "Aguirre González Julio César", "Alaniz Romero Carlos Alfredo", "Almaguer Vazquez Adrián", "Álvarez Martínez Marydelina Lizbeth", "Anaya Roldán Tania", "Añorve Lazo Bernardo", "Aracena Malbrán Pedro Danilo", "Arjona Gómez Aure Yaneyry", "Barajas Castillo Oscar Javier", "Brito Ojeda Luz Daniela", "Carrillo González Francisco Antonio", "Castelán Cabrera Larry Alexandro", "Castillo Soto Susana", "Catalán Rosas Rómulo", "Ceballos Álvarez Carlos Gerardo", "Chávez Alcaraz Diego Antonio", "Chávez García Luis Alberto", "Chávez Orozco Víctor Hugo", "Chávez Sahagun Irving Javier", "Chimecatl González Menaem", "Contreras Reyes José Roberto", "Córdoba Ruíz Ramón Eduardo", "Corzo Osorio Fernando", "Cota Montaño Leonel Efraín", "Cruz Martínez Yaneli", "De La Cruz González Darvin Didier", "Del Rio Ugalde Ricardo", "Díaz Bautista Shantal", "Díaz Rodríguez Miguel Ángel", "Dueñas Espinoza María De Jesús", "España Pérez Gabriela", "Espinosa Vergara Paloma", "Estrada Magaña Karla", "Flores Martínez Marisol", "García González Alina Dolores", "Gómez López Roberto", "Gonzales Suárez Fernando Felipe", "González Montoya Angélica", "González Salazar Marvin Andrés", "Gonzalez Santoyo Rafael", "González Torres Ramón", "Grijalva Valdez Noé", "Guadarrama Bustamante Isabel", "Guerrero Escobedo Paola Berenice", "Guerrero Ibarra Francisco", "Guerrero Vallejo Dorina", "Gutiérrez Bocanegra Julio Ernesto", "Gutiérrez Navarro Carmen Cecilia", "Guzmán Benítez Valeria", "Guzmán Dorantes Héctor", "Guzmán Espinoza Yulia Valeria", "Hernández Baltazar Jesús", "Hernández Gutiérrez Héctor Eduardo", "Hernández Peña Beatriz Adriana", "Hernández Ramírez Víctor Manuel", "Herrera Ortiz Jovany", "Hinojosa Jiménez Alejandro", "Hodgkin Cuevas José Ángel", "Jalpa Hernández Israel", "Lara Contla César Iván", "Laurel Sandoval Monserrat Del Rocio", "León Gonzaga Angélica Eulalia", "León Manríquez Miguel Ángel", "Lezama Montiel Montiel Jose Gerardo", "López Huerta José Ángel", "López Mendoza Elba Janeth", "López Morales Rodrigo", "López Rodríguez Moisés Gabriel", "López Ruíz Beatriz", "López Velarde Alma Rosa", "Martínez Orihuela Alfonso", "Martínez Siraitare Cuauhtémoc", "Mejía Chávez Lady Elvia", "Méndez Hernández Karla Alejandra", "Mendoza Alegría Angel Alberto", "Mendoza Ortega Elva", "Meza Pedrin Azucena", "Mireles Rosales Alejandro", "Mondragón Pascacio Francisco", "Monroy Salmerón Irving Jesús", "Montesinos Pedro Eduardo", "Montiel López Diego Alberto", "Montiel Vázquez Luis Eduardo", "Montoya Monzón Aldo", "Morales Flores Juan José", "Morales Gómez León Gabriel", "Morales Montes Miguel Ángel", "Morales Romero Porfirio", "Moreno Juárez Luis Donaldo", "Muñoz Cervantes Manuel", "Muñoz Martínez Marcela", "Ocaña García Margarita", "Ojeda Villagómez Andrea", "Olvera Ríos Omar", "Ordoñez Ramírez José Luis", "Pacheco Martínez Claudia Elena", "Palma Huchin José Alfonso", "Palma Sánchez Jorge", "Paz López Jaime", "Penilla Enríquez Moisés Arturo", "Pérez García Erika Elvira", "Pérez Martínez Juan Carlos", "Pérez Ramírez Alfredo", "Pérez Rosas María de la Luz", "Picón Lara Dalia Judith", "Quintero Tamez Rebeca Abigail", "Quiros Pacheco María De Lourdes", "Ramírez Arvizu Alma Leticia", "Recio Martínez Patricia", "Reyes García Daniel", "Reyes Pedrin José Alberto", "Reyes Vázquez Joana", "Robles Lugo Carlos Julio", "Rodríguez Antonio Liliana Rocío", "Rodríguez Ordoñez Jesús Nathaniel", "Rodríguez Sarafanov Arturo Abraham", "Rojas López Iliana Marisol", "Romero Reyes Rogelio Yemilay", "Salazar García Hortencia", "Salmoran León Abraham", "Sánchez Rello Daniel", "Sarabia Pinto Ruth", "Serna Gómez Oscar Javier", "Silva Martínez Diana Itzel", "Sosa Domínguez Saúl", "Soto Valenzuela Luis Alfonso", "Talamantes Geraldo Antonio", "Tapia Guzmán Héctor", "Torres López Sandra", "Tuñon Jauregui José Raymundo", "Valadez Zubieta Zaira Esmeralda", "Valdez Reyes Juan", "Vazquez Hernández Seth Yassir", "Vega Mayen Hugo", "Velazquez García Yessika Aliyeri", "Villarreal Miranda Elizabeth", "Villegas Reyes Jacqueline", "Zárate Zúñiga Joel", "Zazueta Chávez Martín Pablo", "Zitle Torres Iván Elías"],
      'MBP':["Aburto Estrada Melchor", "Alfaro Avila Lizeth Jacquelinne", "Bañuelos Hernández Sandra Viridiana", "Bautista Benítez Isela", "Benítez Ponce Brenda Brillet", "Canto Díaz Martha Patricia", "Castillo Garcia Antonio", "Cuautle Díaz Edgar", "Estrada Gordillo Marco Antonio", "Grajeda López Miguel Francisco", "Larrieta Escamilla Pedro Alexander", "Mayén López Zaira Felisa", "Meneses Martínez Gracia Jackeline", "Rangel Sánchez Javier", "Reyes Domínguez Héctor", "Rodarte Cuevas Jael Alejandra", "Rodríguez Castro Juan Carlos", "Solis Chavez Ruperto", "Soriano Álvarez Eduardo"],
      'DPP':["Carbajal Aguilar Bárbara", "Ibarra Cisneros Carlos Alejandro", "Martínez Morales Javier"],
      'LAE':['Deubner Valenzuela Diana'],
      'LCPAP':['Ortiz Pucheta Germán Alejandro'],
      'LD':['Osuna Espinoza Aarón'],
      'LSP':['Mora Perdomo Araceli']
    }

  constructor() { }

  ngOnInit(): void {
  }
  openpop(categotia:string){
    console.log(this.lista);
    this.form_lista = this.lista[categotia];
    switch (categotia) {
      case 'MAPP':
        this.titulo = 'Maestría en Administración y Políticas Públicas';
        break;
      case 'MEPP':
        this.titulo = 'Maestría en Evaluación de Políticas Públicas'
        break;
      case 'MFPP':
        this.titulo = 'Maestría en Finanzas Públicas'
        break;
      case 'MSPPP':
        this.titulo = 'Maestría en Seguridad Pública y Políticas Públicas'
        break;
      case 'MBP':
        this.titulo = 'Maestría en Administración de Negocios'
        break;
      case 'LSP':
        this.titulo = 'Licenciatura en Seguridad Pública'
        break;
      case 'LD':
        this.titulo = 'Licenciatura en Derecho'
        break;
      case 'LCPAP':
        this.titulo = 'Licenciatura en Ciencias Políticas y Administracón Pública'
        break;
      case 'LAE':
        this.titulo = 'Licenciatura en Administración de Empresas'
        break;
      case 'DPP':
        this.titulo = 'Doctorado en Políticas Pública'
        break;
    }
    this.popup=true;
  }
}
