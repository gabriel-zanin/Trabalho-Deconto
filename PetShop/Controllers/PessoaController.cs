using PetShop.Models;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using System;

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
        public Pessoa Create(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            return pessoa;
        }




    }
}