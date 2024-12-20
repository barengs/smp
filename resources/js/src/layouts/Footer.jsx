import React from "react";

function Footer() {
    return (
        <footer className="mt-auto py-4 bg-white dark:bg-bodybg text-center border-t border-defaultborder dark:border-defaultborder/10">
            <div className="container">
                <span className="text-textmuted dark:text-textmuted/50">
                    Copyright © <span id="year"></span>
                    <a href="javascript:void(0);" className="text-dark font-medium">E-BMP</a>.
                    Developed<span className="text-danger">&#10084;</span> by
                    <a href="javascript:void(0);">
                        <span className="font-medium text-primary"> Barengsaya.Com</span>
                    </a>
                    All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;