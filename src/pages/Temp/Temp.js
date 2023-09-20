import React, { useState } from 'react';
import Table from '../../components/Templates/Table/Table';
import FreeText from '../../components/Templates/FreeText/FreeText';
import CheckBox from '../../components/Templates/CheckBox/CheckBox';
import LinearScale from '../../components/Templates/linearScale/LinearScale';
import Group from '../Group/Group';

export default function Temp() {
    const [freeTextData, setFreeTextData] = useState({
        title: ':שם החניך',
        value: ''
    })

    const [checkBox, setCheckBox] = useState({
        title: ':התייחסות החניך',
        questions: [
            {title: 'מסכים', value: false},
            {title: 'מסכים חלקית', value: false},
            {title: 'לא מסכים', value: false},
        ]
    })

    const tableData = {
        name: 'test',
        type: 'course',
        titles: ['שם המבחן', 'תאריך', 'אחוז מהציון הסופי','ציון'],
        questions: ['','', '','','']
    }

    const [scaleData, setScaleData]= useState({
        scale: [
            {
            number: 1,
            value: false
        },
        {
            number: 2,
            value: false
        },
        {
            number: 3,
            value: false
        },
        {
            number: 4,
            value: false
        },
        {
            number: 5,
            value: false
        }]
    })


    return(
        <> 
            <Group />
            <Table data={tableData} /> 
            <FreeText data={freeTextData} setData={setFreeTextData} /> 
            <CheckBox data={checkBox} setData={setCheckBox} />
            <LinearScale data={scaleData} setData={setScaleData}/>
        </>
    )
}