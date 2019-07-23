import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './slider_template';
import { URL } from '../../../hoc/config';

class NewsSlider extends Component {
    state = {
        news : []

    }
componentWillMount(){
    axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
    .then(response => {
        this.setState({
            news : response.data
        })
    })
}
    render() {
        return (
            <SliderTemplate news = {this.state.news} />
        );
    }
}
export default NewsSlider;