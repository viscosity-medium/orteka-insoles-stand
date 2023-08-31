'use client'

import {HStack, VStack} from "@/components/flexStack";
import {InsoleCard} from "@/components/insoleCard";
import {Text} from "@/components/text";
import cls from "./page.module.scss";
import {Button} from "@/components/button";
import {Image} from "@/components/image";
import ClickHand from "@/assets/button-tap-hand-small.svg"
import {Link} from "@/components/link";
import {useRef} from "react";
import {useAppDispatch} from "@/store/store";
import {useFetchAnswersData, useResetArduinoData} from "@/hooks/useFetchAnswersData";
import {onResetButtonClick} from "@/helpers/helpers";
import {useTimeoutPageTransition} from "@/hooks/useTimeoutPageTransition";

const Page = () => {

    const dispatch = useAppDispatch();
    const results = useFetchAnswersData();
    const timeoutId = useTimeoutPageTransition();
    const linkRef = useRef<HTMLAnchorElement>(null);

    return (
        <>
            <VStack
                justify={"between"}
                className={cls.contentWrapper}
            >
                <VStack>
                    <Text
                        tag={"h2"}
                        className={cls.title}
                        color={"white"}
                    >
                        Возьмите стельку
                    </Text>
                    <HStack
                        justify={"between"}
                    >
                        {
                            results?.map((cardInfo) => (
                                <InsoleCard
                                    key={`${cardInfo.name}__${cardInfo.name}`}
                                    number={cardInfo.number}
                                    name={cardInfo.name}
                                />
                            ))
                        }
                    </HStack>
                </VStack>
                <Button
                    buttonSize={"small"}
                    onClick={ () => {
                        onResetButtonClick({dispatch, linkRef, timeoutId });
                    }}
                    className={cls.backButton}
                >
                    <HStack justify={"center"}>
                        <Text
                            tag={"h3"}
                            className={cls.backButtonText}
                        >
                            Подобрать снова
                        </Text>
                        <Image
                            src={ClickHand}
                            width={44}
                            alt={"go-back.png"}
                            className={cls.backButtonImage}
                        />
                    </HStack>
                </Button>
            </VStack>
            <Link
                reference={linkRef}
                href={"/"}
            />
        </>
    );
};

export default Page;