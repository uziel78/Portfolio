const loadingPage = () => {
  return (
    <div className='loader'>
      <div className='spinner'></div>
    </div>
  );
};

export default loadingPage;

//note:
//does not load while waiting for client-side  data, without importing (sample below)
// import LoadingPage from '.loading';
// jsx
// return <LoadingPAge>
