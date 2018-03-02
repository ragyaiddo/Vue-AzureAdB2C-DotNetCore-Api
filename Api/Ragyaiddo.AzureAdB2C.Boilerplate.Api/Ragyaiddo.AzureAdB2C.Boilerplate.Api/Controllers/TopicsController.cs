using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ragyaiddo.AzureAdB2C.Boilerplate.Api.Models;
using Microsoft.AspNetCore.Authorization;

namespace Ragyaiddo.AzureAdB2C.Boilerplate.Api.Controllers
{
    /// <summary>
    /// Controller class for Topics
    /// </summary>
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TopicsController : Controller
    {
        /// <summary>
        /// Get all topics
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Topic> Get()
        {
            return new List<Topic> {
                new Topic{Id=1, CategoryId=1, Title="Atoms, compounds, and ions", Description ="Chemistry is the study of matter, and all matter is made up of atoms. We will learn about elements, atomic number and mass, isotopes, moles (chemistry moles, not the animal), and compounds."},
                new Topic{Id=2, CategoryId=1, Title="Chemical reactions and stoichiometry", Description ="We are now going to delve into the heart of chemistry.  We learn ways of representing molecules and how molecules react.  To do this, we'll even think about \"how many\" of a molecule we have using a quantity called a \"mole\"."},
                new Topic{Id=3, CategoryId=1, Title="Electronic structure of atoms", Description ="So we know that all matter is made up of atoms, but what is an atom made out of? Chemists describe the structure of atoms using models. This section will cover the Bohr model, photoelectric effect, absorption and emission spectra, quantum numbers, and electron configurations. "},
                new Topic{Id=4, CategoryId=2, Title="One-dimensional motion", Description ="In this tutorial we begin to explore ideas of velocity and acceleration.  We do exciting things like throw things off cliffs (far safer on paper than in real life) and see how high a ball will fly in the air."},
                new Topic{Id=5, CategoryId=2, Title="Two-dimensional motion", Description ="You understand velocity and acceleration well in one-dimension.  Now we can explore scenarios that are even more fun.  With a little bit of trigonometry (you might want to review your basic trig, especially what sin and cos are), we can think about whether a baseball can clear the \"green monster\" at Fenway Park."},
                new Topic{Id=6, CategoryId=2, Title="Forces and Newton's laws of motion", Description ="This is the meat of much of classical physics.  We think about what a force is and how Newton changed the world's (and possibly your) view of how reality works."}
            };
        }

        /// <summary>
        /// Get topics by category id
        /// </summary>
        /// <returns></returns>
        [HttpGet("category/{categoryId}")]
        public IEnumerable<Topic> Get(int categoryId)
        {
            var topics = new List<Topic> {
                new Topic{Id=1, CategoryId=1, Title="Atoms, compounds, and ions", Description ="Chemistry is the study of matter, and all matter is made up of atoms. We will learn about elements, atomic number and mass, isotopes, moles (chemistry moles, not the animal), and compounds."},
                new Topic{Id=2, CategoryId=1, Title="Chemical reactions and stoichiometry", Description ="We are now going to delve into the heart of chemistry.  We learn ways of representing molecules and how molecules react.  To do this, we'll even think about \"how many\" of a molecule we have using a quantity called a \"mole\"."},
                new Topic{Id=3, CategoryId=1, Title="Electronic structure of atoms", Description ="So we know that all matter is made up of atoms, but what is an atom made out of? Chemists describe the structure of atoms using models. This section will cover the Bohr model, photoelectric effect, absorption and emission spectra, quantum numbers, and electron configurations. "},
                new Topic{Id=4, CategoryId=2, Title="One-dimensional motion", Description ="In this tutorial we begin to explore ideas of velocity and acceleration.  We do exciting things like throw things off cliffs (far safer on paper than in real life) and see how high a ball will fly in the air."},
                new Topic{Id=5, CategoryId=2, Title="Two-dimensional motion", Description ="You understand velocity and acceleration well in one-dimension.  Now we can explore scenarios that are even more fun.  With a little bit of trigonometry (you might want to review your basic trig, especially what sin and cos are), we can think about whether a baseball can clear the \"green monster\" at Fenway Park."},
                new Topic{Id=6, CategoryId=2, Title="Forces and Newton's laws of motion", Description ="This is the meat of much of classical physics.  We think about what a force is and how Newton changed the world's (and possibly your) view of how reality works."}
            };

            return topics.Where(t => t.CategoryId == categoryId);
        }
    }
}