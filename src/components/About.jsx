import React from "react";

export default function About ({ image }) {
    return (
        <>
        <aside>
            <img src={image} alt="blog logo" />
        </aside>
        </>
    );
}