using System;

namespace PetShop.Models
{
    public class Servico
    {
        public Servico() => CriadoEm = DateTime.Now; 
        public string Nome { get; set; }
        public double Preco { get; set; }

        public string Descricao { get; set; }

        public DateTime CriadoEm {get; set;}
    }
}