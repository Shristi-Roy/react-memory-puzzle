import React from 'react';

export default function AssistiveTechInfo({ emojisData, matchedCards }) {
    return (
        <div aria-live="polite" style={{ position: "absolute", left: "-9999px" }}>
            {matchedCards.length} of {emojisData.length} cards matched.
        </div>
    );
}
