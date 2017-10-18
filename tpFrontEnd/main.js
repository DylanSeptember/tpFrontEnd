			var name;
			var date;
			var email;
			var password;
			var rep;



			var request = new XMLHttpRequest();

			/*
			var form = new FormData(document.getElementById("login"));

			var btn = form.get("submit");

			btn.addEventListener("click", function(){
				request.open('GET', 'http://localhost:8080/secrest/readViewer/ftuy');
				request.onload = function(){
					
					var viewer = JSON.parse(request.responseText);
					
				};
				request.send();
			});*/console.log("outside");

			function loginFunc(email, password)
			{
				
				request.open('GET', 'http://localhost:8080/secrest/viewerLogin/' + email + "/" + password);
							request.onload = function(){
								
								var viewer = JSON.parse(request.responseText);
								

								if (typeof(Storage) !== "undefined") {
							    // Store
								    localStorage.userName = viewer.name;
								    localStorage.email = viewer.email;
							    }
								
								/*if(viewer != null)
								{
									window.location.href = "http://new.website.com/that/you/want_to_go_to.html";
								}
								else
								{
									document.getElementById("error").innerHTML = "incorrect email password combination";	
								}*/
//document.getElementById("error").innerHTML = "incorrect email password combination";
							};
	try{
				request.send();
				}
				catch(ex){
					document.getElementById("error").innerHTML = "incorrect email password combination";
				}						
    

							

							
			}

			function registerViewerFunc(name, email, password)
			{
				request.open('GET', 'http://localhost:8080/secrest/addViewer/'+name+'/'+password+'/' +email+ '/500' );
							request.onload = function(){
								
								var viewer = JSON.parse(request.responseText);
								console.log(viewer);
							};
							request.send();

							console.log();
			}

			function registerMixerFunc(email)
			{
				request.open('GET', 'http://localhost:8080/secrest/addMixer/' +email );
							request.onload = function(){
								
								var viewer = JSON.parse(request.responseText);
								console.log(viewer);
							};
							request.send();

							console.log();
			}
			

			function viewRecipe(id)
			{
				request.open('GET', 'http://localhost:8080/secrest/readRecipe/' +id );
							request.onload = function(){
								//return JSON.parse(request.responseText);
								var recipe = JSON.parse(request.responseText);
								//console.log(viewer);
								if (typeof(Storage) !== "undefined") {
							    // Store
								    localStorage.name = recipe.name;
								    localStorage.description = recipe.description;
							    }
								//return recipe;
								renderRecipeHtml(recipe)
							};
							request.send();


							console.log();
			}
			
			function readAllRecipes()
			{
				request.open('GET', 'http://localhost:8080/secrest/readAllRecipes/');
							request.onload = function(){
								
								var resipes = JSON.parse(request.responseText);
								console.log(resipes);
							};
							request.send();

							console.log();
			}

			function getMixer(email)
			{
				request.open('GET', 'http://localhost:8080/secrest/readMixer/' + email );
							request.onload = function(){
								
								var viewer = JSON.parse(request.responseText);
								console.log(viewer);
							};
							request.send();

							console.log();
			}

			function home()
			{//console.log(localStorage.description);
				var userName = "Username: " + localStorage.userName;
				var email = localStorage.email;
				document.getElementById("userName").innerHTML += userName;	
				//document.getElementById("recipeName").innerHTML = name;		
				//document.getElementById("description").innerHTML = description;		
				//document.getElementById("date").innerHTML = date;	
				viewRecipe(1);
				readAllRecipes();
				
				//renderRecipeHtml(viewRecipe(1));		
			}



			function renderRecipeHtml(data)
			{
				var html = "";
				console.log(data);
				//console.log(data);
				//for(i = 0; i< data,length; i++)
				//{
					html += "<p> Name: " + data.name + "</p>";
					html += "<p> Description: " + data.description+ "</p>";
				//}
				document.getElementById("recipe").innerHTML = html;
			}
			/*request.open('GET', 'http://localhost:8080/secrest/readViewer/ftuy');
			request.onload = function(){
				
				var viewer = JSON.parse(request.responseText);
				
			};
			request.send();*/

			//request.onload;
			//document.getElementById("demo").innerHTML = "cake";
			
			//document.getElementById("demo").innerHTML = "name";