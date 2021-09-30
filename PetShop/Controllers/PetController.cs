using PetShop.Models;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Globalization;
using System.Security.Cryptography.X509Certificates;

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
        public IActionResult Create([FromBody]Pet pet)
        {
            _context.Pets.Add(pet);
            _context.SaveChanges();
            return Created("",pet);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Pets.ToList());

        
        
        
        
        
        //GET: petshop/pet/getbyid/1

        [HttpGet]
        [Route("getbyid/{id}")]
        
        public IActionResult GetById([FromRoute]int id)
        {
            //Busca pets apenas pela chave primária
            Pet pet = _context.Pets.Find(id);
            if (pet == null)
            {
                return NotFound(); 
            }
            return Ok(pet);
        }

        
        
        
        
        
        //DELETE: petshop/pet/delete
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete ([FromRoute] string name)
        {
            //expressão lambda

        Pet pet = _context.Pets.FirstOrDefault
        (
            pet => pet.Nome == name
        );
        if (pet == null)
        {
            return NotFound();
        }

        _context.Pets.Remove(pet);
        _context.SaveChanges();
        return Ok(_context.Pets.ToList());


        }

        //UPDATE: petshop/pet/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update ([FromBody] Pet pet)
        {
        _context.Pets.Update(pet);
        _context.SaveChanges();
        return Ok(pet);
        }

    }
}