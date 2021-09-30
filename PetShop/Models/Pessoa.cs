using System.CodeDom.Compiler;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PetShop.Models
{
    public class Pessoa
    {
        
        public string Nome {get; set;}

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Cpf {get; set;} 

        public string Funcao {get; set;}

        public int Telefone {get; set;}
    }
}