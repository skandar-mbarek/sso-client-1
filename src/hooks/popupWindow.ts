interface Props {
    height?: number;
    width?: number;
    link: string;
}
export default function popupWindow({
                                        height = 724,
                                        width = 400,
                                        link,
                                    }: Props) {
    const wTop = window.screenTop ? window.screenTop : window.screenY;
    const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
    return window?.open(
        `${link!}`,
        "_blank",
        `resizable=no, height=${height}, width=${width}, top=${
            // eslint-disable-next-line no-restricted-globals
            wTop + screen.height / 2 - height / 2
            // eslint-disable-next-line no-restricted-globals
        }, left=${wLeft + screen.width / 2 - width / 2}`,
    );
}