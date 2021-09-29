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
        public IActionResult Create(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            return Created("",pessoa);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Pessoas.ToList());


        public IActionResult GetById([FromRoute]int id)
        {
            //Busca produtos apenas pela chave primária
            Pessoa pessoa = _context.Pessoas.Find(id);
            if (pessoa == null)
            {
                return NotFound(); 
            }
            return Ok(pessoa);
        }














        public IActionResult Update(Pessoa pessoa)
        {
            _context.Pessoas.Update(pessoa);
            return Ok(pessoa);
        }


    }
}