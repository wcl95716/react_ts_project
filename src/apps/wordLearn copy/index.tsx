import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { makeStyles } from "@fluentui/react-components";
import { fetchItems, selectItems } from "./index.model";
import Item from "./component/Item";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

// Helper function to convert time format to seconds
const calculateSeconds = (time: string) => {
    const parts = time.split(":");
    const seconds = parseFloat(parts[2].replace(",", "."));
    return parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + seconds;
};

const VideoPage: React.FC = () => {
    const styles = useStyles();
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    // useEffect(() => {
    //     const word = "instinct"; // 示例单词
    //     dispatch(fetchItems(word));
    // }, [dispatch]);
    console.log("items", items);
    return (
        <div className={styles.container}>
            {items && items.length > 0 ? (
                items.map((item, index) => (
                    <Item
                        item={item}
                        key={JSON.stringify(item.description)}
                    />
                ))
            ) : (
                <p>Loading...</p> // 或者显示一个加载指示器
            )}
        </div>
    );
};

export default VideoPage;
