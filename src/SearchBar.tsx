import React, { Component, Props } from 'react';
import './App.css';
import { request } from 'http';

class SearchBar extends Component {
    
    constructor(props: any) {
        super(props);

        this. getRestaurantList = this.getRestaurantList.bind(this);
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
        xmlHttp.setRequestHeader("Authorization", "Bearer g776Ib2k4vumK-2zWEYVuFEcYzg9l_HD1dsAROM0i930GLOY51ud_C2XTdYyIvzP1MJ_X3qSfAOTjy5mQLxiwABILwwSSa387p3E8SKu94hLeskiyVp3k82N3DkXXHYx");
        xmlHttp.send();
    }
  render() {
    return (
        <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body" />
                </div>
                <div className="col">
                  <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search restaurants..." />
                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit" onClick={this.getRestaurantList}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;