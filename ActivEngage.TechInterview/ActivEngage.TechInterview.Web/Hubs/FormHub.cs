using System.Collections.Generic;
using ActivEngage.TechInterview.Documents;
using Microsoft.AspNet.SignalR;

namespace ActivEngage.TechInterview.Web.Hubs
{
    public class FormHub : Hub
    {
        public List<Form> GetForms()
        {
            return new List<Form>();
        }
    }
}