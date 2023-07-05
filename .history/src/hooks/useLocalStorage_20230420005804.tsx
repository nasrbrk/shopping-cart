import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue == null) {
            return typeof intialValue === 'function' ? intialValue() : intialValue
        }

    })
}