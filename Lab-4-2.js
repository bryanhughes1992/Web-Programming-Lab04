//LAB 4 - ARRAYS & LOOPS - PART 2
//PM TEAM MEMBER ARRAY
var teamMembers = ['Thao', 'Elanor', 'Barbara', 'Praveen', 'Bryan'];

//OUTPUT TEAM ARRAY TO JS CONSOLE
teamMembers.forEach(member => {
    console.log(member);
});

//REMOVE LAST MEMBER

teamMembers.pop();

//ADD SEAN TO FRONT OF ARRAY

teamMembers.unshift('Sean');

//REARRANGE THE ARRAY ALPHABETICALLY

teamMembers.sort();

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE

console.log(teamMembers.push());

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
var teamNumbers = [1000, 1001, 1002, 1003, 1004];

teamMembers.forEach(member => {
    teamNumbers.forEach(number => {
        if (teamMembers.indexOf(member) === teamNumbers.indexOf(number)) {
            console.log(`${member} is #${number}`);
        }
    });
});
