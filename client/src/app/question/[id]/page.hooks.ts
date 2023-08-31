import ArchNoInfo from "@/assets/button-arch-no-info.svg";
import {useRef} from "react";
import {onButtonWithImageClick} from "@/components/button/model/button.helpers";
import {useAppDispatch} from "@/store/store";
import {DefinePageContentProps} from "@/app/question/[id]/page.types";

export const useDefineIfNeedExtraLinks = ({pid, timeoutId}: DefinePageContentProps) => {

    const extraLinksPagesArray = [3];

    if( extraLinksPagesArray.includes(+pid.id) ){

        const dispatch = useAppDispatch();
        const extraLink = useRef<HTMLAnchorElement>(null)

        return {
            extraLink,
            extraNextPageHref: "/consultant",
            onExtraClickHandler: () => {
                onButtonWithImageClick({linkRef: extraLink, dispatch, footType: "noInfo", timeoutId});
            },
            extraImageSource: ArchNoInfo,
            extraImageDescription: "button-arch-no-info.svg"
        };

    }

};
