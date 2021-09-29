using PetShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace PetShop.Controllers
{
    [ApiController]
    [Route("petshop/pessoa")]


    public class PessoaController : ControllerBase
    {
        //Post: /petshop/pessoa/create
        [HttpPost]
        [Route("create")]
        public Pessoa Create(Pessoa pessoa)
        {
            pessoa.Nome += " Mudou";
            return pessoa;
        }




    }
}