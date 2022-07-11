import React, {useEffect, useState} from 'react';
import {useAppSelector} from "@/hooks";

interface IReduxServiceProps {
    children?: React.ReactNode,
}

const ReduxService: React.FC<IReduxServiceProps> = (props) => {
    const [ready, setReady] = useState(false);
    const state = useAppSelector((state) => state);

    useEffect(() => {
        if (typeof state === "object") {
            setReady(true);
        }
    }, [state]);

    return (
        <React.Fragment>
            {ready && props.children}
        </React.Fragment>
    );
};

export {ReduxService};
