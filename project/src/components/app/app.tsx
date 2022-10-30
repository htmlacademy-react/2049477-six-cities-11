import MainPage from '../../pages/main-page/main-page';

type AppRentalProps = {
  rentalOffersNumber: number;
}

function App({rentalOffersNumber}: AppRentalProps): JSX.Element {
  return (
    <MainPage rentalOffersNumber={rentalOffersNumber} />
  );
}

export default App;
