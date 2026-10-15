import apps from "../apps.json"
import Hero from "@/app/components/Hero"
import Features from "@/app/components/Features"
import Footer from "@/app/components/Footer"
import VideoSection from "@/app/components//VideoSection"
import Header from "@/app/components/Header"
import AppScreenshots from "@/app/components/AppScreenshots"
import FAQ from "@/app/components/FAQ"
import Reviews from "@/app/components/Reviews"

const app = apps.find(a => a.id === "app1")
if (!app) throw new Error("App config not found")

export default function App1Page() {
  return (
    <>
      <Header title={app?.name} logo={app?.logo} navigation={app?.navigation}  />
      <Hero title={app?.name} subtitle={app?.tagline} image="/app1/screenshot.png" />
      <Features items={app.features} />
      <AppScreenshots screenshots={app.screenshots} />
      <FAQ items={app.faq} />
      <Reviews reviews={app?.reviews} />
      <Footer iosLink={app?.iosLink} androidLink={app?.androidLink} appName={app?.name} />
    </>
  )
}
