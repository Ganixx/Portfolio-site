import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      className="absolute inset-0"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: '#00f0ff',
          },
          links: {
            color: '#00f0ff',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground 