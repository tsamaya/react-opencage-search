import React, { useState } from 'react';

import { OpenCageSearch } from 'react-opencage-search';
// import 'react-opencage-search/dist/index.css';
import Header from './components/Header';

const OPENCAGE_API_KEY_TEST = '6d0e711d72d74daeb2b0bfd2a5cdfdba';

const App = () => {
  const [apiKey, setApiKey] = useState(OPENCAGE_API_KEY_TEST);
  const handleChangeApiKey = (e) => {
    setApiKey(e.target.value);
  };
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Your API Key</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    name="api_key"
                    className="input is-primary"
                    type="text"
                    placeholder="Your API Key"
                    value={apiKey}
                    onChange={handleChangeApiKey}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Search on blur */}
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Input search on blur</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <OpenCageSearch
                    name={'address'}
                    className="input is-info"
                    placeholder={'Address'}
                    apiKey={OPENCAGE_API_KEY_TEST}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ./container */}
        </div>
      </section>
    </>
  );
};

export default App;
