using System.Web.Optimization;
using ActivEngage.TechInterview.Web;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(DurandalConfig), "PreStart")]

namespace ActivEngage.TechInterview.Web
{
    public static class DurandalConfig
    {
        public static void PreStart()
        {
            // Add your start logic here
            DurandalBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}