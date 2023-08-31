'use client'

import {HStack, VStack} from "@/components/flexStack";
import {Text} from "@/components/text";
import cls from "./page.module.scss";
import {Button} from "@/components/button";
import {Image} from "@/components/image";
import ClickHand from "@/assets/button-tap-hand-small.svg"
import {Link} from "@/components/link";
import {useRef} from "react";
import {useAppDispatch} from "@/store/store";
import ConsultantImage from "@/assets/consultant.png";
import {onResetButtonClick} from "@/helpers/helpers";
import { useTimeoutPageTransition } from "@/hooks/useTimeoutPageTransition";
import { useResetArduinoData } from "@/hooks/useFetchAnswersData";

const Page = () => {

    const dispatch = useAppDispatch();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const timeoutId = useTimeoutPageTransition();

    return (
        <>
            <VStack
                justify={"between"}
                className={cls.contentWrapper}
            >
                <Image
                    src={ConsultantImage}
                    alt={"consultant.png"}
                    className={cls.consultantImage}
                />
                <Text
                    tag={"h2"}
                    className={cls.h2}
                    color={"black"}
                >
                   Обратитесь к консультанту в салоне
                </Text>
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