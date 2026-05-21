import { defineConfig } from 'jsrepo';
import { defineShadcnRegistry, output } from "@jsrepo/shadcn";

export default defineConfig({
    registry: defineShadcnRegistry({
        name: "@ai/prompt-kit",
        homepage: 'https://sv-prompt-kit.vercel.app',
        items: [
            {
                name: 'chain-of-thought',
                type: 'block',
                dependencies: ['bits-ui'],
                registryDependencies: ['collapsible'],
                dependencyResolution: 'manual',
                files: [
                    {
                        path: 'src/lib/components/ai/chain-of-thought',
                        type: 'component',
                    }
                ]
            }
        ],
        excludeDeps: ['svelte'],
        outputs: [output({ dir: './public/r/shadcn' })]
    }),
    // configure where stuff comes from here
    registries: [],
    // configure where stuff goes here
    paths: {
    },
});