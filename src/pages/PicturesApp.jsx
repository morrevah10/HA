import React, { Component, useState } from "react"
import Axios from "axios"
import { PicturesList } from "../cmps/PicturesList"
import Modal from "../cmps/Modal"
// import { useSelector,useDispatch } from "react-redux"
// import setPictures from '../store/features/picturesSlice'

export default class PicturesApp extends Component {
  state = {
    pics: null,
    CATEGORY: "flowers",
    newCategory:'',
    startIdx: 0,
    diff: null,
    endIdx: 8,
  }

  componentDidMount() {
    let category = this.state.CATEGORY
    this.getPics(category)
  }

  getPics(category) {
    Axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    ).then((response) => {
      // console.log(response);
      this.setPics(response.data.hits)
    })
  }

  setPics(data) {
    const pics = data
    console.log("pics :", pics)
    console.log("this.pics :", this.state.pics)
    this.setState({ pics: pics })
    console.log("this.pics 2 :", this.state.pics)
  }

  setCategory(CATEGORY) {
    this.getPics(CATEGORY)
  }

  onHendelBtn = (btn, e) => {
    e.preventDefault()
    //  (btn==="prev") ? this.setState({diff:-9}) : this.setState({diff:9})
    btn === "next"
      ? this.setState({ startIdx: 9, endIdx: 17, diff: +9 })
      : this.setState({ startIdx: 0, endIdx: 8, diff: -9 })
    console.log("btn:", btn)
    console.log("diff:", this.state.diff)
    console.log("startIdx:", this.state.startIdx)
    console.log("endIdx:", this.state.endIdx)
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value =  target.value
    this.setState({ [field]: value }, () => {
        this.setCategory(this.state.newCategory)})
    }


  render() {
    const { pics, CATEGORY, startIdx, diff, endIdx,newCategory } = this.state
    if (!pics) return <div>Loading...</div>
    return (
      <div>
        {/* PicturesApp */}
        <section>
          <form className="btn-form">
            <button
              className="btn btn-prev"
              onClick={(event) => this.onHendelBtn("prev", event)}
            >
              {" "}
              prev
            </button>
            <form>
              <label htmlFor="newCategory">Enter your category: </label>
                <input
                  value={this.newCategory}
                  type="text"
                  name="newCategory"
                  id="newCategory"
                  onChange={(e) => this.setCategory(e.target.value)}
                />
            </form>
            <button
              className="btn btn-next"
              onClick={(event) => this.onHendelBtn("next", event)}
            >
              {" "}
              next
            </button>
          </form>
        </section>
        <PicturesList
          getPics={this.getPics}
          pics={this.state.pics}
          startIdx={this.state.startIdx}
          endIdx={this.state.endIdx}
          diff={this.state.diff}
        />
      </div>
    )
  }
}
