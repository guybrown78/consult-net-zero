import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Learn about Consult Net Zero, a team of sustainability experts dedicated to helping businesses meet their environmental goals. Explore our mission, values, and commitment to making a positive impact on the planet.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Helping social landlords and local authorities to reach net zero.</Heading>
      <Lead className="mt-6 max-w-3xl">
				Discover our mission and the dedicated team behind Consult Net Zero.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
						At Consult Net Zero, our mission is to lead the way in sustainable retrofitting, making energy-efficient upgrades accessible for all. We strive to reduce fuel poverty and enhance housing standards, ensuring that communities can thrive in environmentally sustainable environments. Our commitment to practical solutions empowers social landlords and local authorities to achieve their net zero goals effectively.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
						We believe that every retrofit project is an opportunity to create a lasting impact on both the environment and the community. By simplifying complex retrofitting initiatives, we aim to drive meaningful progress toward long-term energy efficiency. Our focus on collaboration and innovation ensures that we remain at the forefront of the sustainability movement.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Key Statistics</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
								Homes in England are below an EPC C
							</dt>
							
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={3} end={8} /> million
              </dd>
							
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Reduction in energy costs achieved by clients through our retrofitting solutions</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={30} />%
              </dd>
            </div>
           
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Client satisfaction rate based on our tailored consultancy services</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={85} end={95} />%
              </dd>
            </div>
						<div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Of retrofit projects worked on</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                Over &pound;<AnimatedNumber start={82} end={100} /> million
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}


function Team() {
  return (
    <Container className="my-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by experienced experts.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
				Meet the dedicated professionals committed to driving sustainable change in retrofitting.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
					At Consult Net Zero, our team is led by Lee and Kim Gatley-Hall, who bring extensive experience in property consultancy and sustainability initiatives. Their passion for creating sustainable living environments drives the company&apos;s mission forward, ensuring that every project aligns with our core values of quality, integrity, and community impact.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
						Together, Lee and Kim foster a collaborative culture that empowers team members to innovate and excel in their roles. With a shared vision for a greener future, they are dedicated to guiding clients through their retrofitting journeys, making sustainable housing upgrades straightforward and achievable.
          </p>
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
      <Header />
      <Team />

      <Footer />
    </main>
  )
}
