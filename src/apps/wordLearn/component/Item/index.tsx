import React from "react";
import { makeStyles } from "@fluentui/react-components";
import { DataItem } from "apps/wordLearn/index.type";
import { useStyles } from "./index.style";
import FragmentPlayer from "../FragmentPlayer";

interface ItemProps {
    item: DataItem;
}
// Helper function to convert time format to seconds
const calculateSeconds = (time: string) => {
    const parts = time.split(":");
    const seconds = parseFloat(parts[2].replace(",", "."));
    return parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + seconds;
};

const Item: React.FC<ItemProps> = ({ item }) => {
    const styles = useStyles();

    return (
        <div className={styles.itemContainer}>
            <div className={styles.description}>
                <h3>
                    English:
                    {item.description.english}
                </h3>
                <p>
                    Chinese:
                    {item.description.chinese}
                </p>
                <p>
                    Japanese:
                    {item.description.japanese}
                </p>
            </div>
            <div className={styles.fragmentContainer}>
                {item.fragments.map((fragment, index) => (
                    // <div className={styles.fragment}>
                    //     <p>
                    //         Sentence:
                    //         {fragment.sentence}
                    //     </p>
                    //     <p>
                    //         Time:
                    //         {fragment.startTime}
                    //         {" "}
                    //         -
                    //         {fragment.endTime}
                    //     </p>
                    //     <video
                    //         className={styles.video}
                    //         src={`${fragment.videoUri}#t=${calculateSeconds(fragment.startTime)},${calculateSeconds(fragment.endTime)}`}
                    //         controls
                    //     >
                    //         <track kind="captions" srcLang="en" src="captions_en.vtt" default />
                    //     </video>
                    // </div>
                    <FragmentPlayer
                        key={`${fragment.videoUri}-${fragment.startTime}`}
                        fragment={fragment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Item;
