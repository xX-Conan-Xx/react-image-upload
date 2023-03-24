// import React,{ useState }  from 'react';
// import './App.css';

// function App() {
//   const [filebase64,setFileBase64] = useState<string>("")
//   const [uuid,setUuid] = useState<string>("")
  
//   let formData = new FormData();    //formdata object
  
  


//   function formSubmit(e: any) {
//     e.preventDefault();
//     // Submit your form with the filebase64 as 
//     // one of your fields
//     console.log({filebase64})
//     handleUploadClick()
//     alert("here you'd submit the form using\n the filebase64 like any other field")
//   }

//   // The Magic all happens here.
//   function convertFile(files: FileList|null) {
//     if (files) {
//       const fileRef = files[0] || ""
//       formData.append('key', 'file');   //append the values with key, value pair
//       // formData.append('value', fileRef);
//       console.log('fileRef ' + fileRef)
//       console.log(formData)
//       const fileType: string= fileRef.type || ""
//       console.log("This file upload is of type:",fileType)
//       const reader = new FileReader()
//       reader.readAsBinaryString(fileRef)
//       // console.log(`File name: ${fileRef.name}`); // e.g my.png
//       // console.log(`Last modified: ${fileRef.lastModified}`); // e.g 1552830408824
//       reader.onload=(ev: any) => {
//         // convert it to base64
//         setFileBase64(`${btoa(ev.target.result)}`)
//         // setFileBase64('/Users/zhouzeyu/Downloads/a28ac109-7f29-49d2-8c66-0dd693f78704.zip')
//       }
//       formData.append('value', filebase64);
      
//     }
//   }

//   const handleUploadClick = () => {
//     if (!filebase64) {
//       return;
//     }
//     console.log('formdata' + formData)
//     // 👇 Uploading the file using the fetch API to the server
//     fetch('https://faas-be.cyifan.dev/faas/uploadCode', {
//       method: 'POST',
//       body:formData
      
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   };
//   const handleCreateNew = () => {

//     // 👇 Uploading the file using the fetch API to the server
//     fetch('https://faas-be.cyifan.dev/faas/new', {
//       method: 'POST',
//       body: filebase64, //
//       // 👇 Set headers manually for single file upload
//       // headers: {
//       //   'content-type': filebase64.type,
//       //   'content-length': `${filebase64.size}`, // 👈 Headers need to be a string
//       // },
//     })
//       .then((res) => res.json())
//       .then((data) => data['uuid'])
//       .then((data) => setUuid(data))
//       .catch((err) => console.error(err));

//     alert(uuid)
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         Create a new UUID
//       <button type="button" onClick={handleCreateNew} >Create!</button>
//         Choose an image to to upload
//         <form onSubmit={formSubmit}>
//           <input type="file" onChange={(e)=> convertFile(e.target.files)} />
//           <hr />
//           { filebase64 &&
//             <>
//             <p>
//               It's ready to be submitted!<br />
//               Simply include the 'filebase64' variable<br /> 
//               as one of the things you submit</p>
            
          
//             {/* if it's an image */ }
//             {/* if it's an image */ }
//             {/* if it's an image */ }
//             {(filebase64.indexOf("image/") > -1) && 
//             <img src={filebase64} width={300} />
//             }
//             {/* if it's an image */ }
//             {/* if it's an image */ }
//             {/* if it's an image */ }


              

//             {/* if it's a video */}
//             {/* if it's a video */}
//             {/* if it's a video */}
//             {(filebase64.indexOf("video/") > -1)  && 
//             <video controls >
//               <source src={filebase64} />
//             </video>
// }
//             {/* if it's a video */}
//             {/* if it's a video */}
//             {/* if it's a video */}
 
              
              
 
//             {/* if it's a audio (music, sound) */}
//             {/* if it's a audio (music, sound) */}
//             {/* if it's a audio (music, sound) */}
//               {(filebase64.indexOf("audio/") > -1)  && 
//               <audio controls >
//                 <source src={filebase64} />
//               </audio>
//              }
//             {/* if it's a audio (music, sound) */}
//             {/* if it's a audio (music, sound) */}
//             {/* if it's a audio (music, sound) */}
 

//             {/* if it's a PDF */}
//             {/* if it's a PDF */}
//             {/* if it's a PDF */}
//             {(filebase64.indexOf("application/pdf") > -1)  && 
//              <embed src={filebase64} width="800px" height="2100px" />
//              }
//             {/* if it's a PDF */}
//             {/* if it's a PDF */}
//             {/* if it's a PDF */} 


              
              
              
//             <hr />
//             <button> Submit and check the console</button>
            
//             </>
//           }
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const newFile = event.dataTransfer.files[0];
//     setFile(newFile);
//   };

//   const handleFileUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file as File);
//     try {
//       const response = await axios.post("https://faas-be.cyifan.dev/faas/uploadCode", formData);
//       console.log(response.data);
//       console.log('here')
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div
//       onDrop={handleFileDrop}
//       onDragOver={(event) => event.preventDefault()}
//     >
//       {file ? (
//         <div>
//           <p>Selected file: {file.name}</p >
//           <button onClick={handleFileUpload}>Upload</button>
//         </div>
//       ) : (
//         <p>Drag and drop a file here</p >
//       )}
//     </div>
//   );
// };

// export default FileUpload;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreateNew from './pages/CreateNew';
import UpdateFun from './pages/UpdateFunction';
import DeleteFun from './pages/DeleteFunction';
import GetLink from './pages/GetLink';

function App() {
  return (
    <Router>
      <Layout pageTitle="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/update" element={<UpdateFun />} />
          <Route path="/delete" element={<DeleteFun />} />
          <Route path="/get" element={<GetLink />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
