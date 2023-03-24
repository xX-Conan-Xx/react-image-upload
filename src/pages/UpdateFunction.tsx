import React, { useState } from 'react';
import axios from "axios";

function UpdateFunction() {
  const [uuid, setUuid] = useState('');
  const [status, setStatus] = useState<{ endpoint: string, status: number }>({ endpoint: '', status: -1 });
  const [file, setFile] = useState<File | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [infoLink, setInfoLink] = useState('');
  const [isLoading, setIsLoading] = useState(false); // new loading state variable

  const handleUuidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUuid(event.target.value);
  };

  const handleGetStatus = async () => {
    setIsLoading(true); // set loading state to true
    const res = await axios.post("https://faas-be.cyifan.dev/faas/getStatus", {"uuid" : uuid });
    const endpoint = res.data['functionEndpoint'];
    const status = res.data.status;
    setStatus({ endpoint, status });
    console.log(status)
    setIsLoading(false); // set loading state to false
    if (status!=3&&status!=4){
      alert("UUID is not accessible!!!")
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploadStatus('Deploying...');

    const formData = new FormData();
    formData.append('file', file, uuid+".zip");

    fetch(`https://faas-be.cyifan.dev/faas/uploadCode`, {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => {
        setStatusCode(res.status);
        console.log(res.status);
        if (res.status === 200) {
          setUploadStatus('Great! Your file has been Transferred.\nDeploying ...');
          var st = -2;
          while(st!==3 && st!==4){
            await handleGetStatus()
            st = status.status
            console.log(status.status)
            await new Promise(resolve => setTimeout(resolve, 5000));
          }
          setUploadStatus('The deploying is finished')
        } else {
          setUploadStatus('The deploying has failed.');
        }
      })
      .catch((err) => {
        console.error(err);
        setUploadStatus('The deploying has failed.');
      });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-start h-100">
      <h1 className="my-4 text-center">Update your function here</h1>
      <div className="mb-3">
        <label htmlFor="uuid-input" className="form-label">
          Please enter your UUID:
        </label>
        <input type="text" className="form-control" id="uuid-input" value={uuid} onChange={handleUuidChange} />
      </div>
      <button className="btn btn-primary" onClick={handleGetStatus} disabled={!uuid}>
        Get Info
      </button>
      {(status.status == 3 || status.status == 4) && (
        <div className="mt-4">
          <h4>Upload Code:</h4>
          <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
          <button className="btn btn-primary mt-2" onClick={handleUpload} disabled={!file}>
            Upload
          </button>
          {uploadStatus && 
            (
              <div className="mt-4">
                <h5>Your uploading status:</h5>
                <p>{uploadStatus}</p>
              </div>
            )
          }
          {uploadStatus === 'The deploying is finished' && (
            <div className="mt-4">
              <h5>Function URL:</h5>
              <p>{infoLink}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}  

export default UpdateFunction