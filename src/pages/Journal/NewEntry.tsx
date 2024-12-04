import { SelfieInput } from '../../components/customInputs/SelfieInput'

export const NewEntry = () => {
  console.log(navigator.geolocation)
  return (
    <div>
    <form>
      {/*custom inputs here. we want
      start by uploading a selfie
      temple (gets current location and finds nearest temples. if you're too far it will tell you to go closer)
      date (defaults to today)
      

      */}
      <SelfieInput/>
    </form>
    </div>
  )
}
