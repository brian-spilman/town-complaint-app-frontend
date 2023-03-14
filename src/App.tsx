import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditComplaintPage } from './components/edit-complaint-page';
import { CreateComplaintPage } from './pages/create-complaint-page';
import { HomePage } from './pages/home-page';

function App() {

  return <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/createcomplaint' element={<CreateComplaintPage/>} />
        <Route path='/editcomplaint/:complaintId' element={<EditComplaintPage/>} />

      </Routes>
    </BrowserRouter>
  </>

}

export default App;
