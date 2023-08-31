'use client';

import {VStack} from "@/components/flexStack";
import {Text} from "@/components/text";
import cls from "./page.module.scss";
import {Image} from "@/components/image";
import ClickHand from "@/assets/button-tap-hand.svg";
import {Button} from "@/components/button";
import {Link} from "@/components/link";
import {useRef} from "react";
import {useResetArduinoData} from "@/hooks/useFetchAnswersData";

const Home = () => {

    const linkRef = useRef<HTMLAnchorElement>(null);
    const onButtonClick = () => {
        linkRef.current?.click();
    };

    return (
        <>
            <Button
                buttonSize={"fullSize"}
                onClick={onButtonClick}
            >
                <VStack
                    align={"center"}
                    justify={"center"}
                    className={cls.contentWrapper}
                >
                    <Text
                        tag={"h2"}
                        color={"black"}
                        align={"center"}
                        className={cls.h2}
                    >
                        Подберите себе стельки
                    </Text>
                    <Image
                        src={ClickHand}
                        alt={"click-hand.png"}
                        className={cls.clickHand}
                    />
                    <Text
                        tag={"h3"}
                        color={"orange"}
                        align={"center"}
                        className={cls.h3}
                    >
                        Коснитесь экрана
                    </Text>
                </VStack>
            </Button>
            <Link
                href={"/question/1"}
                reference={linkRef}
            />
        </>


    );

}

export default Home