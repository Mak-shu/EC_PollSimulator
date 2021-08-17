# EC_PollSimulator

The Application Poll Simulator has been created using HTML,CSS and Javascript , where the controller logic has been provided in the main.js file and all the presentational logic files are provided in the View folder.
The Application works without a Database so , as a temporary solution I have used Local Storage which lasts longer than session Data.

Here ,index.html is the file where the main Application starts from and where all the page links are defined.

=>Bussiness Logic: (main.js file)

1)AddCandidate : Here , I am fetching the data provided in the Add Candidate input box and is then pushed into an Array via local Storage , hence keeping track of all the Registered Candidates.

2)Vote : This functionality lets a client vote for a candidate and has 2 functions:
	display_candidates : Fetching the candidate names and using forEach loop to populate the radioButton list.
	add_Votes : Here , the program first checks whether the client that is voting is unique(haven't voted before) and then calls giveVote function to select the checked radioButton and then fill the localStorage with an array containing all the name of the candidates who have recieved the votes.

3)Voting Summary : This function shows a list of all the candidates and the votes they have recieved by counting all the instances of a particular candidate name.

4)Poll Result : This shows the final result of the Elections , where I am counting the maximum and minimum votes aquired by a candidate by fecthing the voted candidate list from Local Storage and then displaying the Results.


=>To Run:<br/>
First install all the dependencies using,<br/>
&ensp;&ensp;&ensp;npm install<br/>
Then , to run the final application,<br/>
&ensp;&ensp;&ensp;npm start
