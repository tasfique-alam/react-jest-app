import {ChangeEvent, useEffect, useState} from "react";

export function useInput<T>(initialValue: T, resetValue: any = null) {
    const [value, setValue] = useState<any>(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return {
        value,
        setValue: (text: T) => setValue(text),
        reset: () => setValue(resetValue),
        bind: {
            value,
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
                setValue(e.target.value);
            },
        }
    }
};
