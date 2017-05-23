Cipher.toQWERTY = function(text, decode) {
    // ABCDEF to QWERTY map
    var map = {
        a: 'u', b: 'z', c: 'v',
        d: 't', e: 'i', f: 's',
        g: 'r', h: 'p', i: 'e',
        j: 'n', k: 'm', l: 'l',
        m: 't', n: 'j', o: 'o',
        p: 'h', q: 'q', r: 'g',
        s: 'f', t: 'd', u: 'a',
        v: 'c', w: 'w', x: 'x',
        y: 'ö', z: 'b', ä: 'ä', ö: 'y'
    };
    // Flip the map
    if(decode) {
        map = (function() {
            var tmp = {};
            var k;

            // Populate the tmp variable
            for(k in map) {
                if(!map.hasOwnProperty(k)) continue;
                tmp[map[k]] = k;
            }

            return tmp;
        })();
    }
 {
        return map.hasOwnProperty(v.toLowerCase());
    }).map(function(v) {
        // Replace old character by new one
        // And make it uppercase to make it look fancier
        return map[v.toLowerCase()].toUpperCase();
    }).join('');
};
