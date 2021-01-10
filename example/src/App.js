import React, { useState } from 'react';

import { OpenCageSearch } from 'react-opencage-search';
import 'react-opencage-search/dist/index.css';

const OPENCAGE_API_KEY_TEST = '6d0e711d72d74daeb2b0bfd2a5cdfdba';

const App = () => {

  const [apiKey, setApiKey] = useState(OPENCAGE_API_KEY_TEST)
  const handleChangeApiKey = (e)=>{
    setApiKey(e.target.value)
  }
  return (
    <section class="section">
 <div class="container">
 <div class="field">
  <div class="control">
     <input name="api_key" class="input is-primary" type="text"  placeholder="Your API Key" value={apiKey} onChange={handleChangeApiKey} />
     </div>
</div>
    <OpenCageSearch
      name={'address'}
      className="input is-info"
      placeholder={'Address ord coordinates'}
      apiKey={OPENCAGE_API_KEY_TEST}
    />

 </div>

    </section>

  );
};

export default App;
