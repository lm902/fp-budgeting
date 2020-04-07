import React from 'react'
import Chart from "react-google-charts";
import AV from 'leancloud-storage';
import Footer from './Footer'

export default class Home extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      userCategories: [],
      isLoading: true,
      data : []  
    }
    this.user = AV.User.current()
  }

  componentDidMount () {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    // this.setState({ isLoading: true })
    try {
      var query = new AV.Query('Categories')
      query.equalTo('user', this.user.id)
      await query.first().then(queryResult => {
        //Define New Arrays
        let newData = []
        let theCategories = []
        //If Query is Valid
        if (queryResult !== undefined) {
          //Grab Categories
          theCategories = queryResult.attributes.userCategories
          //First Add The Legend Fields

          newData = [...newData, ["Category", "Expense", "Budget"]];

          for (let i = 0; i < theCategories.length; i++) {
            newData = [
              ...newData,
              [theCategories[i].Category, 200, theCategories[i].Budget]
            ];


          }
        }
        console.log('New Data' + newData)

        //Update State
        this.setState({
          data: newData
        })
      })
    } catch (error) {
      console.log(JSON.stringify(error))
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render () {
    return (
      <div>
      <div className='container d-flex flex-column align-items-center home'>
        <br/><br/>
        <h1> Welcome !!! </h1>
        {/* <Chart chartData={this.state.chartData} legendPosition='bottom' /> */}
            <Chart
              width={900}
              height={500}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={this.state.data}
              options={{
                title: 'Monthly Expense vs Budget Chart',
                fontSize:15,
                chartArea: { width: '70%' },
                hAxis: {
                  title: 'Expense',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Budget',
                  minValue: 0
                },
              }}
              legendToggle
            />
            {/* <Footer/> */}
      </div>
      <Footer/> 
      </div>
    )
  }
}
