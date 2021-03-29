import React, { ReactElement, useContext, useState } from "react";
import { CanvasDrawContext } from "../Context/CanvasDraw/CanvasDrawContext";
import ColorPicker from "./ColorPicker";
import Column from "./Position/Column";
import Spacer from "./Position/Spacer";
import TopBar from "./TopBar";
import Button from "./UI/Button";
import SliderBar from "./UI/SliderBar";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SvgIcon from "@material-ui/icons/ArrowBack";
import Row from "./Position/Row";

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
    const { brushRadius, changeBrushRadius } = useContext(CanvasDrawContext);
    const [active, setActive] = useState(true);

    const hideMenu: ReactElement = (
        <div>
            <Button
                onClick={() => {
                    setActive((currentState) => {
                        return !currentState;
                    });
                }}
            >
                {active ?  <SvgIcon component = {ArrowBackIcon} />  : <SvgIcon component = {ArrowForwardIcon} />}
            </Button>
        </div>
    );

    return (
        <div
            style={{
                backgroundColor: "rgba(99,44,147, 0.4)",
                position: "fixed",
                zIndex: 100,
                left: "5%",
                top: active ? "10%" : "13%",
                borderRadius:"5%",
                padding: 20
            }}
        >
            {active ? (
                <Column>
                    <Row>
                        {hideMenu}
                        <TopBar />
                    </Row>
                    <SliderBar text="Grosor del pincel: " value={brushRadius} onChange={changeBrushRadius} />
                    <Spacer height={20}  />
                    <ColorPicker />
                    <Spacer height={20} />
                    <Spacer height={20} />
                </Column>
            ) : (
                hideMenu
            )}
        </div>
    );
};
export default Menu;
