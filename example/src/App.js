import React from 'react'

import { OpenCageSearch } from 'react-opencage-search'
import 'react-opencage-search/dist/index.css'

const App = () => {
  return <OpenCageSearch name={'address'} placeholder={'type an address'} apiKey={'4372eff77b8343cebfc843eb4da4ddc4'} />
}

export default App
