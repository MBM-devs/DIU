/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.MBM-devs";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/MBM-devs/DIU";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Tom Milnes-Garcia",
				Photo: "TomMilnes.jpg",
				Quote: "La vida es mejor con música.",
				Age: 28,
				Occupation: "Músico y compositor",
				Family: "Es el menor de 3 hermanos, sus padres viven en Orlando. Uno de sus padres es estadounidense y el otro español. ",
				Location: "Florida",
				Character: "Seguro de sí mismo, aventurero, sentimental, ordenado y curioso",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Quiere visitar nuevas zonas de España.", "Le gustaría llegar a ser reconocido por su música."],
				Frustrations: ["Lleva sin viajar a España desde que tenia 12 años.", "Debido a la pandemia, lleva 2 años sin poder tocar en directo."],
				Bio: "Le encanta la musica, el café y es amante del cine. Sabe español desde que era pequeño, ya que es el idioma natal de su padre. Va a todos lados con su guitarra.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Se está alojando en un hostal cercano al Lemon Rock, ha venido a Granada a desconectar y visitar la ciudad.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Ainhoa Montagut Buigues",
				Photo: "Ainhoa.jpg",
				Quote: "",
				Age: 19,
				Occupation: "Estudiante de Medicina en Granada",
				Family: "Tiene un hermano pequeño que vive junto con sus padres en Alicante.",
				Location: "Es de Jávea pero estudia en Granada",
				Character: "Resuelta, ambiciosa, decidida, crítica e incorfomista.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere encontrar un trabajo para los fines de semana para empezar a ahorrar un poco.", "Se quiere sacar el carnet de conducir para hacer roadtrips por España con sus amigas.", "Quiere ser neuróloga.", "Es amante de la musica en directo."],
				Frustrations: ["La carrera le consume gran parte de su tiempo libre.", "Depende del dinero que le mandan sus padres todos los meses."],
				Bio: "Estudia Medicina en Granada pero viene de Alicante. Vive en un piso con sus amigas de toda la vida, que tambien estudian en Granada. Las tres suelen salir a tomar algo los fines de semana. Les encanta descubrir sitios nuevos por la ciudad. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:  "Ha visto una historia en instagram de un compañero de la carrera cenando en el Lemon Rock y quiere ir este fin de semana con sus amigas a cenar allí." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])