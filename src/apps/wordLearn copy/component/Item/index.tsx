import React, { useState } from "react";
import { DataItem } from "apps/wordLearn/index.type";
import { useStyles } from "./index.style";
import FragmentPlayer from "../FragmentPlayer";

interface ItemProps {
    item: DataItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const { fragments, description } = item;

    return (
        <div>
            {
                fragments.map((fragment) => (
                    <FragmentPlayer
                        fragment={fragment}
                        key={`${fragment.videoUri}-${fragment.startTime}`}
                    />
                ))
            }
        </div>
    );
};

export default Item;
