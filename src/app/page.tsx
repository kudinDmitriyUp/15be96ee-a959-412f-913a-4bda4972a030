"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Target, Brain, Lightbulb, TrendingUp, Handshake, Rocket, Users, Star, HelpCircle, BookOpen, Linkedin, Twitter, Github, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="fluid"
      cardStyle="gradient-subtle"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Brandify"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025222383-u25ao1m9.jpg"
          logoAlt="Brandify Marketing Agency"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Transform Your Brand Into Market Leader"
          description="Strategic marketing solutions that drive growth, engagement, and lasting brand impact for ambitious businesses ready to stand out"
          tag="Premium Marketing Agency"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Your Campaign", href: "#contact" },
            { text: "View Our Work", href: "#portfolio" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025223202-ief7q3j5.jpg",
              imageAlt: "Digital marketing success"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025224466-lez8c6ve.jpg",
              imageAlt: "Creative agency collaboration"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025225154-cta571zn.jpg",
              imageAlt: "Brand strategy development"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025225928-u4g6qyus.jpg",
              imageAlt: "Social media analytics"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025226716-6y3ba02h.jpg",
              imageAlt: "Content creation studio"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025227654-5c2ksrlo.jpg",
              imageAlt: "Marketing presentation"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Brandify"
          description="We are a results-driven marketing agency specializing in elevating brands through innovative strategy, creative excellence, and data-backed execution"
          tag="About Us"
          tagIcon={Target}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025228431-hl4p7jcm.jpg"
          imageAlt="Brandify creative workspace"
          bulletPoints={[
            {
              title: "Strategic Excellence",
              description: "Custom marketing strategies tailored to your unique business goals and market position",
              icon: Brain
            },
            {
              title: "Creative Innovation",
              description: "Award-winning creative team delivering campaigns that capture attention and drive action",
              icon: Lightbulb
            },
            {
              title: "Data-Driven Results",
              description: "Every campaign backed by analytics and insights to ensure measurable ROI and growth",
              icon: TrendingUp
            },
            {
              title: "Dedicated Partnership",
              description: "We become an extension of your team, committed to your success and continuous improvement",
              icon: Handshake
            }
          ]}
          buttons={[
            { text: "Learn More", href: "#services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Core Services"
          description="Comprehensive marketing solutions designed to elevate your brand and drive sustainable growth"
          tag="Services"
          tagIcon={Rocket}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              title: "Brand Strategy & Positioning",
              description: "Develop a powerful brand identity and market positioning that resonates with your target audience and differentiates you from competitors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025229332-oituc9nf.jpg",
              imageAlt: "Brand strategy"
            },
            {
              title: "Social Media Marketing",
              description: "Build engaged communities and drive meaningful conversations across all social platforms with content that converts",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025230371-qgl3rwof.jpg",
              imageAlt: "Social media management"
            },
            {
              title: "Content Creation & Production",
              description: "Premium video, photography, and copywriting services that tell your brand story and captivate your audience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025231135-jm00lpkm.jpg",
              imageAlt: "Content production"
            },
            {
              title: "Digital Advertising",
              description: "Strategic paid campaigns across Google, Meta, and emerging platforms designed to maximize ROI and reach your ideal customers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025231680-uy9k915k.jpg",
              imageAlt: "Digital advertising"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          containerStyle="default"
          buttons={[
            { text: "Explore All Services", href: "#contact" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="Partnering with innovative brands across multiple industries to drive growth and transform their market presence"
          tag="Our Clients"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025232652-ga07pd7x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025233619-b3rj316d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025234386-lycnbxrh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025235100-pdw4mu2y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025235891-cn0xk6qy.jpg"
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Talented professionals passionate about creating marketing excellence and delivering results"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          members={[
            {
              id: "1",
              name: "Alexandra Mitchell",
              role: "Creative Director",
              description: "Visionary leader with 12+ years driving innovative brand campaigns across Fortune 500 companies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025238337-mcknlamw.jpg",
              imageAlt: "Alexandra Mitchell",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Strategy Lead",
              description: "Data scientist and strategist specializing in marketing analytics and growth optimization for scaling brands",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025239702-orbqzo8t.jpg",
              imageAlt: "Marcus Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Design Lead",
              description: "Award-winning designer creating beautiful, conversion-focused digital experiences and brand identities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025240437-mx4nj8fl.jpg",
              imageAlt: "Elena Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://portfolio.com" }
              ]
            },
            {
              id: "4",
              name: "James Robertson",
              role: "Head of Content",
              description: "Storyteller and copywriter crafting compelling narratives that build brand loyalty and drive engagement",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025241174-0pdqlgyq.jpg",
              imageAlt: "James Robertson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Trusted by over 200 brands globally who have transformed their market presence with our strategic marketing expertise"
          cardTag="Client Success Stories"
          cardTagIcon={Star}
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025241787-mandwsbb.png",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Torres",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025242811-1jewtgpl.jpg",
              imageAlt: "Michael Torres"
            },
            {
              id: "3",
              name: "Jessica Lee",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025243560-ndqzl2qc.jpg",
              imageAlt: "Jessica Lee"
            },
            {
              id: "4",
              name: "David Kumar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025244041-sit172d8.jpg",
              imageAlt: "David Kumar"
            },
            {
              id: "5",
              name: "Nicole Palmer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025244599-wbilryx6.jpg",
              imageAlt: "Nicole Palmer"
            },
            {
              id: "6",
              name: "Christopher Adams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025245359-7vurtqg2.jpg",
              imageAlt: "Christopher Adams"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our services, pricing, and working with Brandify"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What types of businesses do you work with?",
              content: "We partner with businesses of all sizes across industries - from startups scaling their first campaigns to established enterprises optimizing their marketing mix. Our expertise spans B2B, B2C, e-commerce, SaaS, and service-based businesses."
            },
            {
              id: "2",
              title: "How long does it take to see results?",
              content: "Results vary by campaign and goals. Brand awareness campaigns typically show traction within 2-4 weeks, while conversion-focused campaigns often see meaningful results within 6-8 weeks. We focus on long-term sustainable growth while delivering quick wins."
            },
            {
              id: "3",
              title: "What's included in your service packages?",
              content: "Our packages typically include strategy development, creative creation, campaign management, analytics reporting, and ongoing optimization. We customize packages based on your goals, budget, and timeline to ensure maximum ROI."
            },
            {
              id: "4",
              title: "Do you offer ongoing support or project-based work?",
              content: "We offer both! Choose from our retainer partnerships for continuous marketing support or project-based engagements for specific campaigns. We can also flex between models as your needs evolve."
            },
            {
              id: "5",
              title: "How do you measure campaign success?",
              content: "We establish clear KPIs from day one - whether that's traffic, leads, conversions, or revenue. We provide monthly reports with transparent analytics and insights, always focusing on metrics that matter to your business."
            },
            {
              id: "6",
              title: "What makes Brandify different from other agencies?",
              content: "We combine creative excellence with data-driven strategy, treating every client as a long-term partner rather than a transaction. Our team stays current with industry trends while maintaining a focus on delivering measurable business impact."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights & Articles"
          description="Industry trends, marketing strategies, and insights from our team to keep your brand ahead"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Strategy",
              title: "5 Marketing Trends Dominating 2025",
              excerpt: "Discover the strategies and technologies reshaping the marketing landscape and how to stay competitive",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025245893-r005gbr3.jpg",
              imageAlt: "Marketing trends 2025",
              authorName: "Alexandra Mitchell",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025238337-mcknlamw.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Social Media",
              title: "Mastering Social Media Strategy for Maximum Engagement",
              excerpt: "Learn proven techniques to build authentic communities and drive meaningful engagement on every platform",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025246479-byd7qrks.jpg",
              imageAlt: "Social media strategy",
              authorName: "James Robertson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025241174-0pdqlgyq.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Case Study",
              title: "How We Grew Startup Revenue 300% in 6 Months",
              excerpt: "Behind-the-scenes look at the strategy, execution, and optimization that delivered extraordinary results",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025247386-da9jeegc.jpg",
              imageAlt: "Content marketing success",
              authorName: "Marcus Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766025239702-orbqzo8t.jpg",
              date: "8 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your brand and dominate your market? Let's collaborate and create something extraordinary together"
          animationType="reveal-blur"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Schedule Consultation", href: "mailto:hello@brandify.com" },
            { text: "View Our Portfolio", href: "#portfolio" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Brandify"
          logoAlt="Brandify"
        />
      </div>
    </ThemeProvider>
  );
}