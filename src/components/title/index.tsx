import { useLink } from "@refinedev/core";
import { Logo } from "./styled";
import { BikeWhiteIcon, FineFoodsIcon } from "components";
import { theme } from "antd";
import Img from "images/crisp.png"

const { useToken } = theme;

type TitleProps = {
    collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { token } = useToken();
    const Link = useLink();

    return (
        <Logo>
            <Link to={"/"}>
            <img src ={Img} />  
            </Link>  
        </Logo>
    );
};
