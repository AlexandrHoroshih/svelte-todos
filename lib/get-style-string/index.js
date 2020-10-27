export const camelToKebab = string => string && string.replace(/([\da-z]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const isCssVar = str => str && str.length > 2 && str.match(/--.*-?.*?/);

export const keyToCssVar = key => {
    if (isCssVar(key)) return key;

    return `--${camelToKebab(key)}`;
};

export const getStyleString = (styleObj) => {
    let str = '';

    for (const key in styleObj) {
        if (Object.prototype.hasOwnProperty.call(styleObj, key)) {
            str = `${str} ${keyToCssVar(key)}: ${styleObj[key]};`;
        }
    }

    return str;
}
