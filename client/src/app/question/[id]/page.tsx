'use client'

import {ButtonWithImage, getButtonsData} from "@/components/button";
import {Link} from "@/components/link";
import {useRef} from "react";
import {useAppDispatch} from "@/store/store";
import {QuestionnaireWrapper} from "@/components/questionnaire-wrapper/ui/questionnaire-wrapper";
import {useParams} from "next/navigation";
import {definePageContent} from "@/app/question/[id]/page.helpers";
import {useSelector} from "react-redux";
import {getPurpose} from "@/store/reducers/answersData.selectors";
import {useDefineIfNeedExtraLinks} from "@/app/question/[id]/page.hooks";
import { useTimeoutPageTransition } from "@/hooks/useTimeoutPageTransition";

const Page = () => {

    const linkRef = useRef<HTMLAnchorElement>(null);
    const purpose = useSelector(getPurpose);
    const dispatch = useAppDispatch();
    const pid = useParams();
    const timeoutId = useTimeoutPageTransition();
    const {
        questionText, questionNumber,
        nextPageHref, spotType, buttonsDataProperty,
    } = definePageContent({pid, timeoutId});
    const extraData = useDefineIfNeedExtraLinks({pid, timeoutId});
    const buttonsData = getButtonsData({linkRef, dispatch, timeoutId})

    return (
        <>
            <QuestionnaireWrapper
                questionNumber={questionNumber}
                questionText={questionText}
                spotType={spotType}>
                {

                    (buttonsDataProperty !== "activityLevel") ? buttonsData?.[buttonsDataProperty]?.map(buttonData => (
                        <ButtonWithImage
                            key={buttonData.imageDescription}
                            onClick={buttonData.onClickHandler}
                            imageSrc={buttonData.imageSource}
                            imageDescription={buttonData.imageDescription}
                        />

                    )) : buttonsData?.[buttonsDataProperty]?.[purpose!]?.map(buttonData => (
                        <ButtonWithImage
                            key={buttonData.imageDescription}
                            onClick={buttonData.onClickHandler}
                            imageSrc={buttonData.imageSource}
                            imageDescription={buttonData.imageDescription}
                        />
                    ))
                }
                {
                    (extraData?.extraLink &&
                    <ButtonWithImage
                        key={extraData.extraImageDescription}
                        onClick={extraData.onExtraClickHandler}
                        imageSrc={extraData.extraImageSource}
                        imageDescription={extraData.extraImageDescription}
                    />)
                }
            </QuestionnaireWrapper>
            <Link
                reference={linkRef}
                href={nextPageHref}
            />
            {
                extraData?.extraLink &&
                <Link
                    reference={extraData.extraLink}
                    href={extraData.extraNextPageHref}
                />
            }
        </>
    );
};

export default Page;