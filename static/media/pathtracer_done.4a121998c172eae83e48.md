# Photon Mapping

![caustics](https://i.imgur.com/S2vsZ0N.png)
> 1 million photons, k = 200, ~26 minutes to render

![spheres_10m](https://i.imgur.com/9OSZair.png)
> 10 million photons, k = 200, ~40 minutes to render

Photon mapping is an approach to global illumination that aims to approximate complex lighting techniques with ideally non-stochastic methods. Contrary to a typical Monte Carlo path tracer with techniques such as importance sampling, photon mapping both reduces noise and allows for features such as caustics to be rendered at a fast speed, though overall, Monte Carlo lighting is more accurate.

Photon Mapping uses a two-pass method:

1. Photon Tracing - Photons are emitted from the light source(s) and traced as regular rays, bouncing either diffusely or specularly. This is determined with Russian Roulette. The photons are then stored in a kd-tree once they hit a diffuse surface, or destroyed if absorbed.

2. Rendering - The stored photons allow for an approximation of radiance at any pixel when solving the rendering equation, as instead of sampling many photons, the photon map can be used to simply gather the k-nearest photon hits around the pixel. This radiance is used for caustics and soft indirect lighting, while direct and indirect lighting is left to the traditional Monte Carlo pathtracing techniques, as doing them with photon mapping requires much more computational power or memory.

The photon tracing step importantly stores every hit on levels of recursive bounces which allows for things like color bleeding, soft shadows, etc., but the simple idea can be visualized with just direct photon emission:

![direct](https://i.imgur.com/qXh3FE8.png)
> 10 million photons, k = 25, ~34 minutes to render

---

With these photon hits being able to produce radiance estimates as shown above, the rendering equation can be solved.

![equation](https://i.imgur.com/GS9HDXg.png)

Specifically, the rendering equation is rewritten into 4 components - direct, specular (indirect), caustics, soft indirect.

For this project, caustics and soft indirect are combined and handled at the same time. It can be more convenient and correct to split them up into two maps, caustics and indirect photon maps, especially if different BRDF's and computing methods are used, but they are combined for simplicity.

For direct, the best way to approach shadows is with a shadow map that essentially mimics a photon map but with inverse power. While this is intuitive and effective, a standard ray-tracing method with sampling is much more efficient and thus is used in this project.

For specular, there is a lot of information that is lost or minimized during photon bouncing and therefore contribute almost nothing to the rendering equation, so it would require a massive amount of photons, probably in the billions for it to be effective. Therefore we use traditional Monte Carlo path tracing with importance sampling techniques.

---

There are a few other parameters to consider. First and most obvious is the number of photons shot themselves as this has two major effects - One, the more photons the more focused and convergent the lighting becomes as a whole (useful for focused lights like caustics), but also can significantly increase bias and create predictable patterns, ruining randomness - Two, too few photons results in an overwhelmingly bright image, because each photon has more power and are less evenly distributed. Even lighting features like caustics will nearly disappear entirely. It is therefore important to come to a good balance:

![spheres_100k](https://i.imgur.com/8raRbsj.png)
> 100k photons, k = 200, ~8 minutes to render

![spheres_10k](https://i.imgur.com/phhbF81.png)
> 10k photons, k = 200, ~6 minutes to render

---

Finding the k-nearest neighbors in a kd-tree to gather nearby photons for radiance estimation also reveals the importance in picking k. Too high of a number and this approximation is essentially meaningless as it will consider too much light around each pixel, but too few and blotches will appear as if the scene is underwater, since each pixel can't gather similar densities of photons:

![k100](https://i.imgur.com/GBoxzbo.png)
> 1m photons, k = 100, ~8 minutes to render

![k50](https://i.imgur.com/MP9RPmO.png)
> 1m photons, k = 50, ~5 minutes to render

---

*With reference to [Realistic Image Synthesis Using Photon Mapping](http://graphics.ucsd.edu/~henrik/papers/book/) and [kdtree2](https://github.com/jmhodges/kdtree2)*