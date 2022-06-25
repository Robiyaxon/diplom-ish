const transliterate = (text)=> {
    return text.replace(/\u042A/g, '')
        .replace(/\u0451/g, 'yo')
        .replace(/\u0439/g, 'i')
        .replace(/\u0446/g, 'ts')
        .replace(/\u0443/g, 'u')
        .replace(/\u043A/g, 'k')
        .replace(/\u0435/g, 'e')
        .replace(/\u043D/g, 'n')
        .replace(/\u0433/g, 'g')
        .replace(/\u0448/g, 'sh')
        .replace(/\u0449/g, 'sch')
        .replace(/\u0437/g, 'z')
        .replace(/\u0445/g, 'h')
        .replace(/\u044A/g, "")
        .replace(/\u0410/g, 'a')
        .replace(/\u0444/g, 'f')
        .replace(/\u044B/g, 'i')
        .replace(/\u0432/g, 'v')
        .replace(/\u0430/g, 'a')
        .replace(/\u043F/g, 'p')
        .replace(/\u0440/g, 'r')
        .replace(/\u043E/g, 'o')
        .replace(/\u043B/g, 'l')
        .replace(/\u0434/g, 'd')
        .replace(/\u0436/g, 'j')
        .replace(/\u044D/g, 'e')
        .replace(/\u042C/g, "")
        .replace(/\u044F/g, 'ya')
        .replace(/\u0447/g, 'ch')
        .replace(/\u0441/g, 's')
        .replace(/\u043C/g, 'm')
        .replace(/\u0438/g, 'i')
        .replace(/\u0442/g, 't')
        .replace(/\u044C/g, "")
        .replace(/\u0431/g, 'b')
        .replace(/\u044E/g, 'yu');
};
exports.getSlug = (str)=> {
    let start = Date.now().toString().slice(7);
    
    return `${start}-${transliterate(str.toLowerCase()).split(' ').join('-')}`
}

const fs = require('fs');
const path = require('path');


exports.deleteFile = (url) =>{
    fs.unlink(path.join(path.dirname(__dirname) + url),err=>{})
}