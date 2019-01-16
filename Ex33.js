// This function is adding words to the array until it breaks

var wordArray = [];

// KEY: Should loop and prompt, adding each word to array unless they enter "q" which should break out of loop
while(true) // Use boolean value 'true' to loop forever until you break out
{
    var word = prompt('Enter a word to add');
//    console.log(i=0, i==word, i++); // Not needed
	if (word === "q") // Entered quit
	{
		break;
	}
	// Otherwise, add the word to array
	wordArray.push(word);
}

