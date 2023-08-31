import {DefineTag} from "@/components/text/model/Text.types";


export const defineTextTag = ({tag, children, cls}: DefineTag) => {

    switch (tag){
        case "h1":
            return <h1 className={cls}>{children}</h1>
        case "h2":
            return <h2 className={cls}>{children}</h2>
        case "h3":
            return <h3 className={cls}>{children}</h3>
        case "h4":
            return <h4 className={cls}>{children}</h4>
        case "h5":
            return <h5 className={cls}>{children}</h5>
        case "h6":
            return <h6 className={cls}>{children}</h6>
        case "p":
            return <p className={cls}>{children}</p>
        case "span":
            return <span className={cls}>{children}</span>
    }

}