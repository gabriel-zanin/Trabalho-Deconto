using PetShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace PetShop.Controllers
{
    [ApiController]
    [Route("petshop/pet")]


    public class PetController : ControllerBase
    {
          //Post: /petshop/pet/create
        [HttpPost]
        [Route("create")]
        public Pet Create(Pet pet)
        {
            pet.Nome += " Zezo";
            return pet;
        }

    }
}