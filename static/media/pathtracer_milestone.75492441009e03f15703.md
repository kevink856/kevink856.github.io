# Photon Mapping Milestone

Before starting the implementation of photon mapping, this Monte Carlo path tracer can utilize direct + indirect components with optimizations and quality features, such as importance sampling.

The capability for this path tracer can be illustrated with a 480x480 rendering of the Cornell Box, with one area light and a sphere with specular reflectance:

![cornellBRDF](https://i.imgur.com/yDmSVUn.png)

> Rendered using BRDF Importance Sampling

Clearly, while the accuracy of the global illumination is notably improved through these path tracing techniques, it introduces a lot of noise scattered throughout the scene.


---


Photon Mapping aims to greatly reduce that noise using an alternate two-pass method:

1. Photon Tracing - Photons are emitted from the light source(s) and traced as regular rays, stopping once some absorbed or max bounces reached. All surface hits are then stored for later use.

2. Rendering - The stored photons around a certain area on each rendered hit-pixel are used to estimate the density of photons / light on that spot, approximating a much more realistic and efficient effect, allowing for things like caustics to be feasible.

The effect of photon mapping in the rendering step is that instead of accumulating many rays that may bounce many times from each hit-pixel to check for light contribution, we simply estimate the density of photons. Effectively, in the rendering equation this substitutes the irradiance / flux term with this new density estimate.

In total, the path tracer needs to render direct illumination, indirect illumination, specular reflection and caustics to achieve a full render that adds on to the path tracer. The direct and indirect components are separate from the photon mapping, and are computed with typical path tracing techniques.


---


Currently, in the progress of implementing photon mapping, the path tracer can perform photon tracing.

Using the same Cornell Box scene, the emission and storage of photons can be illustrated with this rendering:

![cornellPhoton](https://i.imgur.com/jeyKjEq.png)

> Rendered using Photon Tracing - 10000 photons

The outline of the area light can be seen, and all of the white dots represent a photon hitting a surface. This render uses a maximum number of 1 bounce, showing a clearer image of how objects, particularly specular ones, do not store direct photon emission but bounces them, evident from the "shadow" below it.


---


Besides the components of the rendering equation, what needs to still be implemented is a kd-tree to efficiently retrieve stored photon hits when computing density (currently, all photon hits are being traversed linearly at every pixel-hit), allowing testing with more photons and more bounces.