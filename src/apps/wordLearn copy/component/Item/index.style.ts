import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
    itemContainer: {
        width: "100%",
        ...shorthands.border("1px", "solid", "#ccc"),
        ...shorthands.padding("20px"),
        backgroundColor: "#f3f2f1",
        marginBottom: "10px",
    },
    description: {
        marginBottom: "10px",
    },
    fragmentContainer: {
        marginTop: "10px",
    },
    fragment: {
        marginBottom: "10px",
        "&:hover": {
            backgroundColor: "#e0e0e0",
        },
    },
});
