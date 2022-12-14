const database = require('../models/index.js')

class PessoaController{
  static async listarPessoas(req,res){
    try{
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
  static async listarUmaPessoa(req,res){
    const {id} = req.params
    try{
      const umaPessoa = await database.Pessoas.findOne({
        where:{
          id: Number(id)
        }
      })
      return res.status(200).json(umaPessoa)
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
  static async criarPessoa(req,res){
    const novaPessoa = req.body
    try{
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
  static async atualizarPessoa(req,res){
    const {id} = req.params
    const novasInfos = req.body
    try{
      //atualiza
      await database.Pessoas.update(novasInfos, {
        where:{
          id: Number(id)
        }
      })
      //busca pessoa atualizada
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(pessoaAtualizada)
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

  static async deletarPessoa(req,res){
    const {id} = req.params
    try{
      await database.Pessoas.destroy({where: {id:Number(id)}})
      return res.status(200).json({mensagem:`id ${id} deletado`})
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController