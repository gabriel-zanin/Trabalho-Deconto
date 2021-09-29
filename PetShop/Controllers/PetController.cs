using PetShop.Models;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using System.Collections.Generic;
using System.Linq;
using System;

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
        public Pet Create([FromBody]Pet pet)
        {
            _context.Pets.Add(pet);
            _context.SaveChanges();
            return pet;
        }

           [HttpGet]
        [Route("list")]
        public List<Pet> List() => _context.Pets.ToList();

        //GET: petshop/pet/getbyid/1

        [HttpGet]
        [Route("getbyid/{id}")]
        
        public Pet GetById([FromRoute]int id)
        {
            Console.WriteLine($" ID: {id}");
            return null;
        }
    }
}