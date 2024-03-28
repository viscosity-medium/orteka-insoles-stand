'use client'

import {DefinePageContent} from "@/app/question/[id]/page.types";

export const definePageContent: DefinePageContent = ({pid}) => {
    switch (pid.id){
        case "1": {
            return({
                questionText: "Ваш пол",
                questionNumber: 1,
                spotType: "orange",
                buttonsDataProperty: "gender",
                nextPageHref: "/question/2",
            })
        }
        case "2": {
            return({
                questionText: "Испытываете ли вы дискомфорт?",
                questionNumber: 2,
                spotType: "aquamarine",
                buttonsDataProperty: "discomfortArea",
                nextPageHref: "/question/3",
            })
        }
        case "3": {
            return({
                questionText: "Ваш тип стопы",
                questionNumber: 3,
                spotType: "orange",
                buttonsDataProperty: "footType",
                nextPageHref: "/question/4",
            })
        }
        case "4": {
            return({
                questionText: "Мне нужна стелька для",
                questionNumber: 4,
                spotType: "aquamarine",
                buttonsDataProperty: "purpose",
                nextPageHref: "/question/5",
            })
        }
        case "5": {
            return({
                questionText: "Укажите уровень вашей активности",
                questionNumber: 5,
                spotType: "orange",
                buttonsDataProperty: "activityLevel",
                nextPageHref: "/results",
            })
        }
        default: {
            return({
                questionText: "Ваш пол",
                questionNumber: 1,
                spotType: "orange",
                buttonsDataProperty: "gender",
                nextPageHref: "/question/2",
            })
        }
    }
};
