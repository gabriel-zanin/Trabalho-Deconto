using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace PetShop.Data
{
    public class DataContext : DbContext
    {
        //Contrutor
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
        
        //Lista de propriedades das classes de  modelo que vão virar tabelas no banco

        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet <Pet> Pets { get; set; }
        public DbSet <Servico> Servicos { get; set; }
        public DbSet <OS> Os_s { get; set; }
    }
}