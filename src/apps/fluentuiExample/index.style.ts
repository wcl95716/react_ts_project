
import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        ...shorthands.gap("2px"),
        maxWidth: "400px",
      },
  dropdown:{
    width: "30rem",
  }

});