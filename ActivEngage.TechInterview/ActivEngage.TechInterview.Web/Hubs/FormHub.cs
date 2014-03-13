using System.Collections.Generic;
using ActivEngage.TechInterview.Documents;
using Microsoft.AspNet.SignalR;
using Raven.Client;
using Raven.Client.Embedded;

namespace ActivEngage.TechInterview.Web.Hubs
{
    public class FormHub : Hub
    {
        private static List<Form> list {get; set;}
        public FormHub()
        {
            list = new List<Form>();
        }
        public List<Form> GetAllForms()
        {
            using (IDocumentSession session = MvcApplication.DocumentStore.OpenSession())
            {
                var _list = session.Query<Form>();
                foreach (var form in _list)
                {
                    list.Add(form);
                }
            }
            //list.Add(new Form() { Comments = "this is a comment", EmailAddress = "mustafa.fathy@gmail.com", FirstName = "Mustafa", LastName = "Elgharbawy", Id = "1" } );
            return list; //new List<Form>();
        }
        public void FormAdded(Form form)
        {
            using (IDocumentSession session = MvcApplication.DocumentStore.OpenSession())
            {
                session.Store(form);
                session.SaveChanges();
            }
            //list.Add(form);
        }
    }
}