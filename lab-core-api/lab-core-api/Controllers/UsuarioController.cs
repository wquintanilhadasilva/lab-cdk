using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using labcoreapi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lab_core_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        // POST api/values
        [HttpPost]
        public ActionResult<string> Post([FromBody] Usuario value)
        {
            Console.WriteLine(value);
            return "Tudo certo!!";
        }
    }
}