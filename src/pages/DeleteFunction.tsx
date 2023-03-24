import React, { useState } from 'react';
import axios from "axios";

function DeleteFunction() {
  const [uuid, setUuid] = useState('');
  const [status, setStatus] = useState<{ endpoint: string, status: number }>({ endpoint: '', status: -1 });

  const handleUuidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUuid(event.target.value);
  };

  const handleGetStatus = async () => {
    const res = await axios.post("https://faas-be.cyifan.dev/faas/delete", {"uuid" : uuid });
    console.log(res)
    const endpoint = res.data['functionEndpoint'];
    const status = res.data.status;
    setStatus({ endpoint, status });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-start h-100">
      <h1 className="my-4 text-center">Delete your function here</h1>
      <div className="mb-3">
        <label htmlFor="uuid-input" className="form-label">
          Please enter your UUID:
        </label>
        <input type="text" className="form-control" id="uuid-input" value={uuid} onChange={handleUuidChange} />
      </div>
      <button className="btn btn-primary" onClick={handleGetStatus} disabled={!uuid}>
        Get Info
      </button>
      {status.status !== -1 && (
        <div>
          <p>Endpoint: {status.endpoint}</p>
          <p>Status: {status.status}</p>
        </div>
      )}
    </div>
  );
}

export default DeleteFunction;
