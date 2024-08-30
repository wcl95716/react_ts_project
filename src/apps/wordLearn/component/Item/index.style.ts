import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    itemContainer: {
        width: "80%",
        ...shorthands.border("1px", "solid", "#ccc"),
        ...shorthands.padding("20px"),
        backgroundColor: "#f3f2f1",
    },
    description: {
        marginBottom: "20px",
    },
    fragmentContainer: {
        marginTop: "10px",
    },
    fragment: {
        marginBottom: "10px",
    },
    video: {
        marginTop: "10px",
        width: "100%",
    },
});
