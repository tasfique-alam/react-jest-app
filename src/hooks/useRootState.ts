import React from 'react';
import {useAppSelector} from "@/hooks/useAppSelector";

export const useRootState = () => {
    return useAppSelector((state) => state);
};
