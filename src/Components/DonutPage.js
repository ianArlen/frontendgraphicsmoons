import React, { Fragment } from 'react';
import Donut from "react-donut";
import axios from "axios";

import { Row } from 'reactstrap';


const DonutPage = () => {
    const [sales, setSales] = React.useState([]);
    const getSales = () => {
        axios
          .get("http://localhost:3000/donut", {
          })
          .then((response) => {
            setSales(response.data);
          })
          .catch((err) => {
          
          });
      };
    
      React.useEffect(() => {
        getSales();
     
    }, []);
    return (
        <div>
        <h1>Moons sales</h1>
        <div className="sales">
        {sales.map((sale) => (
            <Fragment>
            <Row>
            <div className="sale">
                <Donut
                chartData={[
                    { name: `${sale.article}`, data: sale.percentage1 },
                    { name: `${sale.article}`, data: sale.percentage2 },
                ]}
                chartWidth={300}
                chartHeight={300}
                title="First year of sales"
                chartThemeConfig={{
                series: {
                colors: ["#bcbabe", "#1995ad"]
                }
                }}
                />
            </div>
            </Row>
        </Fragment>  
          ))}
        </div>
        </div>
            
    );
}

export default DonutPage;