using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PetShop.Data;
using PetShop.Models;

namespace PetShop.Controllers
{

    [ApiController]
    [Route("petshop/os")]
    public class OsController : ControllerBase
    {
        
        private readonly DataContext _context;
            //Construtor
            public OsController(DataContext context) => _context = context;




        //Post: /petshop/os/create
        [HttpPost]
        [Route("create")]
         public IActionResult Create([FromBody]OS os)
        {
            _context.Os_s.Add(os);
            _context.SaveChanges();
            return Created("",os);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Os_s.ToList());






        //GET: petshop/os/getbyid/1

        [HttpGet]
        [Route("getbyid/{id}")]

        public IActionResult GetById([FromRoute]string id)
        {
            //Busca OS_s  apenas pela chave primária
            OS os = _context.Os_s.Find(id);
            if (os == null)
            {
                return NotFound(); 
            }
            return Ok(os);
        }

        //DELETE: petshop/os/delete
        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete ([FromRoute] int id)
        {
            //expressão lambda

        OS os = _context.Os_s.FirstOrDefault
        (
            os => os.OsId == id
        );
        if (os == null)
        {
            return NotFound();
        }

        _context.Os_s.Remove(os);
        _context.SaveChanges();
        return Ok(_context.Os_s.ToList());


        }

          //UPDATE: petshop/os/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update ([FromBody] OS os)
        {
        _context.Os_s.Update(os);
        _context.SaveChanges();
        return Ok(os);
        }

         
        
    }
}