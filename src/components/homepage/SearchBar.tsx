import React, { Component, Props } from 'react';
import '../../App.css';
import { Input , Col} from 'antd';
import 'antd/lib/input/style/css';

class SearchBar extends Component {
    
    constructor(props: any) {
        super(props);
        this.getRestaurantList = this.getRestaurantList.bind(this);
        this.httpGetAsync = this.httpGetAsync.bind(this);
    }
    /**
     * getRestaurants
     */
    // keyword: string, latitude: number, longitude: number, limit: number
    public getRestaurantList(e: React.MouseEvent): void {
        e.preventDefault();
        const endpoint = "https://api.yelp.com/v3/businesses/search?";
        const requestParameters = "term=" + "Chinese" + "&latitude=" + "47.6201" + "&longitude=" + "-122.1408";
        const request = endpoint + requestParameters;
        console.log(request);
        this.httpGetAsync(request, (responseText: string) => {
            console.log(responseText);
        });
        return;
    }

    private httpGetAsync(theUrl: string, callback: (responseText: string) => any)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.setRequestHeader("Authorization", "Bearer g776Ib2k4vuzmK-2zWEYVuFEcYzg9l_HD1dsAROM0i930GLOY51ud_C2XTdYyIvzP1MJ_X3qSfAOTjy5mQLxiwABILwwSSa387p3E8SKu94hLeskiyVp3k82N3DkXXHYx");
        xmlHttp.send();
    }
  render() {
    const Search = Input.Search;
    const InputGroup = Input.Group;
    return (
        <div>
        <InputGroup compact>
            <Input
                placeholder="Where to eat?"
                addonBefore="Find"
                style={{width: '20%'}}
            />
            <Search
                placeholder="I am in..."
                onSearch={value => this.getRestaurantList}
                style={{width: '20%'}}
                enterButton
            />
            </InputGroup>
        </div>
    );
  }
}

export default SearchBar;