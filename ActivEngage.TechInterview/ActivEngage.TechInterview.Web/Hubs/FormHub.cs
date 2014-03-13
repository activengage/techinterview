using System.Collections.Generic;
using ActivEngage.TechInterview.Documents;
using Microsoft.AspNet.SignalR;
using Raven.Client;
using Raven.Client.Embedded;

namespace ActivEngage.TechInterview.Web.Hubs
{
    public class FormHub : Hub
    {
        private List<Form> list {get; set;}
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
            
            return list;
        }
        public void AddForm(Form form)
        {
            using (IDocumentSession session = MvcApplication.DocumentStore.OpenSession())
            {
                session.Store(form);
                session.SaveChanges();
            }
            Clients.Caller.formAdded(form);
        }
    }
}