import React, {Fragment} from "react"
import MatchJ from "../matchboxbrasil"
class Profile extends React.Component { 

    render() {        
        const test = MatchJ.data.sort((a, b) => a.positive - b.positive).reverse().map((datas, index)=> {
            let dados =  datas.positive + datas.negative
            let percPositive = Math.round((datas.positive * 100)/dados)
            let percNegative = Math.round((datas.negative * 100)/dados)
            
            return ( 
                <>
                    <div className="profile" key={datas.__id}>
                        <div className="content-img">
                            <img src={datas.picture}/>
                            <div className="numberProfile">
                                {index+1}                                
                            </div>
                        </div>
                        <div className="content-text">
                            <div className="text">
                            <strong>{datas.name}</strong>
                               {datas.description}     
                            </div>
                        </div>
                        <div className="votacao">
                           <div className="votacao-title"> 
                               <h4 className="like">Gostam</h4> 
                               <h4 className="unlike">Não gostam</h4> 
                            </div>
                            <span className="votacao-perc">
                                <strong className="perc-1">{percPositive}%</strong>
                                <strong className="perc-2">{percNegative}%</strong>
                            </span> 
                        </div>
                    </div>
                   
                </>
            )
          })
        return (
            <>
                {test}
                
            </>
        )
    }
}



export default Profile