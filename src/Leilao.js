import React, { Component } from 'react'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

import ObraLeilao from './ObraLeilao'

export default class Leilao extends Component {

  state = {
    times: []
  }

  // método acionado logo após a construção da view
  componentDidMount() {
    this.loadtimes()
  }

  

  loadtimes = async () => {
    let times = []

    if (navigator.onLine) {
    firebase.firestore().collection('times').orderBy('nome').onSnapshot(snapshot => {

      snapshot.docChanges().forEach(change => {

        if (change.type === "added") {
          times.push({ id: change.doc.id, ...change.doc.data() })
        }

        if (change.type === "modified") {
          times = times.map(obra => obra.id === change.doc.id ?
            { id: change.doc.id, ...change.doc.data() }
            : obra)
        }

        if (change.type === "removed") {
          times = times.filter(obra => obra.id !== change.doc.id)
        }
      })
      this.setState({ times })
      localStorage.setItem('times', JSON.stringify(times))
    })
  } else {
    let dados = await JSON.parse(localStorage.getItem('times')) || []
    times = dados
    this.setState({ times })
    }
  }

  render() {
    return (
      <div className="container mt-2">
        <div className='card-columns'>
          {this.state.times.map(time => (
            <ObraLeilao key={time.id}
              id={time.id}
              titulo={time.nome}
               />
          ))}
        </div>
      </div>
    )
  }
}
