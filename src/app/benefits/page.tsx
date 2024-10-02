import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benefits',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}


function Benefits() {
  return (
    <Container className="my-32">
      <Subheading>Key Advantages of Retrofitting</Subheading>
      <Heading as="h3" className="mt-2">
				Unlocking the benefits of sustainable retrofitting
      </Heading>
      <Lead className="mt-6 max-w-3xl">
				Retrofitting existing buildings offers a multitude of advantages that not only enhance energy efficiency but also contribute to environmental sustainability and improved living conditions. Here are three key benefits that demonstrate why retrofitting is a smart choice for social landlords and local authorities:
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">

					<div className="">
						<Subheading>Cost-Effectiveness</Subheading>
						<p className="text-sm/6 text-gray-600 mt-4">
						Retrofitting existing buildings is often more financially viable than complete rebuilds. By upgrading current structures, organizations can achieve significant energy efficiency improvements without the high costs associated with new construction. This approach allows for substantial savings on operational expenses while still making meaningful progress towards net zero emissions. Renovations can often be completed with a lower financial outlay, making retrofitting an attractive option for social landlords and local authorities looking to maximize their budgets.
						</p>
					</div>
         
					<div className="mt-16">
						<Subheading>Environmental Impact</Subheading>
						<p className=" text-sm/6 text-gray-600 mt-4">
						Retrofitting existing buildings is often more financially viable than complete rebuilds. By upgrading current structures, organizations can achieve significant energy efficiency improvements without the high costs associated with new construction. This approach allows for substantial savings on operational expenses while still making meaningful progress towards net zero emissions. Renovations can often be completed with a lower financial outlay, making retrofitting an attractive option for social landlords and local authorities looking to maximize their budgets.
						</p>
					</div>

					<div className="mt-16">
					<Subheading>Enhanced Living Conditions</Subheading>
					<p className="mt-4 text-sm/6 text-gray-600">
					Improving the energy performance of retrofitted buildings leads to better air quality, increased comfort, and overall enhanced usability for occupants. These upgrades create healthier living environments while also increasing property values. As energy prices rise and sustainability becomes a priority, properties with high energy efficiency ratings will likely become more desirable in the market, benefiting both landlords and tenants alike.
          </p>
					</div>
          {/* <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div> */}
        </div>
        {/* <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </Container>
  )
}



export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
    
			<Benefits />
      <Footer />
    </main>
  )
}
