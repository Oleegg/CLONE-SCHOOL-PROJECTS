
let isCaps = false

let isLang
function getLang(langueg) {
    isLang = langueg
}
const body = document.querySelector('body')
const wrapper = document.createElement('div')
console.log(body);
wrapper.classList.add('wrapper')
body.append(wrapper)
const title = document.createElement('div')
const titleContainer = document.createElement('div')
title.classList.add('title')
titleContainer.classList.add('title-container')
const heading = document.createElement('h1')
const headingMini = document.createElement('h3')
const headingMicro = document.createElement('h3')
headingMini.textContent = 'Keyboard was created in Windows'
headingMicro.textContent = 'To change language press: Shift + Alt'
heading.textContent = 'My virtual keyboard'
title.append(titleContainer)
title.append(heading)
titleContainer.append(headingMini)
titleContainer.append(headingMicro)
wrapper.append(title)
const textarea = document.createElement('textarea')
textarea.classList.add('textarea')
wrapper.append(textarea)
const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')
wrapper.append(keyboard)

const keysObj = [['~', '`', 'Ё', 'ё', 192, 'Backquote'], ['!', 1, '!', 1, 49, 'Digit1'], ['@', 2, '@', 2, 50, 'Digit2'], ['#', 3, '#', 3, 51, 'Digit3'], ['$', 4, '$', 4, 52, 'Digit4'], ['%', 5, '%', 5, 53, 'Digit5'], ['^', 6, '^', 6, 54, 'Digit6'], ['&', 7, '&', 7, 55, 'Digit7'], ['*', 8, '*', 8, 56, 'Digit8'], ['(', 9, '(', 9, 57, 'Digit9'], [')', 0, ')', 0, 58, 'Digit0'], ['_', '-', '_', '-', 189, 'Minus'], ['+', '=', '+', '=', 187, 'Equal'], ['Backspace', 8, 'Backspace'], ['Tab', 9, 'Tab'], ['Q', 'q', 'Й', 'й', 81, 'KeyQ'],
['W', 'w', 'Ц', 'ц', 87, 'KeyW'],
['E', 'e', 'У', 'у', 69, 'KeyE'],
['R', 'r', 'К', 'к', 82, 'KeyR'],
['T', 't', 'Е', 'е', 84, 'KeyT'],
['Y', 'y', 'Н', 'н', 89, 'KeyY'],
['U', 'u', 'Г', 'г', 85, 'KeyU'],
['I', 'i', 'Ш', 'ш', 73, 'KeyI'],
['O', 'o', 'Щ', 'щ', 79, 'KeyO'],
['P', 'p', 'З', 'з', 80, 'KeyP'],
['{', '[', 'Х', 'х', 219, 'BracketLeft'],
['}', ']', 'Ъ', 'ъ', 221, 'BracketRight'],
['|', '\\', '|', '\\', 220, 'Backslash'],
['Delete', 46, 'Delete'],
['CapsLock', 20, 'CapsLock'],
['A', 'a', 'Ф', 'ф', 65, 'KeyA'],
['S', 's', 'Ы', 'ы', 83, 'KeyS'],
['D', 'd', 'В', 'в', 68, 'KeyD'],
['F', 'f', 'А', 'а', 70, 'KeyF'],
['G', 'g', 'П', 'п', 71, 'KeyG'],
['H', 'h', 'Р', 'р', 72, 'KeyH'],
['J', 'j', 'О', 'о', 74, 'KeyJ'],
['K', 'k', 'Л', 'л', 75, 'KeyK'],
['L', 'l', 'Д', 'д', 76, 'KeyL'],
[':', ';', 'Ж', 'ж', 186, 'Semicolon'],
['"', '\'', 'Э', 'э', 186, 'Quote'],
['Enter', 13, 'Enter'],
['Shift', 16, 'ShiftLeft'],
['Z', 'z', 'Я', 'я', 90, 'KeyZ'],
['X', 'x', 'Ч', 'ч', 88, 'KeyX'],
['C', 'c', 'С', 'с', 67, 'KeyC'],
['V', 'v', 'М', 'м', 86, 'KeyV'],
['B', 'b', 'И', 'и', 66, 'KeyB'],
['N', 'n', 'Т', 'т', 78, 'KeyN'],
['M', 'm', 'Ь', 'ь', 77, 'KeyM'],
['<', ',', 'Б', 'б', 188, 'Comma'],
['>', '.', 'Ю', 'ю', 190, 'Period'],
['?', '/', ',', '.', 191, 'Slash'],
['ArrowUp', 38, 'ArrowUp'],
['Shift', 16, 'ShiftRight'],
['Control', 17, 'ControlLeft'],
['Meta', 91, 'MetaLeft'],
['Alt', 18, 'AltLeft'],
['Space', 32, 'Space'],
['Alt', 18, 'AltRight'],
['ArrowLeft', 37, 'ArrowLeft'],
['ArrowDown', 40, 'ArrowDown'],
['ArrowRight', 39, 'ArrowRight'],
['Control', 17, 'ControlRight']
]
console.log(keysObj);
const result = []
class Key {
    constructor(En, en, Ru, ru, code, name = 'name') {
        this.En = En
        this.en = en
        this.Ru = Ru
        this.ru = ru
        this.code = code
        this.name = name
    }
    addLetter(En, en, Ru, ru, code, name) {
        const letter = new Key(En, en, Ru, ru, code, name)
        result.push(letter)
    }
    addSpec(le, cod, name) {
        le = new Key(le, le, le, le, cod, name)
        result.push(le)
    }
    clearKeys() {
        keyboard.innerHTML = ' '
    }
    addAffect(e, eff, key) {
        if (isLang === undefined) {
            isLang = false
        }
        if (eff == 'mousedown') {
            key.classList.add('back')
            if (key.innerHTML == 'Tab') {
                this.addFocusCursor(e, 'Tab')
            } else if (key.innerHTML == 'Enter') {
                this.addFocusCursor(e, 'Enter')
            } else if (key.innerHTML == 'Backspace') {
                this.addFocusCursor(e, 'Backspace')
            } else if (key.innerHTML == 'Del') {
                this.addFocusCursor(e, 'Del')
            } else if (key.innerHTML == 'CapsLock') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        document.querySelectorAll('.keylong')[1].classList.remove('back')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        document.querySelectorAll('.keylong')[1].classList.remove('back')
                        isCaps = !isCaps
                    }
                }
            } else if (key.innerHTML == 'Space') {
                this.addFocusCursor(e, 'Space')
            } else if (key.innerHTML == 'Shift') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        isCaps = !isCaps
                    }
                }
            } else {
                this.addFocusCursor(e, key.innerHTML)
            }
        } else {
            if (key.innerHTML == 'Shift') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        isCaps = !isCaps
                    }
                }
            } else if (!isCaps) {
                key.classList.remove('back')
            }
        }
    }
    addFocusCursor(e, type) {
        let textar = document.querySelector('.textarea')
        let cursor = textar.selectionStart
        e.preventDefault()
        textar.focus()
        let x, y, z, a
        if (type == 'Tab') {
            x = '    '
            y = 4
            z = 0
            a = 0
        } else if (type == 'Backspace') {
            if (textar.selectionStart !== textar.selectionEnd) {
                textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd)
                textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                return focus
            } else {
                x = ''
                y = -1
                z = 1
                a = 0
            }
        } else if (type == 'Space') {
            x = ' '
            y = 1
            z = 0
            a = 0
        } else if (type == 'Del') {
            if (textar.selectionStart !== textar.selectionEnd) {
                textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd)
                textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                return focus
            } else {
                x = ''
                y = 1
                z = 0
                a = 1
            }
        } else if (type == 'Enter') {
            textar.value = textar.value.slice(0, cursor) + '\n' + textar.value.slice(cursor)
            textar.setSelectionRange(cursor + 1, cursor + 1)
            return focus
        } else if (type == 'Win' || type == 'Shift' || type == 'Alt' || type == 'Ctrl' || type == 'AltGraph') {
            x = ''
            y = 0
            z = 0
            a = 0
        } else if (type == 'ArrowLeft') {
            x = '←'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowUp') {
            x = '↑'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowRight') {
            x = '→'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowDown') {
            x = '↓'
            y = 1
            z = 0
            a = 0
        } else {
            if (isCaps) {
                if (textar.selectionStart !== textar.selectionEnd) {
                    textar.value = textar.value.slice(0, textar.selectionStart) + type.toUpperCase() + textar.value.slice(textar.selectionEnd)
                    textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                    return focus
                } else {
                    if (e.key == '`') {
                        x = '~'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 1) {
                        x = '!'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 2) {
                        x = '@'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 3) {
                        x = '#'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 4) {
                        x = '$'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 5) {
                        x = '%'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 6) {
                        x = '^'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 7) {
                        x = '&'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 8) {
                        x = '*'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 9) {
                        x = '('
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 0) {
                        x = ')'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '-') {
                        x = '_'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '=') {
                        x = '+'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '[') {
                        x = '{'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ']') {
                        x = '}'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '\\') {
                        x = '|'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ';') {
                        x = ':'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '\'') {
                        x = '"'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ',') {
                        x = '<'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '.') {
                        x = '>'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '/') {
                        x = '?'
                        y = 1
                        z = 0
                        a = 0
                    } else {
                        x = type.toUpperCase()
                        y = 1
                        z = 0
                        a = 0
                    }
                }
            } else {
                if (textar.selectionStart !== textar.selectionEnd) {
                    textar.value = textar.value.slice(0, textar.selectionStart) + type + textar.value.slice(textar.selectionEnd)
                    textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                    return focus
                } else {
                    x = type
                    y = 1
                    z = 0
                    a = 0
                }
            }
        }
        textar.value = textar.value.slice(0, cursor - z) + x + textar.value.slice(cursor + a)
        textar.setSelectionRange(cursor + y, cursor + y - a)
        return focus
    }
    addText() {

    }
    showKeys(lang = 'en') {
        result.forEach(el => {
            const key = document.createElement('div')
            key.addEventListener('mousedown', (e) => this.addAffect(e, 'mousedown', key)
            )
            key.addEventListener('mouseup', (e) => this.addAffect(e, 'mouseup', key)
            )
            key.classList.add('key')
            if (el.code == 38) {
                key.innerHTML = '&#8593;'
            } else if (el.code == 37) {
                key.innerHTML = '&#8592;'
            } else if (el.code == 39) {
                key.innerHTML = '&#8594;'
            } else if (el.code == 40) {
                key.innerHTML = '&#8595;'
            } else if (el.En == 'Control') {
                key.innerHTML = 'Ctrl'
            } else if (el.En == 'Meta') {
                key.innerHTML = 'Win'
            } else if (el.En == 'Delete') {
                key.innerHTML = 'Del'
            } else {
                key.innerHTML = el[lang]
            }
            keyboard.append(key)
            if (el.En == 'Backspace' || el.En == 'Delete' || el.En == 'Enter' || el.name == 'ShiftRight') {
                const clear = document.createElement('div')
                clear.classList.add('clear')
                keyboard.append(clear)
            }
            if (el.En == 'Enter' || el.En == 'Backspace' || el.En == 'CapsLock' || el.En == 'Shift') {
                key.classList.add('keylong')
            }
            if (el.En == 'Tab') {
                key.classList.add('litle-keylong')
            }
            if (el.En == 'Space') {
                key.classList.add('long-keylong')
            }
        })
    }
}


const word = new Key()

keysObj.forEach(el => {
    if (el.length == 6) {
        const [En, en, Ru, ru, code, name] = el
        word.addLetter(En, en, Ru, ru, code, name)
    } else {
        const [le, cod, name] = el
        word.addSpec(le, cod, name)
    }
})
console.log(result);
word.showKeys()

document.addEventListener('keydown', (e) => addAffectInKey(e, 'keydown'))
document.addEventListener('keyup', (e) => addAffectInKey(e, 'keyup'))

let press = new Set()
function addAffectInKey(e, affect) {
    if (isLang === undefined) {
        isLang = false
    }
    console.log(e);
    if (affect == 'keydown') {
        e.preventDefault()
        const keyys = document.querySelectorAll('.key')
        if (e.key == 'CapsLock') {
            word.clearKeys()
            if (!isLang) {
                if (!isCaps) {
                    word.showKeys('En')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                    isCaps = !isCaps
                } else {
                    word.showKeys('en')
                    document.querySelectorAll('.keylong')[1].classList.remove('back')
                    isCaps = !isCaps
                }
            } else {
                if (!isCaps) {
                    word.showKeys('Ru')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                    isCaps = !isCaps
                } else {
                    word.showKeys('ru')
                    document.querySelectorAll('.keylong')[1].classList.remove('back')
                    isCaps = !isCaps
                }
            }
            return null
        }
        keyys.forEach(el => {
            if (e.key == 'Meta') {
                if (el.innerHTML == 'Win') {
                    el.classList.add('back')
                }
            }
            if (isCaps) {
                if (e.key == '`') {
                    if (el.innerHTML == '~') {
                        el.classList.add('back')
                    }
                } else if (e.key == '1') {
                    if (el.innerHTML == '!') {
                        el.classList.add('back')
                    }
                } else if (e.key == '2') {
                    if (el.innerHTML == '@') {
                        el.classList.add('back')
                    }
                } else if (e.key == '3') {
                    if (el.innerHTML == '#') {
                        el.classList.add('back')
                    }
                } else if (e.key == '4') {
                    if (el.innerHTML == '$') {
                        el.classList.add('back')
                    }
                } else if (e.key == '5') {
                    if (el.innerHTML == '%') {
                        el.classList.add('back')
                    }
                } else if (e.key == '6') {
                    if (el.innerHTML == '^') {
                        el.classList.add('back')
                    }
                } else if (e.key == '7') {
                    if (el.innerHTML == '&amp;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '8') {
                    if (el.innerHTML == '*') {
                        el.classList.add('back')
                    }
                } else if (e.key == '9') {
                    if (el.innerHTML == '(') {
                        el.classList.add('back')
                    }
                } else if (e.key == '0') {
                    if (el.innerHTML == ')') {
                        el.classList.add('back')
                    }
                } else if (e.key == '-') {
                    if (el.innerHTML == '_') {
                        el.classList.add('back')
                    }
                } else if (e.key == '=') {
                    if (el.innerHTML == '+') {
                        el.classList.add('back')
                    }
                } else if (e.key == '[') {
                    if (el.innerHTML == '{') {
                        el.classList.add('back')
                    }
                } else if (e.key == ']') {
                    if (el.innerHTML == '}') {
                        el.classList.add('back')
                    }
                } else if (e.key == '\\') {
                    if (el.innerHTML == '|') {
                        el.classList.add('back')
                    }
                } else if (e.key == ';') {
                    if (el.innerHTML == ':') {
                        el.classList.add('back')
                    }
                } else if (e.key == '\'') {
                    if (el.innerHTML == '"') {
                        el.classList.add('back')
                    }
                } else if (e.key == ',') {
                    if (el.innerHTML == '&lt;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '.') {
                    if (el.innerHTML == '&gt;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '/') {
                    if (el.innerHTML == '?') {
                        el.classList.add('back')
                    }
                } if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Delete') {
                    if (el.innerHTML == 'Del') {
                        el.classList.add('back')
                    }
                } else if (e.key == ' ') {
                    if (el.innerHTML == 'Space') {
                        el.classList.add('back')
                    }
                } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
                    el.classList.add('back')
                }
            } else {
                if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Delete') {
                    if (el.innerHTML == 'Del') {
                        el.classList.add('back')
                    }
                } else if (e.key == ' ') {
                    if (el.innerHTML == 'Space') {
                        el.classList.add('back')
                    }
                }
                if (el.innerHTML == e.key || e.code == el.innerHTML) {
                    el.classList.add('back')
                }
            }
        })
        if (e.code == 'ShiftLeft' || e.code == 'AltLeft') {
            press.add(e.code)
        }
        if (press.has('ShiftLeft') && press.has('AltLeft')) {
            if (isLang) {
                if (isCaps) {
                    word.clearKeys()
                    word.showKeys('En')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                } else {
                    word.clearKeys()
                    word.showKeys('en')
                }
                isLang = !isLang
            } else {
                if (isCaps) {
                    word.clearKeys()
                    word.showKeys('Ru')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                } else {
                    word.clearKeys()
                    word.showKeys('ru')
                }
                isLang = !isLang
            }
        }
        if (e.key == 'Tab') {
            word.addFocusCursor(e, 'Tab')
        } else if (e.key == ' ') {
            word.addFocusCursor(e, 'Space')
        } else if (e.key == 'Enter') {
            word.addFocusCursor(e, 'Enter')
        } else if (e.key == 'Backspace') {
            word.addFocusCursor(e, 'Backspace')
        } else if (e.key == 'Delete') {
            word.addFocusCursor(e, 'Del')
        } else if (e.key == 'ArrowLeft') {
            word.addFocusCursor(e, 'ArrowLeft')
        } else if (e.key == 'ArrowUp') {
            word.addFocusCursor(e, 'ArrowUp')
        } else if (e.key == 'ArrowDown') {
            word.addFocusCursor(e, 'ArrowDown')
        } else if (e.key == 'ArrowRight') {
            word.addFocusCursor(e, 'ArrowRight')
        } else if (e.key == 'CapsLock' || e.key == 'Shift' || e.key == 'Alt' || e.key == 'Meta' || e.key == 'Escape' || e.key == 'AudioVolumeMute' || e.key == 'AudioVolumeDown' || e.key == 'AudioVolumeUp' || e.key == 'Insert' || e.key == 'Control' || e.key == 'F1' || e.key == 'F2' || e.key == 'F3' || e.key == 'F4' || e.key == 'F5' || e.key == 'F6' || e.key == 'F7' || e.key == 'F8' || e.key == 'F9' || e.key == 'F10' || e.key == 'F11' || e.key == 'F12' || e.key == 'AltGraph') {
            return null
        } else {
            word.addFocusCursor(e, e.key)
        }
    } else {
        const keyys = document.querySelectorAll('.key')
        keyys.forEach(el => {
            if (e.key == 'Meta') {
                if (el.innerHTML == 'Win') {
                    el.classList.remove('back')
                }
            }
            if (isCaps) {
                if (isCaps) {
                    if (e.key == '`') {
                        if (el.innerHTML == '~') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '1') {
                        if (el.innerHTML == '!') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '2') {
                        if (el.innerHTML == '@') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '3') {
                        if (el.innerHTML == '#') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '4') {
                        if (el.innerHTML == '$') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '5') {
                        if (el.innerHTML == '%') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '6') {
                        if (el.innerHTML == '^') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '7') {
                        if (el.innerHTML == '&amp;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '8') {
                        if (el.innerHTML == '*') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '9') {
                        if (el.innerHTML == '(') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '0') {
                        if (el.innerHTML == ')') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '-') {
                        if (el.innerHTML == '_') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '=') {
                        if (el.innerHTML == '+') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '[') {
                        if (el.innerHTML == '{') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ']') {
                        if (el.innerHTML == '}') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '\\') {
                        if (el.innerHTML == '|') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ';') {
                        if (el.innerHTML == ':') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '\'') {
                        if (el.innerHTML == '"') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ',') {
                        if (el.innerHTML == '&lt;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '.') {
                        if (el.innerHTML == '&gt;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '/') {
                        if (el.innerHTML == '?') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowLeft') {
                        if (el.innerHTML == '←') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowRight') {
                        if (el.innerHTML == '→') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowUp') {
                        if (el.innerHTML == '↑') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowDown') {
                        if (el.innerHTML == '↓') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'Control') {
                        if (el.innerHTML == 'Ctrl') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'Delete') {
                        if (el.innerHTML == 'Del') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ' ') {
                        if (el.innerHTML == 'Space') {
                            el.classList.remove('back')
                        }
                    } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
                        el.classList.remove('back')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                    }
                }
            } else {
                if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.remove('back')
                    }
                }
                if (el.innerHTML == e.key || e.code == el.innerHTML) {
                    el.classList.remove('back')
                }
            }
        })
        if (press.has('ShiftLeft') || press.has('AltLeft')) {
            press.clear()
        }
    }
}

wrapper.addEventListener('mouseup', () => {
    const keyys = document.querySelectorAll('.key')
    if (!isCaps) {
        keyys.forEach(el => el.classList.remove('back'))
    } else {
        keyys.forEach(el => {
            if (el.innerHTML !== 'CapsLock') {
                el.classList.remove('back')
            }
        })
    }
})
console.log(isLang);

function setLocalStorage() {

    localStorage.setItem('lang', isLang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getLang(lang)
        console.log(lang);
        console.log(isLang);
    }

}
window.addEventListener('load', getLocalStorage)