// CultureTable.js
import './CultureTable.css';

const CultureTable = () => {
  const antibiotics = [
    "Amikacin", "Amoxicillin/ Clavulanate", "Aztreonam", "Cefazolin", "Cefdinir", "Cefepime", "Cefpodoxime", "Ceftazidime",
    "Ceftriaxone", "Cephalexin", "Ciprofloxacin", "Doripenem", "Ertapenem",
    "Fosfomycin", "Gentamicin"
  ];

  const results = [
    "S", "S", "S", "S", "S", "S", "S", "R", "I", "I", "S", "S", "S",
    "S", "S"
  ];

  const otherAntibiotics = [
    "Imipenem/Cilastatin", "Levofloxacin", "Meropenem", "Nitrofurantoin", "Piperacillin/Tazobactam", 
    "Plazomicin","Tobramycin", "Trimethoprim/Sulfamethoxazole"
];
  const otherResults = ["S", "S", "S", "S", "R", "S", "R", "S"];

  return (
    <div className="culture-report">
    <div className="table-scroll">
      <table className="culture-table">
        <thead>
          <tr>
            <th>Detected Organism</th>
            {antibiotics.map((abx, index) => (
              <th key={index}><div className="rotated-text">{abx}</div></th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><em>K. pneumoniae</em></td>
            {results.map((res, index) => (
              <td key={index} className="result-cell">{res}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>

    <div className='table-scroll'>
      <table className="culture-table">
        <thead>
          <tr>
            <th>Detected Organism</th>
            {otherAntibiotics.map((abx, index) => (
              <th key={index}><div className="rotated-text">{abx}</div></th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><em>K. pneumoniae</em></td>
            {otherResults.map((res, index) => (
              <td key={index} className="result-cell">{res}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CultureTable;
