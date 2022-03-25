/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Tom Milnes-García",
                Photo: "TomMilnes.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Está hablando con su padre sobre España y recuerda que la ultima vez que fue, se quedó con ganas de visitar Granada.",
                touch1: "Conversacion con su padre",
                feel1: "4",
                con1: "Quiere visitar la ciudad pero no tiene mucho presupuesto.",
                ima1: "cartoon-speaking.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Empieza a buscar sitios donde quedarse",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Le llama la atención un hostel de Granada pero no tiene fechas disponibles en la web de reservas.",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Buscando más información del sitio que ha encontrado y llega a su web.",
                touch3: "Ordenador (web)",
                feel3: "2",
                con3: "Resulta que el sitio ya no es un hostel, ahora sólo es un restaurante con música en directo. ",
                ima3: "cartoon-sad.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Como el restaurante le ha llamado la atención y está en el centro de la ciudad busca reservar alojamiento cerca de él.",
                touch4: "Ordenador",
                feel4: "2",
                con4: "Todos los sitios de la zona son muy caros, pero encuentra uno algo lejos que se adecua al presupuesto.",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                goal5: "Cuando llega al Lemon rock le fascina el ambiente.",
                touch5: "El restaurante",
                feel5: "4",
                con5: "Le cuesta entender un poco el acento de los camareros.",
                ima5: "cartoon-why.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Disfruta de la comida y de la musica en directo",
                touch6: "En la mesa",
                feel6: "5",
                con6: "Le encantaría poder tocar allí un día.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Ainhoa Montagut",
                Photo: "Ainhoa.jpg",
                
				/*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere buscar un bar/restaurante con buen ambiente para salir ir sus amigas el fin de semana",
                touch1: "Movil",
                feel1: "4",
                con1: "Quiere encontrar un sitio cerca en el centro de la ciudad que no hayan visitado aun.",
                ima1: "cartoon-phone-sitting.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en internet restaurantes y bares para reservar ese mismo fin de semana.",
                touch2: "Movil (Google maps)",
                feel2: "2",
                con2: "Han ido ya a todos los que encuentra de primeras.",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "En instagram ve una historia de un compañero de clase en un sitio que le llama la atención. Entra en la web para echarle un vistazo.",
                touch3: "Movil (Instagram)",
                feel3: "4",
                con3: "Hace Click en la pestaña de Restaurante, quiere ver que ofrecen las diferentes salas pero no es capaz de encontrar esa información.",
                ima3: "cartoon-phone-street.png",

                /*** PASO #4: OBSERVA ***/    
                goal4: "Comienza a mirar las fotos de las diferentes salas para decidirse. Elige finalmente el Salón Indie.",
                touch4: "Móvil (web Lemon Rock)",
                feel4: "3",
                con4: "Ha decidido un poco a ciegas, ya que no sabe cuál es la diferencia entre los distintos salones.",
                ima4: "cartoon-why.png",
                
                /*** PASO #5: ANALIZA ***/       
                goal5: "Se va al apartado de reservas, quiere reservar para 3 personas el sábado por la noche.",
                touch5: "Móvil (web Lemon Rock)",
                feel5: "2",
                con5: "No puede seleccionar la sala sólo el tipo de mesa.",
                ima5: "cartoon-reading.png",               
                
                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Reserva para 3 una mesa en sala, deja un comentario en la reserva con la sala a la que quieren ir.",
                touch6: "Móvil (web Lemon Rock)",
                feel6: "3",
                con6: "No sabe si leerán su comentario y le darán mesa esa sala.",
                ima6: "cartoon-deciding2.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



