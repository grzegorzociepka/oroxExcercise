using System;
using Microsoft.AspNetCore.Mvc;

namespace oroxExcerciseBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<int> Get()
        {
            Random random = new Random();
            return random.Next();
        }
    }
}
