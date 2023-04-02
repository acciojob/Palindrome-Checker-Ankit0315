// complete the given function

function palindrome(str){
	
 str.toLowerCase();
 const string = str.toLowerCase();
 const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
