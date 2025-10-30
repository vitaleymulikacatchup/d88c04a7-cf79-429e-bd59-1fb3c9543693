"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Target, FlaskConical, Leaf, Trophy, Sparkles, TrendingUp, DollarSign, Star, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="GymFuel"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fuel Your Fitness Journey"
          description="Premium supplements designed for serious athletes. Build muscle, boost energy, and achieve your fitness goals with our scientifically-formulated products."
          tag="Premium Quality"
          tagIcon={Award}
          buttons={[
            {
              text: "Shop Supplements",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/16216609/pexels-photo-16216609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="Premium gym supplements and protein powder"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Science-Based Nutrition"
          description="We combine cutting-edge research with premium ingredients to create supplements that deliver real results for athletes and fitness enthusiasts."
          tag="Our Mission"
          tagIcon={Target}
          bulletPoints={[
            {
              title: "Lab-Tested Quality",
              description: "Every batch is third-party tested for purity and potency",
              icon: FlaskConical
            },
            {
              title: "Premium Ingredients",
              description: "Sourced from trusted suppliers worldwide for maximum effectiveness",
              icon: Leaf
            },
            {
              title: "Athlete Approved",
              description: "Trusted by professional athletes and fitness competitors",
              icon: Trophy
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="left"
          imageAlt="Athletic person training in modern gym"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Product Categories"
          description="Discover our complete range of supplements designed to support every aspect of your fitness journey"
          tag="Products"
          tagIcon={Sparkles}
          features={[
            {
              title: "Protein Powders",
              description: "High-quality whey and plant-based proteins for muscle building and recovery",
              imageSrc: "https://images.pexels.com/photos/13787644/pexels-photo-13787644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Protein powder supplement",
              button: {
                text: "Shop Protein",
                href: "products"
              }
            },
            {
              title: "Pre-Workout",
              description: "Energy-boosting formulas to maximize your training performance",
              imageSrc: "https://images.pexels.com/photos/5383504/pexels-photo-5383504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pre workout energy supplement",
              button: {
                text: "Shop Pre-Workout",
                href: "products"
              }
            },
            {
              title: "Recovery & Support",
              description: "Creatine, BCAAs, and recovery supplements for optimal results",
              imageSrc: "https://images.pexels.com/photos/4378523/pexels-photo-4378523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creatine and recovery supplements",
              button: {
                text: "Shop Recovery",
                href: "products"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Best Selling Supplements"
          description="Our top-rated products trusted by thousands of athletes worldwide"
          tag="Popular"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              brand: "GymFuel",
              name: "Whey Protein Isolate",
              price: "$49.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/13787644/pexels-photo-13787644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Whey protein isolate container"
            },
            {
              id: "2",
              brand: "GymFuel",
              name: "Pre-Workout Extreme",
              price: "$39.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/4378331/pexels-photo-4378331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pre workout supplement container"
            },
            {
              id: "3",
              brand: "GymFuel",
              name: "Creatine Monohydrate",
              price: "$29.99",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/33921585/pexels-photo-33921585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creatine monohydrate supplement jar"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Supplement Bundles"
          description="Save more with our carefully curated supplement packages designed for different fitness goals"
          tag="Save Money"
          tagIcon={DollarSign}
          plans={[
            {
              id: "1",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "$89.99",
              subtitle: "Perfect for serious athletes",
              features: [
                "Whey Protein Isolate (2lbs)",
                "Pre-Workout Extreme",
                "Creatine Monohydrate",
                "Free Shaker Bottle",
                "Free Shipping"
              ]
            },
            {
              id: "2",
              badge: "Starter Pack",
              price: "$59.99",
              subtitle: "Great for beginners",
              features: [
                "Whey Protein Isolate (1lb)",
                "Pre-Workout Sample Pack",
                "Training Guide",
                "Free Shipping"
              ]
            },
            {
              id: "3",
              badge: "Pro Stack",
              price: "$129.99",
              subtitle: "For competitive athletes",
              features: [
                "Whey Protein Isolate (3lbs)",
                "Pre-Workout Extreme",
                "Creatine Monohydrate",
                "BCAA Complex",
                "Recovery Formula",
                "Premium Shaker Set",
                "Free Shipping"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Athletes Say"
          description="Real results from real athletes who trust GymFuel supplements"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Professional Bodybuilder",
              company: "IFBB Pro League",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/10350343/pexels-photo-10350343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson professional bodybuilder"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Fitness Competitor",
              company: "NPC National Champion",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/14037022/pexels-photo-14037022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen fitness competitor"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Powerlifter",
              company: "IPF World Record Holder",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7187985/pexels-photo-7187985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Rodriguez powerlifter"
            },
            {
              id: "4",
              name: "Emily Foster",
              role: "Personal Trainer",
              company: "ACSM Certified",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6739930/pexels-photo-6739930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Foster personal trainer"
            },
            {
              id: "5",
              name: "Jake Wilson",
              role: "CrossFit Athlete",
              company: "Regional Competitor",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/10350343/pexels-photo-10350343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jake Wilson CrossFit athlete"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Get Fitness Tips & Exclusive Deals"
          description="Join thousands of athletes who receive our weekly nutrition tips, workout guides, and exclusive supplement discounts."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing you agree to receive marketing emails. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/6740778/pexels-photo-6740778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Gym supplements and healthy nutrition"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="GymFuel"
          columns={[
            {
              items: [
                {
                  label: "Protein Powders",
                  href: "products"
                },
                {
                  label: "Pre-Workout",
                  href: "products"
                },
                {
                  label: "Recovery",
                  href: "products"
                },
                {
                  label: "Bundles",
                  href: "pricing"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Lab Results",
                  href: "about"
                },
                {
                  label: "Athlete Stories",
                  href: "testimonials"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Shipping Info",
                  href: "#"
                },
                {
                  label: "Returns",
                  href: "#"
                },
                {
                  label: "FAQ",
                  href: "#"
                },
                {
                  label: "Support",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}