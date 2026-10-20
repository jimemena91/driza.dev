import { Approach } from "@/components/approach"
import { Connection } from "@/components/connection"
import { Contact } from "@/components/contact"
import { Ecosystem } from "@/components/ecosystem"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Ecosystem />
      <Connection />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
