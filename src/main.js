/* global T, Game, config, util, gameStorage */

"use strict";

main();

function main() {
    const args = parseArgs();
    const lang = defaultLang(args);

    T.init(lang, function() {
        new Game(lang, args);
    });

    function defaultLang(args) {
        // force ru for vk
        if (window.name.indexOf("fXD") == 0) {
            return "ru";
        }
        const inputs = [
            args["lang"],
            gameStorage.getItem("lang"),
            navigator.language,
        ];
        const langs = config.ui.language().map(lang => new RegExp(lang, "i"));
        for (const input of inputs) {
            for (const re of langs) {
                if (re.test(input)) {
                    return re.source;
                }
            }
        }
        return langs[0];
    }

    function parseArgs() {
        return document.location.search
            .substring(1)
            .split("&")
            .reduce((params, param) => {
                const [key, value] = param.split("=");
                params[key] = decodeURIComponent(value);
                return params;
            }, {});
    }
}
