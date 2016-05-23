"use strict";

function Quests() {
    return {
        "tutorial-start": {
            name: {
                "en": "",
                "ru": "Начало обучения"
            },
            desc: {
                "en": "",
                "ru": [
                    "Здравствуй, поселенец.",
                    "Всякий, кто прибывает в эти земли, сначала попадает сюда, в мою Академию. Здесь я обучу тебя основам выживания.",
                    "По завершению ты получишь награду: <i>3000 опыта и 4 золотых монеты</i>.",
                    // "Если ты решишь уйти сейчас, дело твое, но помни, что ты лишишься всех преимуществ ученика, и выжить тебе будет очень сложно.",
                ],
            },
            final: {
                "en": "",
                "ru": "Отлично, приступим. Запоминай: <i>до 10 уровня на тебя не нападут дикие животные, а при смерти ты останешься со своей сумкой.</i>",
            },
        },
        "craft-1": {
            name: {
                "en": "",
                "ru": "Сбор ресурсов",
            },
            desc: {
                "en": "",
                "ru": "Для выживания в этих диких землях тебе необходимы инструменты, а чтобы их создать, нужны ресурсы. Собери камней, штук 8, 3 сучка и 2 ветки.",
            },
            tip: {
                "en": "",
                "ru": "<rmb></rmb> по дереву и <i>Собрать ветку</i> или сук. Собрать камни с земли <lmb></lmb>.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "craft-2": {
            name: {
                "en": "",
                "ru": "Крафт необходимого",
            },
            desc: {
                "en": "",
                "ru": "Отлично, все необходимое ты нашел. Из этого всего тебе нужно сделать минимальный набор инструментов - кирку, нож и острую палку.",
            },
            tip: {
                "en": "",
                "ru": "<lmb></lmb> по иконке квестового предмета откроет окно крафта и найдет нужный рецепт.<br><rmb>сломать</rmb> по суку даст палку, а из ветки выйдет прутик.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "stat-1": {
            name: {
                "en": "",
                "ru": "Жажда",
            },
            desc: {
                "en": "",
                "ru": "Теперь стоит научить тебя добывать еду и питьевую воду. Пройди в следующую комнату, там ты найдешь небольшой водоем. Сдери кору с дерева и сделай себе из нее кружку, а затем наполни ее водой из водоема. Не бойся, в этих землях вся вода чистая.",
            },
            tip: {
                "en": "",
                "ru": "<rmb>пить</rmb> по кружке увеличит выносливость. <br>Для того чтобы наполнить ёмкость водой, нужно стоять на мелководье.<br>Информация по персонажу можно найти щелкнув по портрету в левом верхнем углу",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "stat-2": {
            name: {
                "en": "",
                "ru": "Голод",
            },
            desc: {
                "en": "",
                "ru": "Самое время добыть еды и поесть. Поймай и разделай курицу, либо нарви яблок с дерева. Будь внимателен, не переедай, иначе еда не принесет тебе пользы в виде витаминов. Витамины нужны для улучшения твоих характеристик, а характеристики влияют на твои навыки. Если ты вдруг переел, туалет тут рядом, воспользуйся им. Скорее всего, тебе понадобится кровать, чтобы восстановить силы перед первым боем и восстановить здоровье.",
            },
            tip: {
                "en": "",
                "ru": "Информация по витаминам в окне \"Статы\". Навык невозможно повысить выше связанного с ним стата. При это надо следить за уровнем навыка в окне \"Навыки\". Изучаются навыки при помощи очков опыта.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "fight": {
            name: {
                "en": "",
                "ru": "Бой и боевые комбинации",
            },
            desc: {
                "en": "",
                "ru": "Вот ты и готов к своему первому бою. Твой противник - Кот-наркот, обитатель местной фауны. Возьми в правую руку свою острую палку и ступай в следующую комнату.",
            },
            tip: {
                "en": "",
                "ru": [
                    "Острую палку нужно поместить в правую (верхнюю) руку персонажа. На панели внизу приведены кнопки боя, но эффективнее использовать боевые комбинации. Например, 3-2-1, 1.",
                    "Есть и другие комбо. Большая кнопка на нижней панели отражает возможное действие с предметом в руках.",
                ],
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "dead": {
            name: {
                "en": "",
                "ru": "Смерть",
            },
            desc: {
                "en": "",
                "ru": "Отлично! Но в этих землях не все животные такие слабые, как этот кот. Если ты нападешь на противника, а он окажется сильнее тебя, либо на тебя побежит агрессивное животное, то вряд ли у тебя выйдет убежать на своих двоих и ты умрешь. Но тут смерть значит лишь потерю витаминов, что накопились в твоем организме, небольшая амнезия, из-за которой ты потеряешь опыт, а так же свои вещи. Оживешь ты около своего респауна или в городе. Если хочешь проверить свои силы, можешь поговорить с Диего, он наверняка знает места, где собираются коты и может тебя отвести за скромную плату. А с другими игроками ты можешь сразиться на арене, не получив при этом штрафов за смерть и убийство.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "claim": {
            name: {
                "en": "",
                "ru": "Клейм - твоя крепость",
            },
            desc: {
                "en": "",
                "ru": "Помимо всего, на тебя может напасть и другой человек. Чтобы не потерять нажитое тобой имущество, тебе необходимо построить клейм. С его помощью ты оградишь для себя небольшой участок, на нем можно строить, возделывать землю, не боясь, что на тебя нападут или украдут все нажитое. Лицензию на клейм ты можешь получить у Чарльза за 8 золотых, когда достигнешь 10 уровня.",
            },
            tip: {
                "en": "",
                "ru": "Опыт накапливается при создании предметов и при убийствах противников. Монеты падают с некоторых противников, а так же можно продать ресурсы на Рынке в городе.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "finish": {
            name: {
                "en": "",
                "ru": "Конец обучения",
            },
            desc: {
                "en": "",
                "ru": "Ну вот я и обучил тебя основам выживания в этих землях. Пора отправляться в город. Ступай через портал.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "in-city": {
            name: {
                "en": "",
                "ru": "В город",
            },
            desc: {
                "en": "",
                "ru": "Осмотрись в городе. Загляни на Рынок, там ты сможешь продать легкодобываемые ресурсы. Деньги лучше хранить в Банке, там же можно и оплатить свой клейм. В Таверне ты сможешь перекусить, выпить, а так же сыграть в азартные игры. Ах да, и с Марго познакомься, удивительная девушка. В Квартале ремесленников можно приобрести ресурсы, которые вряд ли ты сможешь сделать на данный момент. Тут же Арена и Церковь. Помимо этого, в городе есть порталы, с помощью которых ты попадешь в дикие земли. В город можно вернуться, построив респаун. Ну что ж, в добрый путь!",
            },
            tip: {
                "en": "",
                "ru": "При построении нескольких респаунов следует отмечать тот, на который нужно будет вернуться через ПКМ по респауну -> Назначить место возрождения.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },



        "faction-daily-1": {
            name: {
                "en": "",
                "ru": "Помощь фракции (ежедневный)",
            },
            desc: {
                "en": "",
                "ru": "Повысить статус внутри фракции",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "garland-daily": {
            name: {
                "en": "",
                "ru": "Гирлянда (ежедневный)",
            },
            desc: {
                "en": "",
                "ru": "Помоги деду морозу сделать гирлянду",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "chrismas-flags-daily": {
            name: {
                "en": "",
                "ru": "Флажки (ежедневный)",
            },
            desc: {
                "en": "",
                "ru": "Помоги Деду Морозу сделать бумажные флажки",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "chrismas-decoration-daily-1": {
            name: {
                "en": "",
                "ru": "Бумажные украшения (ежедневный)",
            },
            desc: {
                "en": "",
                "ru": "Помоги Снегурочке сделать бумажные украшения",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "chrismas-decoration-daily-2": {
            name: {
                "en": "",
                "ru": "Стеклянные украшения (ежедневный)",
            },
            desc: {
                "en": "",
                "ru": "Помоги Снегурочке сделать стеклянные украшения",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
    };
};
