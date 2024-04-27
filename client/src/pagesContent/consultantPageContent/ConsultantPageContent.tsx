'use client'

import { useAppDispatch } from "@/store/store";
import { useRef } from "react";
import { useTimeoutPageTransition } from "@/hooks/useTimeoutPageTransition";
import { HStack, VStack } from "@/components/flexStack";
import cls from "@/app/consultant/page.module.scss";
import { Image } from "@/components/image";
import ConsultantImage from "@/assets/consultant.png";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { onResetButtonClick } from "@/helpers/helpers";
import ClickHand from "@/assets/button-tap-hand-small.svg";
import { Link } from "@/components/link";

const ConsultantPageContent = () => {
    const dispatch = useAppDispatch();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const timeoutId = useTimeoutPageTransition();

    return (
        <>
            <VStack
                justify={"between"}
                className={cls.contentWrapper}
            >
                <img
                    src={ConsultantImage.src}
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
}

export default ConsultantPageContent;