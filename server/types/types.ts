export type Gender = "male" | "female";
export type DiscomfortArea = "front" | "middle" | "back" | "none";
export type FootType = "high" | "middle" | "low" | "noInfo";
export type Purpose = "sport" | "daily";
export type ActivityLevel = "specialSport" | "run" | "walk" | "office";

export interface AnswersStore {
    gender: Gender | undefined,
    discomfortArea: DiscomfortArea | undefined,
    footType: FootType | undefined,
    purpose: Purpose | undefined,
    activityLevel: ActivityLevel | undefined
}

export interface SetAnswerStoreGender { gender: Gender }
export interface SetAnswerStoreDiscomfortArea { discomfortArea: DiscomfortArea }
export interface SetAnswerStoreFootType { footType: FootType }
export interface SetAnswerStorePurpose { purpose: Purpose }
export interface SetAnswerStoreActivityLevel { activityLevel: ActivityLevel }

export enum InsolesNumberList {
    DefaultContent = 0,
    AccentuatedPosition = 1,
    ErgoPadWeightFlex = 2,
    ErgoPadReduxHeel = 3,
    ErgoPadReduxHallux = 4,
    SolaMedSoftProtect = 5,
    ErgoPadRunAndWalk = 6,
    ErgoPadBallAndRack = 7,
    SolaMedLeader = 8,
    SolaMedFavora = 9,
    SolaMedSupra = 10,
    SolaMedSpira = 11,
    ErgoPadSkiSkate = 12,
    Citius = 13,
    SolaMedMinima = 14,
    SolaMedPrima = 15,
    SolaMedElegant = 16,
    SolaProLana = 17,
    SolaMedFortius = 18,
    SolaMedDynamic = 19,
    GlobotecJunior = 20,
    SolaMedJoy = 21,
    SolaMedBasic = 22,
    SolaMedLeo = 23,
    SolaMedReplet = 24,
    SolaMedRondo = 25,
    ViscoSpot = 26,
    ViscoBalance = 27
}

export enum InsolesNameList {
    DefaultContent = "1",
    AccentuatedPosition = "Accentuated Position",
    ErgoPadWeightFlex = "Стельки BAUERFEIND ErgoPad Weightflex 2",
    ErgoPadReduxHeel = "Стельки BAUERFEIND ErgoPad Redux heel 2",
    ErgoPadReduxHallux = "Стельки ErgoPad Redux Hallux",
    SolaMedSoftProtect = "Стельки ORTMANN SolaMed Soft Protect",
    ErgoPadRunAndWalk = "Стельки BAUERFEIND ErgoPad Run&Walk",
    ErgoPadBallAndRack = "Стельки BAUERFEIND ErgoPad Ball&Racket",
    SolaMedLeader = "Стельки ORTMANN SolaSport Leader",
    SolaMedFavora = "Стельки ORTMANN SolaPro Favora",
    SolaMedSupra = "Стельки ORTMANN_SolaMed Supra",
    SolaMedSpira = "Стельки ORTMANN SolaPro Spira",
    ErgoPadSkiSkate = "Стельки BAUERFEIND ErgoPad Ski&Skate",
    Citius = "Стельки ORTMANN SolaSport Citius",
    SolaMedMinima = "Полустельки ORTMANN SolaMed Minima",
    SolaMedPrima = "Полустельки ORTMANN SolaPro Prima",
    SolaMedElegant = "Стельки ORTMANN SolaPro Elegant",
    SolaProLana = "Стельки ORTMANN SolaPro Lana",
    SolaMedFortius = "Стельки ORTMANN SolaSport Fortius",
    SolaMedDynamic = "Стельки AUERFEIND ViscoSpot",
    GlobotecJunior = "Стельки Globotec Junior",
    SolaMedJoy = "Стельки SolaMed Joy",
    SolaMedBasic = "Стельки SolaMed Basic",
    SolaMedLeo = "Стельки SolaMed Leo",
    SolaMedReplet = "Стельки SolaMed Replet",
    SolaMedRondo = "Стельки SolaMed Rondo",
    ViscoSpot = "Стельки ViscoSpot",
    ViscoBalance = "Стельки Visco Balance"
}

export interface TypesOfInsoles {
    number: InsolesNumberList,
    name: InsolesNameList
}

export type QuestionnaireDataParams = Omit<AnswersStore, "purpose">

export type QuestionnaireDataController = (answersStore: QuestionnaireDataParams) => TypesOfInsoles[] | void;