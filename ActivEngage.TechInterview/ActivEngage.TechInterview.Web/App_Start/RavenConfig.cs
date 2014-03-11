using Raven.Client;
using Raven.Client.Embedded;

namespace ActivEngage.TechInterview.Web
{
    public static class RavenConfig
    {
        public static IDocumentStore Register()
        {
            var documentStore = new EmbeddableDocumentStore
            {
                DataDirectory = @"~App_Data\Data",
                UseEmbeddedHttpServer = true
            };

            documentStore.Initialize();

            return documentStore;
        }
    }
}