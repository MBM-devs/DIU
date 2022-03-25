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
                
                goal4: "Como el restaurante le ha llamado la atención y está en el centro de la ciudad decide reservar alojamiento cerca de él.",
                touch4: "Movil",
                feel4: "2",
                con4: "Todos los sitios de la zona son muy caros, pero encuentra uno algo lejos que se adecua al presupuesto.",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Cuando llega al Lemon rock le fascina el ambiente.",
                touch5: "El restaurante",
                feel5: "4",
                con5: "Le cuesta entender el acento de los camareros.",
                ima5: "cartoon-why.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Disfruta de la comida y de la musica en directo",
                touch6: "ordenador",
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
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



