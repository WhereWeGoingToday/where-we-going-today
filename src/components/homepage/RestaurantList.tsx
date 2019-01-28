import {List, Skeleton, Avatar, Icon} from 'antd'
import React, { Component, Props } from 'react';
import maoyao from './resources/maoyao.png'
import '../../App.css'

interface RestaurantListProps{
}

interface RestaurantProps{
    name:string;
    avatar:string;
    tags:string;
    description:string;
    comments:number;
    stars:number;
    distance:number;
    img:string;
}

interface RestaurantListState{
    startLoading:boolean;
    isLoading:boolean;
    restaurantProps:RestaurantProps[];
}

interface GetRestaurantListCallBack{
    (data:string):void
}

class RestaurantList extends Component<RestaurantListProps, RestaurantListState>{
    constructor(props:RestaurantListProps){
        super(props);
        var l = [];
        for(var i = 0; i < 10; i++){
            l.push({
                name: "Maoyao Cuisine",
                avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                tags: "Chinese",
                description:"Maoyao, wake up!",
                comments: i ,
                stars: i,
                distance: i,
                img:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            })
        }
        this.state={startLoading:true , isLoading:false, restaurantProps:l};
        this.getData = this.getData.bind(this);
        this.getDataCallBack = this.getDataCallBack.bind(this);
    }

    componentDidMount(){
        this.setState({startLoading:false})
        this.getData((data)=>{
        })
    }

    getData = (callBack:GetRestaurantListCallBack) =>{
        //TODO
        //Get data through yelp-client
        //this.setState({isLoading:true})
    }

    getDataCallBack:GetRestaurantListCallBack = (data:string) => {
        //TODO
        //Parse data and set state
        //this.setState({isLoading:false})
    }

    render(){
        const loadMore = !this.state.isLoading && !this.state.startLoading ?
        <div
            id='loadMoreContainer'
            style={{textAlign:"center", marginTop:10, lineHeight:"30"}}>
            <a
                id='LoadMore'
                style={{cursor:'pointer'}} 
            >Load more...</a>
        </div>
        : null;
          
        return(
        <div style={{width:"60%", textAlign:"center", display:"inline-block"}}>
            <List
                itemLayout="vertical"
                size="large"
                loading={this.state.startLoading}
                dataSource={this.state.restaurantProps}
                loadMore={loadMore}
                renderItem={
                    (item:RestaurantProps) => (
                        //TODO add onClick for add to my list
                    <List.Item 
                        actions={[<a>Add to my list</a>, <span><Icon type="message" style={{marginRight:8}}/>{item.comments}</span>]}
                        extra={<img width={200} height={150} alt="logo" src={maoyao}/>}
                    >
                            <Skeleton avatar title={false} loading={this.state.isLoading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<a>{item.name}</a>}
                                    description={item.description}
                                />
                                <div>
                                    {item.distance} miles
                                    <div>
                                        Stars {item.stars}
                                    </div>
                                </div>
                            </Skeleton>
                        </List.Item>
                    )
                }
            />
        </div>
        );
    }
}
export default RestaurantList;
