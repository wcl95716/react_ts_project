import React, { useState } from "react";
import {
    Dialog, DialogTrigger, DialogContent, DialogTitle, Button,
    DialogSurface,
    DialogBody,
    DialogActions,
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
        <>
            <div>
                <p>
                    Sentence:
                    {fragment.sentence}
                </p>
                <p>
                    Time:
                    {fragment.startTime}
                    {" "}
                    -
                    {fragment.endTime}
                </p>
            </div>

            <Dialog
                modalType="modal"
            >
                <DialogTrigger disableButtonEnhancement>
                    <Button>Open dialog</Button>
                </DialogTrigger>
                <DialogSurface>
                    <DialogBody>
                        <DialogTitle>Video Playback</DialogTitle>
                        <DialogContent>
                            <video
                                style={{
                                    width: "500px", // 设置视频宽度
                                    height: "auto", // 保持16:9的宽高比
                                    borderRadius: "8px",
                                }}
                                controls
                                autoPlay
                            >
                                <source src={fragmentUrl} type="video/mp4" />
                                <track kind="captions" srcLang="en" src="captions_en.vtt" default />
                                Your browser does not support the video tag.
                            </video>
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button appearance="primary">Do Something</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>

        </>
    );
};

export default FragmentPlayer;
