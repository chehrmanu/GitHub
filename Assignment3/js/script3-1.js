
// Assignment 3 - Part 1
//// STEP 1
//var favMovies = ['Star Warsg', 'Titanic', 'The Lion King', 'Jurassic World', 'Avatar']; 	
// console.log(favMovies[1]);
//
//// STEP 2
//var movies = [];
//    movies[0]='Star Wars';
//    movies[1]='Titanic';
//    movies[2]='The Lion King';
//    movies[3]='Jurassic World';
//    movies[4]='Avatar';
//console.log(movies[0]);
////
//// STEP 3
//var movies = ['Star Wars', 'Titanic', 'The Lion King', 'Jurassic World', 'Avatar']; 
//    movies.splice(2,0,'The Minions');
//    console.log(movies.length);
//
////
//// STEP 4
//var movies = [];
//    movies[0]='Star Wars';
//    movies[1]='Titanic';
//    movies[2]='The Lion King';
//    movies[3]='Jurassic World';
//    movies[4]='Avatar';
//    //or movies.shift();
//    delete movies[0];
//    console.log(movies);
//// STEP 5
//var movies = [];
//    movies[0]='Star Wars'; 
//    movies[1]='Titanic';
//    movies[2]='The Lion King';
//    movies[3]='Jurassic World';
//    movies[4]='Minions';
//    movies[5]='Avatar';
//    movies[6]='Star Wars 3';
//    for(i=0; i < 7; i++) {
//    console.log(movies[i]);
//     }

// // STEP 6
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Star Wars 3'];
//    for (var x in movies) {
//        console.log(movies[x]);
//    }
////
//// STEP 7
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//    for (var x in movies.sort()) {
//    console.log(movies[x]);
//    }

//// STEP 8
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//var leastFavMovies = ['Forrest Gump','Deadpool', 'American Sniper'];
//
//console.log('Movies I like:' + "\n"+"\n") 
//for (i=0; i < movies.length; i++) {
//    console.log(movies[i] +"\n" );
//}
//console.log('\n' + '\n' + 'Movies I regret watching:' + '\n' + '\n');
//for  (j=0; j < leastFavMovies.length; j++) {
//    console.log(leastFavMovies[j] +"\n");
//}

// STEP 9
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//var leastFavMovies = ['Forrest Gump','Deadpool', 'American Sniper'];
//    movies = movies.concat(leastFavMovies);
//    movies = (movies.sort());
//    console.log(movies.reverse());
 
// STEP 10
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//var leastFavMovies = ['Forrest Gump','Deadpool', 'American Sniper'];
//    movies = movies.concat(leastFavMovies);
//    movies = (movies.sort());
//    movies = (movies.reverse());
//    console.log(movies.pop());

// STEP 11
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//var leastFavMovies = ['Forrest Gump','Deadpool', 'American Sniper'];
//    movies = movies.concat(leastFavMovies);
//    movies = (movies.sort());
//    movies = (movies.reverse());
//    console.log(movies.shift());

// STEP 12
//var movies = ['Star Wars','Titanic','The Lion King','Jurassic World', 'Minions', 'Avatar', 'Doctor Zhivago'];
//var leastFavMovies = ['Forrest Gump','Deadpool', 'American Sniper'];
//    movies = movies.concat(leastFavMovies);
//    movies = (movies.sort());
//    movies = (movies.reverse());
//var moviesNoLike = movies.indexOf('Deadpool') + '\n' + movies.indexOf('Forrest Gump') + '\n' + movies.indexOf('American Sniper') ;
//var allGoodMovies = movies.splice(3,2,'Furious 7', 'Zootopia') + '\n' + movies.splice(9,1,'Finding Nemo');
//    console.log(movies);

// STEP 13
//var employee1 = [];
//    employee1['employee id'] = '1';
//    employee1['name'] = 'Edward Job';        
//    employee1['title'] = 'Technician';
//    employee1['department'] = 'Software Engineer'; 
//    employee1['currently employed'] = 'yes';
//
//var employee2 = [];
//    employee2['employee id'] = '2';
//    employee2['name'] = 'David Brakly';        
//    employee2['title'] = 'web designer';
//    employee2['department'] = 'Development'; 
//    employee2['currently employed'] = 'yes';
//
//var employees = [employee1,employee2];
//    console.log(employees[1]['name']);
 
//// STEP 14
//var employee1 = [];
//    employee1['employee id'] = '1';
//    employee1['name'] = 'Edward Job';        
//    employee1['title'] = 'Technician';
//    employee1['department'] = 'Software Engineer'; 
//    employee1['currently employed'] = 'yes';
//
//var employee2 = [];
//    employee2['employee id'] = '2';
//    employee2['name'] = 'David Brakly';        
//    employee2['title'] = 'web designer';
//    employee2['department'] = 'Development'; 
//    employee2['currently employed'] = 'yes';
//
//var employees = [employee1,employee2];
//for (var i=0; i<employees.length; i++){
//    console.log(employees[i]["name"]);              
// }


// STEP 15
//var employee1 = [];
//    employee1['employee id'] = '1';
//    employee1['name'] = 'Edward Job';        
//    employee1['title'] = 'Technician';
//    employee1['department'] = 'Software Engineer'; 
//    employee1['currently employed'] = 'yes';
//
//var employee2 = [];
//    employee2['employee id'] = '2';
//    employee2['name'] = 'David Brakly';        
//    employee2['title'] = 'web designer';
//    employee2['department'] = 'Development'; 
//    employee2['currently employed'] = 'yes';
//
//var employee3 = [];
//    employee3['employee id'] = '3';
//    employee3['name'] = 'Ali koosh';        
//    employee3['title'] = 'IT Manager';
//    employee3['department'] = 'IT'; 
//    employee3['currently employed'] = 'no';
//
//var employees = [employee1,employee2,employee3];
//
//console.log('Currently employed with the company: ' +'\n' + '\n');
//for (var i=0; i<employees.length; i++){
//    if(employees[i]['currently employed'] == 'yes') {
//    console.log(employees[i]['name'] + '\n'); 
//        }
//    else if
//    (employees[i]['currently employed'] == 'no') {
//        console.log('\n' + 'Not currently employed with the company: ' +'\n' + '\n');
//        console.log(employees[i]['name'] + '\n');
//    }
// }

//// STEP 16
//var movies = [['Star Wars', 1],['Titanic', 2],['Zootopia', 3],['Avatar', 4],['Rocky Horror Picture Show', 5]];
//
//var i, j;
//for (i in movies) {
//    for (j in movies[i]) {
//var myTitles = movies[i].filter(function(item) {    
//    return typeof item == "string";
//    });
//  console.log(myTitles[0]);      
//    }
//}

// Practice with Functions
// STEP 1
//var function displayMessage()
//
//// STEP 2
//
//
//// STEP 3
//var employees = ['ZAK', 'SALLY', 'JESSICA', 'MARK ', 'FRED'];
//var showEmployee = function(employees);
//console.log('Employees:' + '\n' + '\n')
//for(var i = 0; i <employees.length; i++) {
//    
//}



