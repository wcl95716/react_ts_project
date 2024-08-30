export interface Description {
    english: string;
    chinese: string;
    japanese: string;
}

export interface Fragment {
    startTime: string;
    endTime: string;
    sentence: string;
    videoUri: string;
}

export interface DataItem {
    description: Description;
    fragments: Fragment[];
}

export interface DataState {
    items: DataItem[];
}
