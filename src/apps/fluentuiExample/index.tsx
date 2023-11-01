import * as React from "react";
import {
    Dropdown,
    makeStyles,
    Option,
    shorthands,
    useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";
import { useStyles } from "./index.style";

export const Default = (props: Partial<DropdownProps>) => {
    const dropdownId = useId("dropdown-default");
    const options = [
        "Cat",
        "Caterpillar",
        "Corgi",
        "Chupacabra",
        "Dog",
        "Ferret",
        "Fish",
        "Fox",
        "Hamster",
        "Snake",
    ];
    const styles = useStyles();
    return (
        <div className={styles.root}>
            {/* <label id={dropdownId}>Best pet</label> */}
            <Dropdown
                className={styles.dropdown}
                aria-labelledby={dropdownId}
                placeholder="Select an animal"
                {...props}
            >
                {options.map((option) => (
                    <Option key={option} disabled={option === "Ferret"}>
                        {option}
                    </Option>
                ))}
            </Dropdown>
        </div>
    );
};
export default Default;
