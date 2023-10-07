import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EquationForm from './EquationForm';
import GraphDisplay from './GraphDisplay';
import mydata from './data';
import './Formula.css';
import GraphInformation from './GraphInformation';
const FormulaPage = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const [allData, setAllData] = useState(mydata);
  const [data, setData] = useState({});
  const [mode, setMode] = useState("Dynamic")
  let toggle_mode = () => {
    setMode(mode == "Dynamic" ? "Performance" : "Dynamic")
  }
  useEffect(() => {
    for (let i = 0; i < allData.length; i++) {
      if (currentURL.includes(allData[i].url)) {
        setData(allData[i]);
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pt-3 pb-5">
      <header className="headerFormula">
        {/* <svg className='top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(240,248,255)" fill-opacity="1" d="M0,288L34.3,272C68.6,256,137,224,206,218.7C274.3,213,343,235,411,224C480,213,549,171,617,128C685.7,85,754,43,823,58.7C891.4,75,960,149,1029,154.7C1097.1,160,1166,96,1234,64C1302.9,32,1371,32,1406,32L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <svg className='bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(240,248,255)" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,96C560,85,640,139,720,170.7C800,203,880,213,960,218.7C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        <section className="intro">
          <h1 className="FormulaH1">{data.formula_name}</h1>
          <p className='FormulaP'>Page by Dr Slade Matthews, The University of Sydney, 2023</p>
          <div className=''>
            {data.top_paragraph}
          </div>
        </section>
      </header>
      <div className=''>
        <div className='mt-5'>
              {data.data ? (
                <div className='bg-light p-3'>
                  <div className='row'>
                    <div className=''>
                      <h1>Interactive Data Visualization</h1>
                      <div className='btn btn-primary d-inline-block' onClick={toggle_mode}>Mode : {mode}</div>
                    </div>
                    <EquationForm data={data.data} setData={setData} mode={mode} />
                    <GraphDisplay variables={data.data.variables} equation={data.data.equation} isMulipleOralDosing={data.data && data.url && data.url.includes("multiple")} />
                  </div>
                </div>
              ) : (
                // If data is null or undefined
                <p>Loading...</p>
              )}
            
          
        </div>
      </div>
      
    </div>
  );
};

export default FormulaPage;
