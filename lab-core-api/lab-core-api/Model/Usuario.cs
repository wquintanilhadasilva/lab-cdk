using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace labcoreapi.Model
{
    public class Usuario
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cpf { get; set; }
        public string Senha { get; set; }
        public string confirmarSenha { get; set; }
        public string Nascimento { get; set; }
    }

}


//{
//	"nome": "wedson quintanilha da silva", 
//	"email": "wquintanilhadasilva@gmail.com", 
//	"cpf": "80900585153", 
//	"senha": "123456", 
//	"confirmarSenha": "123456", 
//	"nascimento": "1977-05-17" 
//}