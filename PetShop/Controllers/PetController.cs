using PetShop.Models;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using System.Collections.Generic;
using System.Linq;

namespace PetShop.Controllers
{
    [ApiController]
    [Route("petshop/pet")]


    public class PetController : ControllerBase
    {

         private readonly DataContext _context;
            //Construtor
            public PetController(DataContext context) => _context = context;
          //Post: /petshop/pet/create
        [HttpPost]
        [Route("create")]
        public Pet Create(Pet pet)
        {
            _context.Pets.Add(pet);
            _context.SaveChanges();
            return pet;
        }

           [HttpGet]
        [Route("list")]
        public List<Pet> List() => _context.Pets.ToList();

    }
}