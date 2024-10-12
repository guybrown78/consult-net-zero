import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import GetStartedForm from '@/components/getStartedForm'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    'Get started with Consult Net Zero today! Fill out the form to begin your journey toward a more sustainable and efficient future. Our experts are ready to guide you through every step.',
}


function Form() {
	return (
		<Container className="my-32">
			<Subheading>Contact</Subheading>
			<Heading as="h3" className="mt-2">
				Get Started with Consult Net Zero
      </Heading>
      <Lead className="mt-6 max-w-3xl">
				Ready to take the next step towards a sustainable future? Fill out the form below, and let&apos;s begin the journey to optimise your operations, reduce your carbon footprint, and achieve your Net Zero goals. Our team is here to support you every step of the way.
      </Lead>

			<GetStartedForm />
		</Container>
	)
}
const GetStartedPage = () => {
	return (
		<main className="overflow-hidden">
			<GradientBackground />
			<Container>
				<Navbar />
			</Container>
			<Form />

			<Footer />
		</main>
	)
}

export default GetStartedPage