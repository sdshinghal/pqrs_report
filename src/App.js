// App.js
import { useEffect } from 'react';
import './App.css';
import CultureTable from './CultureTable';
import dnaHeader from './dnaHeader.png'; 
import plusSign from './plusSign.png'; 

const Header = () => (
  <div className="uti-header">
    <div className="logo-wrapper">
      <div className="uti-logo highlight" data-tooltip="Customisable to add your logo.">
        Your Logo Here
        </div>
        <div className="logo-underline" />
        </div>
      <div className="uti-banner">Infectious Disease Report</div>
      </div>
);

const PatientInfo = () => (
  <div className="columns left-shift">
    <div className="column second-header white-space"></div>
    <div className="column second-header"><p><strong>Patient</strong></p><p><strong>Information</strong></p></div>
    <div className="column second-header"><p>Name:</p><p>ACC:</p></div>
    <div className="column second-header"><p style={{ marginRight: '2rem' }}>John Doe</p><p>TEST1</p></div>
    <div className="column second-header"><p>DOB:</p><p>SEX:</p></div>
    <div className="column second-header"><p>1/1/1969</p><p>Female</p></div>
  </div>
);

const Footer = () => (
  <div className="report-section footer highlight" data-tooltip="Information Specific to Your Lab can be Added Here" >
    <p>
      Laboratory Director: Mark Smith, MD | CLIA: 11A1111111
    </p>
  </div>
);

const Tooltip = () => <div id="tooltip" className="tooltip"></div>;

const App = () => {
  useEffect(() => {
    const tooltip = document.getElementById('tooltip');
    document.querySelectorAll('.highlight').forEach((sec) => {
      sec.addEventListener('mousemove', (e) => {
        const text = sec.getAttribute('data-tooltip');
        tooltip.textContent = text;
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 12 + 'px';
        tooltip.style.top = e.pageY + 12 + 'px';
      });
      sec.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  }, []);

  return (
    <div className="container">
      {/* Page 1 */}
      <div className="page page1">
        <Header />
        <div className='highlight' data-tooltip="The first page of the report contains a summary of the findings and interpretation">

        </div>
        {/* Info Sections */}   
        <div className="info-row highlight" data-tooltip="Reports can be customized to include lab and clinican details as required" >
              {/* Lab Address */}
              <div className="info-block">
                <p>Lab Address Here</p>
                <p>123 Main Street</p>
                <p>Anytown, USA</p>
                <p>CLIA Number: ___</p>
              </div>

              {/* Contact Info */}
              <div className="info-block">
                <p>(000)-111-2222</p>
                <p>contact@companyname.com</p>
                <p>companywebsite.com</p>
                <p>CAP Number: ____</p>
              </div>

              {/* Patient Info */}
              <div className="info-block">
                <p><strong>Patient Information</strong></p>
                <p>Name<span>: John Doe</span></p>
                <p>ACC#<span>: TEST1</span></p>
                <p>DOB<span>: 1/1/1969</span></p>
                <p>Sex<span>: Male</span></p>
              </div>

              {/* Specimen Info */}
              <div className="info-block">
                <p><strong>Specimen Details</strong></p>
                <p>Type<span>: Urine</span></p>
                <p>Collected<span>: 2025-06-15</span></p>
                <p>Received<span>: 2025-06-16</span></p>
                <p>Report Date<span>: 2025-06-18</span></p>
              </div>

              {/* Provider Info */}
              <div className="info-block highlight">
                <p><strong>Provider Information</strong></p>
                <p>Dr. Jane Smith</p>
                <p>General Hospital</p>
                <p>Contact: 555‑123‑4567</p>
              </div>
        </div>

        {/*Disclaimer*/}
        <div className='report-section highlight' data-tooltip="Both an Initial and Final Test Report can be provided, as required." style={{padding:"2px"}}>
          <h3>Initial/Final Test Report</h3>
          <p className='disclaimer' style={{fontSize: "0.75rem", marginBottom: "0px"}}>Additional test results may follow when applicable/ Pathogen Identifcation and Antibiotic Resistance Profling</p>
        </div>

        {/* Comments */}
        <div className='report-section' style={{padding:"2px"}}>
          <h3>Comments</h3>
          <p className='disclaimer' style={{fontSize: "0.75rem"}}>Approved</p>
        </div>

        {/* Pathogens */}
        <div>
          <h3>Pathogen and Antibiotic Resistance Gene Identification by PCR</h3>
          <img src={dnaHeader} alt="DNA Header" className="dnaHeader" />
          <div className="report-section">
            <div className="pathogen-columns highlight" data-tooltip="The report includes a summary of the major results up front, highlighting both pathogens detected as well as antibiotic resitant genes found">
              <div className='PCR_result'>
                <h3>Positive</h3>
                <p>By PCR</p>
              </div>
              <div className="plusImgContainer">
                <img src={plusSign} alt="Plus Sign" className="plusSign" />
              </div>
              <div className='pathogenResult' >
              <h4 style={{textAlign: 'left', margin:"0px"}}>Following pathogens were detected:</h4>
              <ul>
                <li><strong> Klebsiella pneumoniae (K. pneumoniae), Ct: 14.924</strong></li>
              </ul>
              <h4 style={{textAlign: 'left', margin:"0px"}}>Following antibiotic resistance genes were detected:</h4>
              <ul>
                <li><strong>blaCTX-M_Group</strong></li>
                <li><strong>blaSHV</strong></li>
                <li><strong>dfr_Group</strong></li>
                <li><strong>sul_Group</strong></li>
              </ul>
              </div>
            </div>
          </div>
        </div> 
        
        {/* Ct Ranges */}
        <div>
        <div className="ct-table-wrapper highlight" data-tooltip="Cycle threshold (Ct) values indicating pathogen abundance and explanation of each is included for a quick understanding of the results">
        <table className="ct-table">
          <thead>
            <tr>
              <th>PCR Ct Ranges </th>
              <th className="col-1">Ct &lt; 20</th>
              <th className="col-2">Ct 20 – 23</th>
              <th className="col-3">Ct 23 – 25</th>
              <th className="col-4">Ct 25 – 28</th>
              <th className="col-5">Ct 28 – 30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{minWidth: "100px"}}>Estimated CFU/mL</td>
              <td>&gt;1×10⁸</td>
              <td>1×10⁷</td>
              <td>1×10⁶</td>
              <td>1×10⁵</td>
              <td>&lt;1×10⁴</td>
            </tr>
            <tr>
              <td>Suggested Interpretation</td>
              <td>
                <strong>Very high pathogen abundance</strong><br />
                Most likely causative infectious agent, including in a polymicrobial infection.
              </td>
              <td>
                <strong>High pathogen abundance</strong><br />
                Likely significant causative infectious agent.
              </td>
              <td>
                <strong>Moderate pathogen abundance</strong><br />
                Potentially causative infectious agent or urogenital flora, especially from indwelling catheter.
              </td>
              <td>
                <strong>Low pathogen abundance</strong><br />
                Unlikely causative infectious agent, but in certain clinical settings may be regarded as potentially causative, please correlate with patient's symptoms and medical history.
              </td>
              <td>
                <strong>Very low or no significant pathogen abundance</strong><br />
                Most likely urogenital flora or contamination; in certain clinical settings, could be considered a possible emerging pathogen for recurrent infection.
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <p className='NB'>Note: PCR Positive or Negative results for pathogens are based on predetermined cycle threshold (Ct) cutoffs for the probability of specific pathogens conferring a clinically significant urinary tract infection. A Negative PCR result does not necessarily imply the absence of a potential pathogen, and pathogens may be identified by culture that are not reported by PCR. Furthermore, a Positive PCR result may not always correlate with culture results or imply clinically significant disease for every patient. Providers should correlate the PCR results with the culture results in the context of the patient's clinical scenario.</p>
        </div>

        {/* Medications */}
        <div>
          <h2>Medication Choices</h2>
          <img src={dnaHeader} alt="DNA Header" className="dnaHeader" />
          <div className="highlight report-section" style={{marginBottom: '0px'}} data-tooltip="A list of medication choices based on the pathogens detected specific to the sample">
            <p style={{marginLeft: "0.5rem"}}><strong>K. pneumoniae:</strong> Amikacin, Aztreonam, Ciprofloxacin, Fosfomycin, Gentamicin, Levofloxacin, Nitrofurantoin, Plazomicin, Tobramycin</p>
          </div>
          <p className='NB highlight' data-tooltip="Disclaimers and warnings can also be added as required.">
            Note: Agents displayed are based on both PCR and antibiotic susceptibility results. The detection of antibiotic resistance genes may not always correlate with antibiotic susceptibility results; providers should review the antibiotic susceptibility results, when available, before altering therapy.
            </p>
        </div>
        <Footer />
      </div>

      {/* Page 2 */}
      <div className="page page2">
        <Header />
        <PatientInfo />
        {/* Profiling */}
        <div>
          <h2>Culture and Antibiotic Susceptibility Profiling</h2>
          <img src={dnaHeader} alt="DNA Header" className="dnaHeader"/>
            <h4 style={{textAlign: "left"}}>Pathogen Identification by Culture Method</h4>
            <p>Klebsiella pneumoniae, Heavy growth</p>
          <div className='highlight' data-tooltip="For each pathogen detected, the efficacy of treatment options is included for the clinician">
            <CultureTable />
          </div>
          <div className='profiling-text'>
            <p ><strong>Sensitive (S):</strong> indicates the organism(s) is susceptible to the antibiotic. </p>
            <p><strong>Intermediate (I):</strong> indicates the organism(s) is susceptible to the antibiotic but not at a level required to ensure efectiveness.</p>
            <p><strong>Resistant (R):</strong> indicates the organism(s) is not susceptible.</p>
            <p><strong>Grey Box:</strong> Agent not assayed against pathogen</p>
            <p>        </p>
            <p>Reference method and interpretive criteria based on the Clinical and Laboratory Standards Institute (CLSI) M100 document, 32nd
              edition.</p>
          </div>
        </div>
        <Footer />
      </div>

      {/* Page 3 */}
      <div className="page page3">
        <Header />
        <PatientInfo />
              {/* Molecular Test Results Details */}
      <div className="highlight" data-tooltip="All pathogens and antibiotic resistance genes tested by PCR are included">
        <h2>Pathogens Tested by PCR</h2>
        <table className="wide-table">
          <thead>
            <tr>
              <th>Organisms</th><th>Detection</th><th>Ct</th>
              <th>Organisms</th><th>Detection</th><th>Ct</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Klebsiella pneumoniae</td><td>Detected</td><td>14.924</td><td>Escherichia coli</td><td>Not Detected</td><td></td></tr>
            <tr><td>Acinetobacter baumannii</td><td>Not Detected</td><td></td><td>Klebsiella aerogenes</td><td>Not Detected</td><td></td></tr>
            <tr><td>Actinotignum schaalii</td><td>Not Detected</td><td></td><td>Klebsiella oxytoca</td><td>Not Detected</td><td></td></tr>
            <tr><td>Aerococcus urinae</td><td>Not Detected</td><td></td><td>Morganella morganii</td><td>Not Detected</td><td></td></tr>
            <tr><td>Alloscardovia omnicolens</td><td>Not Detected</td><td></td><td>Mycoplasma genitalium</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida albicans</td><td>Not Detected</td><td></td><td>Mycoplasma hominis</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida auris</td><td>Not Detected</td><td></td><td>Pantoea agglomerans</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida glabrata</td><td>Not Detected</td><td></td><td>Proteus mirabilis</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida krusei</td><td>Not Detected</td><td></td><td>Proteus vulgaris</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida parapsilosis</td><td>Not Detected</td><td></td><td>Providencia stuartii</td><td>Not Detected</td><td></td></tr>
            <tr><td>Candida tropicalis</td><td>Not Detected</td><td></td><td>Pseudomonas aeruginosa</td><td>Not Detected</td><td></td></tr>
            <tr><td>Citrobacter freundii</td><td>Not Detected</td><td></td><td>Serratia marcescens</td><td>Not Detected</td><td></td></tr>
            <tr><td>Citrobacter koseri</td><td>Not Detected</td><td></td><td>Staphylococcus spp</td><td>Not Detected</td><td></td></tr>
            <tr><td>Corynebacterium riegelii</td><td>Not Detected</td><td></td><td>Streptococcus agalactiae</td><td>Not Detected</td><td></td></tr>
            <tr><td>Enterobacter cloacae</td><td>Not Detected</td><td></td><td>Ureaplasma spp</td><td>Not Detected</td><td></td></tr>
            <tr><td>Enterococcus faecalis</td><td>Not Detected</td><td></td><td>Viridans-group Streptococcus</td><td>Not Detected</td><td></td></tr>
            <tr><td>Enterococcus faecium</td><td>Not Detected</td><td></td><td>Coagulase-negative Staphylococcus</td><td>Not Tested</td><td></td></tr>
          </tbody>
        </table>

        <h2>Antibiotic Resistance Genes Tested</h2>
        <table className="wide-table">
          <thead>
            <tr>
              <th>Antibiotic Resistance Genes</th>
              <th>Drug Class With Known Resistance</th>
              <th>Detection</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>blaCTX-M_Group</td><td>Cephalosporin</td><td>Detected</td></tr>
            <tr><td>blaSHV</td><td>Penicillin, Cephalosporin, Carbapenem</td><td>Detected</td></tr>
            <tr><td>dfr_Group</td><td>Diaminopyrimidine</td><td>Detected</td></tr>
            <tr><td>sul_Group</td><td>Sulfonamide</td><td>Detected</td></tr>
            <tr><td>ampC</td><td>Carbapenem, Cephalosporin</td><td>Not Detected</td></tr>
            <tr><td>blaACC</td><td>Penicillin, Cephalosporin, Monobactam</td><td>Not Detected</td></tr>
            <tr><td>blaFOX</td><td>Cephalosporin</td><td>Not Detected</td></tr>
            <tr><td>blaIMP_Group</td><td>Penicillin, Cephalosporin, Carbapenem</td><td>Not Detected</td></tr>
            <tr><td>blaKPC</td><td>Penicillin, Cephalosporin, Monobactam, Carbapenem</td><td>Not Detected</td></tr>
            <tr><td>blaOXA_Group</td><td>Penicillin, Cephalosporin, Monobactam, Carbapenem</td><td>Not Detected</td></tr>
            <tr><td>blaTEM</td><td>Penicillin, Cephalosporin, Monobactam, Carbapenem</td><td>Not Detected</td></tr>
            <tr><td>blaVEB</td><td>Cephalosporin, Monobactam</td><td>Not Detected</td></tr>
            <tr><td>blaVIM</td><td>Penicillin, Cephalosporin, Carbapenem</td><td>Not Detected</td></tr>
          </tbody>
        </table>
      </div>
        <Footer />
      </div>

      {/* Page 4 */}
      <div className="page page4">
        <Header />
        <PatientInfo />
        {/* Methodology and Limitations */}
        <div>
          <h2>Methodology and Limitations</h2>
          <div className="profiling-text highlight" style={{ textAlign: 'justify', fontSize: '0.70rem' }} data-tooltip="A description of the tests carried out, details of the organisms and antibiotic resistant genes and any limitations of the test, specific to your panel can be added her.">
            <p><strong>Methodology:</strong></p>
            <p><strong>Organisms and Antibiotic Resistance Genes Tested by PCR and Reference Ranges (colony forming units/ml):</strong> </p>
            <p><strong>Limitations of the Test:</strong></p>
          </div>
        </div>

        <div>
          <div className="disclaimer highlight" style={{ textAlign: 'justify', fontSize: '0.70rem' }} data-tooltip="Any other information, disclaimers or content that is required can be added on request.">
            <h2>Disclaimer</h2>
          </div>
        </div>
        <div style={{paddingTop:"30rem"}}>
          <Footer />
        </div>
        
      </div>

      <Tooltip />
    </div>
  );
};

export default App;
