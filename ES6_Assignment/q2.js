function getPermutations(string) {

    let results = [];

    if(string.length === 1) {
        results.push(string);
        return results;
    }

    for (let index = 0; index < string.length; index++) {
        const firstChar = string[index];
        let charLeft = string.slice(0, index) + string.slice(index+1);
        let innerPermutations = getPermutations(charLeft);

        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}

permuts = getPermutations('abc');

for(let permut of permuts){
  console.log(permut);
}