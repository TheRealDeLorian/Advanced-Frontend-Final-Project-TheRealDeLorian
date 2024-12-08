import { useState } from 'react';
import { Visit } from '../../data/Visit';
import TextInput from '../../components/customInputs/TextInput';

export const NewEntry = () => {
  const [visit, setVisit] = useState<Visit>();

  return (
    <div>
    <form>
      {/*custom inputs here. we want
      start by uploading a selfie
      temple (gets current location and finds nearest temples. if you're too far it will tell you to go closer)
      date (defaults to today)
      */}

        <TextInput id="entry" name="entry"  />

    </form>
    </div>
  )
}
