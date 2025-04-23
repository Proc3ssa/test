function capitalise(word){

    if(word == ""){
      return  "";
    }
    
    return word.charAt[0].toUpperCase() + word.slice(1);
}

function truncate(word, length){

    if(word.length < length){
        return word
    }
    else{
        word = word.slice(0, length) + "...";
    }

    return word;

}

function reverse(word)

module.exports = {capitalise, truncate};