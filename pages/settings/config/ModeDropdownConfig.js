import { ModeTypes } from "../../../common/enums";
import { HeaderImageSources } from "../../../common/components/header/ImageSources";

export const ModeDropdownConfig = [
    {
        id: ModeTypes.Available,
        imgSrc: HeaderImageSources.availableSrc,
        text: 'Available'
    },
    {
        id: ModeTypes.DoNotDisturb,
        imgSrc: HeaderImageSources.notDisturbSrc,
        text: 'Do not disturb'
    },
]