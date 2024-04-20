import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loadingg">
      <LoadingBar style={{ backgroundColor: 'white', height: '4px' }} />
    </div>
  );
}

export default Loading;
