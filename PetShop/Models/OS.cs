namespace PetShop.Models
{
    public class OS
    {
        public int OsId { get; set; }

        public string NomeCliente { get; set; }

        public string NomeServico { get; set; }

          public string NomePet {get; set;}

          public int QuantidadeServico { get; set; }

        public double ValorServico {get; set;}
    
        public string TipoPetOS {get; set;}

        public double ValorTotalOs { get; set; }

    }
}