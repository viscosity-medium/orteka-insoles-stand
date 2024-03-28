import {VStack} from "@/components/flexStack";
import {Text} from "@/components/text";
import {Image} from "@/components/image";
import insolePhoto from "../../../assets/insole-photo.png"
import {InsoleCardProps} from "@/components/insoleCard/model/InsoleCard.types";
import cls from "./InsoleCard.module.scss";

const InsoleCard = ({
    name,
    number
}: InsoleCardProps) => {

    return (
        <VStack
            justify={"start"}
            align={"center"}
            className={cls.cardWrapper}
        >
            <Text
                tag={"h3"}
                className={cls.title}
            >
                {
                    `№${number}`
                }
            </Text>
            <img
                src={insolePhoto.src}
                alt={"insole-photo.png"}
                className={cls.insoleImage}
            />
            <Text
                tag={"p"}
                className={cls.description}
            >
                {
                    `${name}`
                }
            </Text>
        </VStack>
    );

};

export {InsoleCard};