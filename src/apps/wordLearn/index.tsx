import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { makeStyles } from "@fluentui/react-components";
import { fetchItems, selectItems } from "./index.model";
import Item from "./component/Item";

const VideoComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    useEffect(() => {
        const word = "instinct"; // Example word
        dispatch(fetchItems(word));
    }, [dispatch]);

    useEffect(() => {
        // Fetch the items
        console.log(items);
    }, [items]);
    return (
        <div>
            asd
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

const VideoPage: React.FC = () => {
    const styles = useStyles();
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    // useEffect(() => {
    //     const word = "instinct"; // Example word
    //     dispatch(fetchItems(word));
    // }, []);

    useEffect(() => {
        // Fetch the items
        console.log(items);
        console.log(items.length);
    }, [items]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >
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
