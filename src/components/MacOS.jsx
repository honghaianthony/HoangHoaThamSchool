import React from "react";
import "@fontsource/arvo";

const css = `
.outer {
    background: #b4b4b4;
    opacity: 0.9;
    width: 560px;
    padding: 10px;
    border-radius: 14px 14px 0px 0px;
}

.yosemite {
    background: #1e1e1e;
}

.dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #f9f9f9;
    border-radius: 50%;
    margin: 0 4px 0 0;
}

.red {
    background: #ff6057;
    border: 1px solid #e14640;
}
.amber {
    background: #ffbd2e;
    border: 1px solid #dfa123;
}
.green {
    background: #27c93f;
    border: 1px solid #1dad2b;
}
.img-info img{
    border-radius: 0px 0px 14px 14px;
}
.arvo {
    font-family: "Arvo", serif;
}
`;

const MacOS = ({ children, title }) => {
    return (
        <section>
            <style>{css}</style>
            <div className="flex flex-col">
                <div className="outer yosemite flex space-x-44">
                    <div>
                        <div className="dot red"></div>
                        <div className="dot amber"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="text-[#EBEBF5] arvo">{title}</div>
                </div>
                <div className="img-info">{children}</div>
            </div>
        </section>
    );
};

export default MacOS;
