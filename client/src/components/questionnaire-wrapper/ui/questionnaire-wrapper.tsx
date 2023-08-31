import {HStack, VStack} from "@/components/flexStack";
import cls from "./questionnaire-wrapper.module.scss";
import {Image} from "@/components/image";
import AquamarineSpot from "@/assets/spot-aquamarine.svg";
import OrangeSpot from "@/assets/spot-orange.svg";
import {Text} from "@/components/text";
import {QuestionnaireWrapperProps} from "@/components/questionnaire-wrapper/model/questionnaire-wrapper.types";

const QuestionnaireWrapper = ({
    questionText,
    questionNumber,
    children,
    spotType
}: QuestionnaireWrapperProps) => {

    const spot = spotType === "aquamarine" ? AquamarineSpot : OrangeSpot;

    return (
        <VStack>
            <HStack
                align={"center"}
                justify={"center"}
                className={cls.numerationWrapper}
            >
                <Image
                    src={spot}
                    alt={spot.alt}
                    className={cls.spot}
                    position={"absolute"}
                />
                <Text
                    tag={"h2"}
                    className={cls.h2}
                    color={"white"}
                >
                    {
                        `№${questionNumber}`
                    }
                </Text>
            </HStack>
            <Text
                tag={"h2"}
                className={cls.h3}
            >
                {
                    questionText
                }
            </Text>
            <HStack
                justify={"between"}
            >
                {children}
            </HStack>
        </VStack>
    );
};

export {QuestionnaireWrapper};