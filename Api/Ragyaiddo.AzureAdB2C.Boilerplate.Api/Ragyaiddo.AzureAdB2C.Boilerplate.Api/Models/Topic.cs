using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ragyaiddo.AzureAdB2C.Boilerplate.Api.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
