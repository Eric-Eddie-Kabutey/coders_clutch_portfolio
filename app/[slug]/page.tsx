'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { clients_project } from '@/constant';
import Hero from '@/components/portfolio/details/hero';
import Overview from '@/components/portfolio/details/overview';
import DesignProcess from '@/components/portfolio/details/design-process';
import Concepts from '@/components/portfolio/details/concepts';
import ChallengeSolution from '@/components/portfolio/details/challenge-solution';
import Impact from '@/components/portfolio/details/impact';
import TechStack from '@/components/portfolio/details/tech-stack';
import NextProject from '@/components/portfolio/details/next-project';
import Slider from '@/components/portfolio/details/slider';
import Successstory from '@/components/portfolio/details/successstory';

import Image from 'next/image';

interface PageProps {
    params: {
        slug: string;
    };
}

// Helper function to convert title to URL-friendly slug
const titleToSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

const ProjectDetail = ({ params }: PageProps) => {
    const slug = decodeURIComponent(params.slug);

    // Try to find by title-based slug first, then fall back to old slug or id
    const project = clients_project.find(p => titleToSlug(p.title) === slug)
        || clients_project.find(p => p.slug === slug)
        || clients_project.find(p => p.id === slug);

    if (!project) {
        notFound();
    }

    const currentIndex = clients_project.findIndex(p => p.id === project.id);
    const nextProject = clients_project[(currentIndex + 1) % clients_project.length];

    return (
        <main className="w-full bg-white text-app-primary-medium">
            <Hero
                title={project.title}
                heroImage={project.images?.hero || project.img}
                secondaryImage={project.images?.hero2 || project.img}
                tags={project.tags}
                client={project.client}
                role={project.role}
                year={project.year}
            />

            <Overview
                overview={project.overview || project.description}
                liveUrl={project.liveUrl}

            />
            <div className="w-full flex justify-center py-6">
                <div className="w-[2px] h-20 bg-gray-200" />
            </div>
            <DesignProcess
                designProcess={project.designProcess}
                processSteps={project.processSteps}
            />

            {project.images?.gallery && (
                <Concepts gallery={project.images.gallery} />
            )}

            {(project.challenge || project.solution) && (
                <ChallengeSolution
                    challenge={project.challenge}
                />
            )}

            {project.midSectionImage && (
                <section className="w-full">
                    <Image
                        src={project.midSectionImage}
                        alt="Project Visual"
                        width={2400}
                        height={1600}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="block"
                    />
                </section>
            )}

            {project.impact && (
                <Impact
                    impact={project.impact}
                />
            )}

            <Slider images={project.images?.responsive || []} />

            {project.techStack && (
                <TechStack techStack={project.techStack} />
            )}

            <NextProject
                slug={titleToSlug(nextProject.title)}
                title={nextProject.title}
            />
            <Successstory />
        </main>
    );
};

export default ProjectDetail;
