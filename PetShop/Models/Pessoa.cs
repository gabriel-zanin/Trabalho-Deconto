using System.CodeDom.Compiler;

namespace PetShop.Models
{
    public class Pessoa
    {
        
        public string Nome {get; set;}

        public int Id {get; set;} //TROCAR ID POR CPF

        public string Funcao {get; set;}

        public int Telefone {get; set;}
    }
}