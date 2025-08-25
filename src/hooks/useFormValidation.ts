import { useState, useEffect } from "react";
import type { InputAtt } from "@/types";


export const useFormValidation = (input: InputAtt[]) => {
    const [form, setForm] = useState(input.map((values) => values?.value ?? ''))
    const [formIsValid, setFormIsValid] = useState<boolean>(false)

    useEffect(() => {
         const allFieldsIsValid = form.every((value, index) => {
            if(input[index]?.type === 'email') {
                return /\S+@\S+\.\S+/.test(String(value))
            }
            if(input[index]?.type === 'password') return String(value).length > 7
            return true
         })
         setFormIsValid(allFieldsIsValid)
    }, [form, input])

    const handleChange = (index: number, value:string):void => {
        setForm((prevValue) => {
            const newValues = [...prevValue]
            newValues[index] = value
            return newValues 
        })
    }

    return  { formIsValid, handleChange, form }
}