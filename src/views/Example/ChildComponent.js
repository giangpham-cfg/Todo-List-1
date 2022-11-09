import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    
    state = {
        showJobs: false
    }

    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('>>> check data input: ', this.state)
    // }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job);
        this.props.deleteAJob(job)
    }

    render() {
        
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrJobs } = this.props;
        let {showJobs} = this.state;
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        
        return (
             <>
             {showJobs === false ?
                <div>
                    <button className='btn-show'
                        onClick={() => this.handleShowHide()}>
                        Show
                    </button>
                </div>
             :
                <>
                    <div className='job-lists'>
                        {
                            arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                {item.title} - {item.salary} <></> <span onClick={() =>this.handleOnclickDelete(item)}>x</span>
                                </div>
                            )
                        })  
                        }   
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </div>
                </>
            }
             </>
    
        )
    }

}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
        
//         return (
//              <>
//              <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500) {
//                     return (
//                         <div key={item.id}>
//                           {item.title} - {item.salary} $
//                         </div>
//                     )}
                        
//                   })  
//                 }
                
//              </div>
//              </>
    
//         )
// }

export default ChildComponent;