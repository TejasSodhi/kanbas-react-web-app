import SimpleAPIExamples from './SimpleAPIExamples';
import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithObjects from './WorkingWithObjects';
import WorkingWithArrays from './WorkingWithArrays';
function Assignment5() {
  const API_BASE =
    process.env.REACT_APP_API_BASE_LAB || 'http://localhost:4000/a5';
  console.log('ENV VAR', process.env.REACT_APP_API_BASE_LAB);
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${API_BASE}/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
