import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Hero } from '../components/layout/hero';
import { Button } from '../components/form/button';

const meta: Meta<typeof Hero> = {
  title: 'Layout/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero section component for landing pages and featured content using DaisyUI hero classes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic hero
export const BasicHero: Story = {
  render: () => (
    <Hero className="min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </div>
    </Hero>
  ),
};

// Hero with background image
export const HeroWithImage: Story = {
  render: () => (
    <Hero
      className="min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </div>
    </Hero>
  ),
};

// Landing page hero
export const LandingPageHero: Story = {
  render: () => (
    <Hero className="min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="hero-content text-center text-primary-content">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6">
            Build amazing apps with our component library
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Get started quickly with our comprehensive collection of React components built with TailwindCSS and DaisyUI.
            Perfect for modern web applications.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" color="accent">
              Start Building
            </Button>
            <Button size="lg" style="outline" className="text-white border-white hover:bg-white hover:text-primary">
              View Docs
            </Button>
          </div>
        </div>
      </div>
    </Hero>
  ),
};