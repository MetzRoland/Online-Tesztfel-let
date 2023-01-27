const trueFalseQuestions = [
    {
        question: "A mátrix egy szervezeti forma",
        description: "IGAZ vagy HAMIS!",
        choises: ["IGAZ","HAMIS"].sort(() => 0.5 - Math.random()),
        anwser: "IGAZ",
    },
    
    {
        question: "A versengés konfliktuskezelési stílus",
        description: "IGAZ vagy HAMIS!",
        choises: ["IGAZ","HAMIS"].sort(() => 0.5 - Math.random()),
        anwser: "IGAZ"
    },
    
    
    {
        question: "A kooperatív magatartás a saját érdekünket védi",
        description: "IGAZ vagy HAMIS!",
        choises: ["IGAZ","HAMIS"].sort(() => 0.5 - Math.random()),
        anwser: "HAMIS",
    },
    
].sort(() => 0.5 - Math.random());

const fourChoiceQuestions = [
    {
        question: "Minek a megvalósítása az asszertív magatartás?",
        description: "Válassz eggyet a 4 közül!",
        choises: ["Saját érdekeid","Mások érdekei","Semelyik","Mindkettő"].sort(() => 0.5 - Math.random()),
        anwser: "Saját érdekeid",
    },
    
    
    {
        question: "Mit jelent az elfogadás konfliktuskezelési stílus?",
        description: "Válassz eggyet a 4 közül!",
        choises: ["Nincs igazunk","Saját cél","Semelyik","Mindkettő"].sort(() => 0.5 - Math.random()),
        anwser: "Nincs igazunk",
    },

    
    {
        question: "Mi a kompromisszum jellemzője?",
        description: "Válassz eggyet a 4 közül!",
        choises: ["Gyors","Legjobb","Sok idő","Egyenlő célok"].sort(() => 0.5 - Math.random()),
        anwser: "Gyors",
    },
].sort(() => 0.5 - Math.random());