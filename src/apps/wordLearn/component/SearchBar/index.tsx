import { Button } from "@fluentui/react-components";
import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim()) {
            onSearch(inputValue.trim());
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            onSearch(inputValue.trim());
        }
    };

    return (
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter a word"
                style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
            />
            <Button onClick={handleSearch} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
