using System;
using System.Security.AccessControl;

namespace PetShop.Models
{
    public class Servico
    {
        public Servico() => CriadoEm = DateTime.Now; 

        public int ServicoId { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }

        public string Descricao { get; set; }

        public DateTime CriadoEm {get; set;}
    }
}