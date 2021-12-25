import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import SideBar from '../../sideBar/sideBar'
import  AccessMana from '../../Content/AccessMana/AccessMana';
import  Analysis from '../../Content/Analysis/Analysis';
import  AreaMana from '../../Content/AreaMana/AreaMana';
import  InputData from '../../Content/InputData/InputData';
import  ListData from '../../Content/ListData/ListData';
import  LookUp from '../../Content/LookUp/LookUp';
import  News from '../../Content/News/News';
import Tintuc from '../../Content/Tintuc/Tintuc';

export default function NewEst() {
    return (
        <div className='nes'>
            <SideBar/>
            <Routes>
                <Route path='AccessManagement' element={<AccessMana/>}/>
                <Route path='Analysis' element={<Analysis/>}/>
                <Route path='AreaManagement' element={<AreaMana/>}/>
                <Route path='InputData' element={<InputData/>}/>
                <Route path='ListData' element={<ListData/>}/>
                <Route path='LookUp' element={<LookUp/>}/>
                <Route exact path='News' element={<News/>}/>
                <Route path='News/*' element={<Tintuc/>}/>
            </Routes>
                
        </div>
    )
}



