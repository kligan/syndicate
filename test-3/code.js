const words = Object.freeze(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])

const output = words

function arrayTransform (arr){
    const uppercased = arr.map(name => name.toUpperCase());
    const result = uppercased.filter(word => word.length > 6);
    result.unshift("Start:");
    console.log(result)
}

arrayTransform(output)