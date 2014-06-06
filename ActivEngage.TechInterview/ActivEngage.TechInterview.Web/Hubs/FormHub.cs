using System.Collections.Generic;
using ActivEngage.TechInterview.Documents;
using Microsoft.AspNet.SignalR;
using System.Web;
using Raven.Client;
using System.Linq;

namespace ActivEngage.TechInterview.Web.Hubs
{
    public class FormHub : Hub
    {
        public List<Form> GetForms()
        {
            using (IDocumentSession session = MvcApplication.DocumentStore.OpenSession())
            {
                // Operations against session
                var result = (from form in session.Query<Form>()
                             select form).ToList();


                // Flush those changes
                session.SaveChanges();
                return result;
            }
            
        }

        public void AddPerson(string firstName, string lastName, string email, string comments)
        {
            var objToSave = new Form()
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                Comments = comments
            };

            using (IDocumentSession session = MvcApplication.DocumentStore.OpenSession())
            {
                // Operations against session
                session.Store(objToSave);
 
                // Flush those changes
                session.SaveChanges();
            }
            
            Clients.All.addNewPersonToGrid(firstName, lastName, email, comments);
        }
    }
}