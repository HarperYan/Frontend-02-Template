function match(selector, element) {

    let selectorParts = selector.split(' ').reverse();
    let match = /(?<tagName>(\w+)?)(?<id>(#\w+)?)(?<classNames>(.[\w.]+)?)/;

    // the first selector should be the same as current element
    let part = selectorParts.shift();

    let matchResult = part.match(match);
    let {tagName, id, classNames} = matchResult.groups;

    let _tagName = element.tagName.toLowerCase();
    let _classList = element.className.split(' ');
    let _id = element.id;

    if(id && id !== ('#'+_id) || tagName && tagName !== _tagName) {
        return false;
    }

    // iterate classNames
    if(classNames){
        let classList = classNames.split('\.').filter(val => !!val);
        if(_classList.length < classList.length) {
            return false;
        }else {
            for (let className of classList) {
                if (_classList.indexOf(className) === -1) {
                    return false;
                }
            }
        }
    }

    //走到此处说明已匹配目标元素
    let len = selectorParts.length, i = 0;
    element = element.parentElement;
    for(let part of selectorParts) {
        let matchResult = part.match(match);
        let {tagName, id, classNames} = matchResult.groups;

        element: while (element){
            let _tagName = element.tagName.toLowerCase();
            let _classList = element.className.split(' ');
            let _id = element.id;

            if(id && id !== ('#'+_id) || tagName && tagName !== _tagName) {
                element = element.parent;
                continue;
            }

            if(classNames){
                let classList = classNames.split('.').filter(val => !!val);
                if(_classList.length < classList.length) {
                    element = element.parent;
                }else {
                    for (let className of classList) {
                        if (_classList.indexOf(className) === -1) {
                            element = element.parent;
                            continue element;
                        }
                    }
                }
            }

            // match the element, and go to the next item
            element = element.parentElement;
            i++;
            break;
        }

        // root element detective
        if(!element) {
            break;
        }

    }

    // all elements get checked but no matching found
    return i === len;
}


match("div #id.class", document.getElementById("id"));