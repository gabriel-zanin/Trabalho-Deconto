using PetShop.Models;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace PetShop.Controllers
{
    [ApiController]
    [Route("petshop/pessoa")]


    public class PessoaController : ControllerBase
    {

        private readonly DataContext _context;
            //Construtor
            public PessoaController(DataContext context) => _context = context;




        //Post: /petshop/pessoa/create
        [HttpPost]
        [Route("create")]
         public IActionResult Create([FromBody]Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            _context.SaveChanges();
            return Created("",pessoa);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Pessoas.ToList());






        //GET: petshop/pessoa/getbyid/1

        [HttpGet]
        [Route("getbyid/{id}")]

        public IActionResult GetById([FromRoute]string cpf)
        {
            //Busca pessoas  apenas pela chave primária
            Pessoa pessoa = _context.Pessoas.Find(cpf);
            if (pessoa == null)
            {
                return NotFound(); 
            }
            return Ok(pessoa);
        }

        //DELETE: petshop/pessoa/delete
        [HttpDelete]
        [Route("delete/{cpf}")]
        public IActionResult Delete ([FromRoute] string cpf)
        {
            //expressão lambda

        Pessoa pessoa = _context.Pessoas.FirstOrDefault
        (
            pessoa => pessoa.Cpf == cpf
        );
        if (pessoa == null)
        {
            return NotFound();
        }

        _context.Pessoas.Remove(pessoa);
        _context.SaveChanges();
        return Ok(_context.Pessoas.ToList());


        }














        


    }
}