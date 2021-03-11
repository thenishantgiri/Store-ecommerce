import * as React from "react";

import { getStorage } from "@/utils/storage";

interface ICalculationReturn {
    handleTotalCalculation: (input: Element[]) => null;
    total: number;
}

const useCalculateTotal = (): ICalculationReturn => {
    const CART_KEY = "cart-products";

    const [ total, setTotal ] = React.useState<number>(() => {
        const products = getStorage(CART_KEY);

        if (products && products.length) {
            return products.map(product => product.price / 100)
                    .reduce((accum, curValue) => accum + curValue);
        } else {
            return 0;
        }
    });

    const handleTotalCalculation = (input: Element[]) => {
        if (!input.length) {
            setTotal(0);
            return null;
        } else {
            const currentTotal = input.map(element => parseFloat(element.textContent!.replace("Total: €", "")))
            .reduce((accum, curValue) => accum + curValue, 0);

            setTotal(currentTotal);
            return null;
        }
    };

    return {
        handleTotalCalculation,
        total
    };
};

export default useCalculateTotal;