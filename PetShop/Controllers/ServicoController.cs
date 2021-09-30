using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using PetShop.Models;

namespace PetShop.Controllers
{

        [ApiController]
    [Route("petshop/servico")]


    public class ServicoController : ControllerBase
    {

         private readonly DataContext _context;
            //Construtor
            public ServicoController(DataContext context) => _context = context;
          
          
          
          
          //Post: /petshop/pet/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Servico servico)
        {
            _context.Servicos.Add(servico);
            _context.SaveChanges();
            return Created("",servico);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Servicos.ToList());

        
        
        
        
        
        //GET: petshop/servico/getbyid/1

        [HttpGet]
        [Route("getbyid/{id}")]
        
        public IActionResult GetById([FromRoute]int id)
        {
            //Busca pets apenas pela chave primária
            Servico servico = _context.Servicos.Find(id);
            if (servico == null)
            {
                return NotFound(); 
            }
            return Ok(servico);
        }

        
        
        
        
        
        //DELETE: petshop/servico/delete
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete ([FromRoute] string name)
        {
            //expressão lambda

        Servico servico = _context.Servicos.FirstOrDefault
        (
            servico => servico.Nome == name
        );
        if (servico == null)
        {
            return NotFound();
        }

        _context.Servicos.Remove(servico);
        _context.SaveChanges();
        return Ok(_context.Servicos.ToList());


        }

    }
    }
