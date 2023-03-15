import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditComplaintPage } from './components/edit-complaint-page';
import { CreateComplaintPage } from './pages/create-complaint-page';
import { CreateMeetingPage } from './pages/create-meeting-page';
import { EditMeetingPage } from './pages/edit-meeting-page';
import { HomePage } from './pages/home-page';
import { MeetingDetailsPage } from './pages/meeting-details-page';

function App() {

  return <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/createcomplaint' element={<CreateComplaintPage/>} />
        <Route path='/createmeeting' element={<CreateMeetingPage/>} />
        <Route path='/editcomplaint/:complaintId' element={<EditComplaintPage/>} />
        <Route path='/editmeeting/:meetingId' element={<EditMeetingPage/>} />
        <Route path='/meetingdetails/:meetingId' element={<MeetingDetailsPage/>} />

      </Routes>
    </BrowserRouter>
  </>

}

export default App;
