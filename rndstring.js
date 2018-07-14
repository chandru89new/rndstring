// vowel = a, e, i, o, u
// semi-vowel = y
// consonant = [everything else]
// consonant-pair = bl, br, ch, cr, cl, dr, dp, dl, dv, fl, fr, gr, tr, tw, pl, pr, kl, kr, sc, sk, st, sr, sm, sn, sp, sw

// initialize first character from vowel or consonant or consonant-pair
// if previous character is vowel, next character should be consonant or consonant-pair
// else, init next char from vowel or semi-vowels
// repeat till loop ends

var rndString = {
    _lastString: '',
    _consonantPairs: ['bl', 'br', 'ch', 'cr', 'cl', 'dr', 'dl', 'dv', 'fl', 'fr', 'gr', 'tr', 'tw', 'pl', 'pr', 'kl', 'kr', 'sc', 'sk', 'st', 'sr', 'sm', 'sn', 'sp', 'sw', 'sh'],
    getLastString: function(){
        if (!this._lastString) {
            return "No last string found.";
        }
        return this._lastString;
    },
    generate: function(l){
        var _len = l;
        if (!_len || _len < 4 || _len > 12) {
            _len = 6;
        }
        // init first char
        var _alphabets = 'aeioubcdfghjklmnpqrstvwxz'.split('');
        var _alphaPairs = this._consonantPairs;
        var _p = _alphabets.concat(_alphaPairs);

        var _char;

        _char = _p[Math.floor(Math.random()*_p.length)];
        i = _len - 1;

        while (i > 0) {
            _prevChar = _char.substr(-1);
            _newChar = this.getNextChar(_prevChar);
            _char += _newChar;
            i = i - 1;
        }
        this._lastString = _char.substr(0,_len);
        return _char.substr(0, _len);
    },
    getNextChar: function(prevChar){
        var _vowels = 'aeiou'.split('');
        var _semivowels = ['y'];
        var _consonants = 'bcdfghjklmnpqrstvwxz'.split('');
        var _consontantPairs = this._consonantPairs;
        let _c = _consonants.concat(_consontantPairs);  
        let _v = _vowels.concat(_semivowels);

        if (_v.indexOf(prevChar) > -1) {
            return (_c[Math.floor(Math.random()*_c.length)]);
        } else {
            return (_v[Math.floor(Math.random()*_v.length)]);
        }
    },
    addConsonantPair: function(arr) {
        if (arr.length < 1 || !arr) {
            return "No value given to add."
        }
        if (typeof(arr) != 'object'){
            return "Value should be given in an array format";
        }
        arr.forEach( (item) => {
            // if not a string, dont do anything
            // if string:
            // if parseInt returns a number, dont do anything
            // else add to this._consonantPairs

            if (typeof(item) == 'string') {
                var a = parseInt(item);
                if (a !== a) {
                    if (this._consonantPairs.indexOf(item) < 0) {
                        this._consonantPairs.push(item);
                    }
                }
            }
        });
        return this._consonantPairs;
    },
    reset: function(){
        this.lastString = '';
        this._consonantPairs = ['bl', 'br', 'ch', 'cr', 'cl', 'dr', 'dl', 'dv', 'fl', 'fr', 'gr', 'tr', 'tw', 'pl', 'pr', 'kl', 'kr', 'sc', 'sk', 'st', 'sr', 'sm', 'sn', 'sp', 'sw'];
        return "Reset done.";
    }
}