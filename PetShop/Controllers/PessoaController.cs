using PetShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace PetShop.Controllers
{
    [ApiController]
    [Route("petshop/pessoa")]
    public class PessoaController : ControllerBase
    {
        [HttpPost]
        public Pessoa Create(Pessoa pessoa)
        {
            pessoa.Nome += "Mudou";
            return pessoa;
        }




    }
}