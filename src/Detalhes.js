import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default class Detalhes extends Component {

  state = {
    id: '',
    nome: '',
    autor: '',
    descricao: '',
    minimo: 0,
    foto: '',
    lance_nome: '',
    lance_email: '',
    lance_fone: '',
    lance_valor: '',
    aviso: '',
    partidas: []
  }

  componentDidMount() {
    // obtém os parâmetros passados para a classe
    const { match: { params } } = this.props

    const db = firebase.firestore()

    var docRef = db.collection("times").doc(params.id);

    docRef.get().then(doc => {
      if (doc.exists) {
        this.setState({ id: doc.id, ...doc.data() })
      } else {
        // doc.data() will be undefined in this case
        console.log("Erro...");
      }
    }).catch(function (error) {
      console.log("Erro de conexão: ", error);
    });

    this.loadpartidas()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const lance = {
      nome: this.state.lance_nome,
      email: this.state.lance_email,
      fone: this.state.lance_fone,
      valor: this.state.lance_valor
    }

    const db = firebase.firestore()

    try {
      db.collection('times').doc(this.state.id)
        .collection('partidas').add(lance)
      this.setState({ aviso: 'Ok! Resultado Salvo Com Sucesso' })
    } catch (erro) {
      this.setState({ aviso: 'Erro: ' + erro })
    }
    this.tempoAviso()
  }

  tempoAviso = () => {
    setTimeout(() => {
      this.setState({ aviso: '' })
    }, 5000)
  }

  loadpartidas = () => {
    const { match: { params } } = this.props

    let partidas = []

    firebase.firestore().collection('times')
      .doc(params.id)
      .collection('partidas')
      .orderBy('nome')
      .onSnapshot(snapshot => {

        snapshot.docChanges().forEach(change => {

          if (change.type === 'added') {
            partidas.push({ id: change.doc.id, ...change.doc.data() })
          }

          if (change.type === 'modified') {
            partidas = partidas.map(times => times.id === change.doc.id ?
              { id: change.doc.id, ...change.doc.data() }
              : times)
          }

          if (change.type === 'removed') {
            partidas = partidas.filter(times => times.id !== change.doc.id)
          }
        })
        this.setState({ partidas })

      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-2">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  {this.state.nome}</h4>
              </div>
            </div>
            <div>
              {
                this.state.partidas.map(partida => {
                  return <div className='col s12' key={partida.id}>
                    <div className='card'>
                      <div className='card-content'>
                        <div className='row'>
                          <div className='col s10'>
                            <span className='card-title left-align'>{partida.nome}</span>
                          </div>
                      </div>
                    </div>
                  </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className="col-sm-6 mt-2">
            <button className="btn btn-danger btn-lg btn-block">
              Adicione o Resultado do Jogo</button>
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  * Os Valores dos Jogos São Atualizados ao Final da Rodada
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control"
                      placeholder="Adicione o Resultado do Jogo"
                      name="lance_nome"
                      onChange={this.handleChange}
                      value={this.state.lance_nome}
                    />
                  </div>
                  <div className="input-group mt-3">
                  </div>

                  <div className="input-group mt-3">
                  </div>

                  <input type="submit" className="btn btn-danger float-right mt-3"
                    value="Enviar Resultado" />
                  <Link to={'/'} className="btn btn-success float-left mt-3">
                    Voltar
                  </Link>
                </form>
              </div>
            </div>
            {this.state.aviso !== '' ?
              <div className='alert alert-info mt-3'>
                {this.state.aviso}
              </div>
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
