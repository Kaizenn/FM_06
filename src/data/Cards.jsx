import image1 from '/src/assets/images/icon-supervisor.svg'
import image2 from '/src/assets/images/icon-team-builder.svg'
import image3 from '/src/assets/images/icon-karma.svg'
import image4 from '/src/assets/images/icon-calculator.svg'

export const cards = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    area: 'supervisor',
    image: image1,
    borderColor: 'border-cyan',
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    area: 'team-builder',
    image: image2,
    borderColor: 'border-red',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    area: 'karma',
    image: image3,
    borderColor: 'border-orange',
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    area: 'calculator',
    image: image4,
    borderColor: 'border-blue',
  },
]
