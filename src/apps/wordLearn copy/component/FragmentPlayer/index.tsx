import React, { useState } from "react";
import {
    Dialog, DialogTrigger, DialogContent, DialogTitle,
    Button,
} from "@fluentui/react-components";
import { Fragment } from "apps/wordLearn/index.type";

interface FragmentPlayerProps {
    fragment: Fragment;
}

const FragmentPlayer: React.FC<FragmentPlayerProps> = ({ fragment }) => {
    const [isOpen, setIsOpen] = useState(false);

    const calculateSeconds = (time: string) => {
        const parts = time.split(":");
        const seconds = parseFloat(parts[2].replace(",", "."));
        return parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + seconds;
    };

    const fragmentUrl = `${fragment.videoUri}#t=${calculateSeconds(fragment.startTime)},${calculateSeconds(fragment.endTime)}`;

    return (

        <Dialog open={isOpen} onOpenChange={(event, data) => setIsOpen(data.open)}>
            <DialogTrigger>
                <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{fragment.sentence}</DialogTitle>
                {/* // eslint-disable-next-line jsx-a11y/media-has-caption */}
                {/* <video controls autoPlay style={{ width: "100%" }}>
                    <source src={fragmentUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exercitationem cumque repellendus eaque est dolor eius expedita
                    nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                    in natus iure cumque eaque?
                </DialogContent>
            </DialogContent>
        </Dialog>

    );
};

export default FragmentPlayer;
