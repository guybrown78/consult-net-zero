import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
// import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
// import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
// import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Consult Net Zero helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-lg ring-1 ring-inset ring-black/5 opacity-70" />
      <Container className="relative">
        <Navbar />

        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
						Retrofitting Made Simple.
          </h1>
					<p className="mt-8 max-w-xl text-xl/7 font-bold text-gray-950/75 sm:text-2xl/8">Transform your properties with cost-effective, high-quality retrofitting solutions.</p>
          <p className="mt-4 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
					 At Consult Net Zero, we help social landlords and local authorities to enhance energy performance, reduce fuel poverty, and create sustainable communities
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/benefits">
              See benefits
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function IntroSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
				<Subheading>Consult Net Zero</Subheading>
        <Heading as="h2" className="max-w-3xl">
					 Simplifying Sustainable Retrofitting
        </Heading>
				<div className='flex gap-6 flex-col md:flex-row'>

					<p className='mt-8 max-w-xl text-lg text-gray-950/75 sm:text-xl'>Consult Net Zero is a specialist property consultancy dedicated to delivering high-quality, cost-effective retrofit projects. We utilise local expertise and PAS2035 knowledge to ensure that sustainable housing upgrades are accessible for social landlords and local authorities seeking to enhance their properties.</p>

					<p className='mt-8 max-w-xl text-lg text-gray-950/75 sm:text-xl'>Our mission is to reduce fuel poverty and improve housing standards while helping communities achieve long-term energy efficiency through our &quot;Retrofitting Made Simple&quot; approach. By focusing on practical solutions and clear action, we cut through the confusion often associated with complex retrofitting initiatives.</p>

				</div>
		
        {/* <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        /> */}
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Services</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
				Our Comprehensive Services for Sustainable Retrofitting
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Assessment"
          title="Energy audits"
          description="Comprehensive assessments of your property's energy use to identify inefficiencies and opportunities for improvement."
          graphic={
						// <div></div>
            <div className="h-80 bg-[url(/services/assessment.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Finance"
          title="Funding guidance"
          description="Expert advice on securing funding and grants to support your retrofitting projects and enhance financial viability."
          graphic={
						<div className="h-80 bg-[url(/services/finance.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Education"
          title="Sustainability training"
          description="Tailored training programs for staff and stakeholders to foster a culture of sustainability and effective energy management."
          graphic={
            <div className="h-80 bg-[url(/services/education.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
          }
					fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Execution"
          title="Project management"
          description="End-to-end project management services to ensure smooth implementation of retrofit initiatives, from planning to execution."
          graphic={
						<div className="h-80 bg-[url(/services/execution.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
					}
					fade={['bottom']}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Tracking"
          title="Performance monitoring"
          description="Ongoing monitoring and reporting of energy performance metrics to track progress and optimise energy efficiency over time."
          graphic={
						<div className="h-80 bg-[url(/services/tracking.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
					}
					fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-lg bg-gray-900 py-32">
      <Container>
        <Subheading dark>Our Approach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
					Guiding Principles of Our Strategy
        </Heading>

				<div className='flex gap-6 flex-col md:flex-row'>

				<p className='mt-8 max-w-xl text-lg text-gray-50/75 sm:text-xl'>At Consult Net Zero, we emphasise a strategic and results-driven approach to sustainable retrofitting. Our methodology combines in-depth analysis of your current energy performance with tailored solutions that drive measurable improvements. We ensure that our clients are equipped with the knowledge and tools necessary to play an active role in achieving their net zero objectives.</p>

				<p className='mt-8 max-w-xl text-lg text-gray-50/75 sm:text-xl'>We recognise the complexities involved in sustainable retrofitting but remain focused on delivering clear pathways to success. Our team collaborates closely with social landlords and local authorities to create customized strategies that address unique challenges, optimize funding opportunities, and ultimately enhance energy efficiency across communities.</p>

				</div>

				
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Guidance"
            title="Tailored Roadmaps"
            description="Customised roadmaps outline clear steps to achieve net zero, tailored to your energy performance and funding opportunities."
            graphic={
							<div className="h-80 bg-[url(/approach/planning.jpg)] bg-cover bg-no-repeat bg-opacity-90" />
            }
            fade={['top', 'bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Collaboration"
            title="Stakeholder Engagement"
            description="We facilitate collaboration among stakeholders to ensure alignment and commitment to sustainable outcomes."
            graphic={<div className="h-80 bg-[url(/approach/engagement.jpg)] bg-cover bg-no-repeat bg-opacity-90" />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
						fade={['top', 'bottom']}
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Assistance"
            title="Ongoing Support"
            description="Continuous support throughout implementation helps you navigate challenges and enhance energy efficiency.."
            graphic={<div className="h-80 bg-[url(/approach/support.jpg)] bg-cover bg-no-repeat bg-opacity-90" />}
						fade={['top', 'bottom']}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Analytics"
            title="Data-Driven Insights"
            description="Advanced analytics provide insights into your carbon footprint, enabling informed decisions and progress tracking."
						graphic={<div className="h-80 bg-[url(/approach/analytics.jpg)] bg-cover bg-no-repeat bg-opacity-90" />}
						fade={['top', 'bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className='mb-1'>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <IntroSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
