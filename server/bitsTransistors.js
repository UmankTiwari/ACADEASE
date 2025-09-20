/**
 * Data for the "Bits and Transistors" learning module.
 * This array holds the content for each topic within the module.
 */
export const bitsTransistorsTopics = [
  {
    id: 'what-is-a-bit',
    title: 'What Is a Bit?',
    description:
      'Learn about the fundamental unit of digital information, the bit, which can represent one of two states: 0 or 1. It is the smallest piece of data a computer can process.',
    modelBitPath: '/models/bit.glb',
    modelTransistorPath: null, // No transistor model for this basic topic
    diagramConfig: {
      nodes: [
        { id: '1', type: 'input', data: { label: 'Information' }, position: { x: 250, y: 5 } },
        { id: '2', data: { label: 'A Single Bit' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'output', data: { label: 'State: 0 (Off)' }, position: { x: 100, y: 200 } },
        { id: '4', type: 'output', data: { label: 'State: 1 (On)' }, position: { x: 400, y: 200 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e2-4', source: '2', target: '4' },
      ],
    },
    videoUrl: 'https://www.youtube.com/embed/Xk24d_2k0gE',
  },
  {
    id: 'what-is-a-transistor',
    title: 'What Is a Transistor?',
    description:
      'Discover the transistor, a tiny semiconductor device that acts as a switch or amplifier. It is the fundamental building block of all modern electronics.',
    modelBitPath: null, // No bit model for this topic
    modelTransistorPath: '/models/transistor.glb',
    diagramConfig: {
      nodes: [
        { id: 'gate', type: 'input', data: { label: 'Control Signal (Gate)' }, position: { x: 50, y: 100 } },
        { id: 'switch', data: { label: 'Transistor Switch' }, position: { x: 250, y: 100 } },
        { id: 'source', type: 'input', data: { label: 'Power Source' }, position: { x: 250, y: 5 } },
        { id: 'output', type: 'output', data: { label: 'Output Signal' }, position: { x: 250, y: 200 } },
      ],
      edges: [
        { id: 'eg-s', source: 'gate', target: 'switch', animated: true, label: 'Turns switch on/off' },
        { id: 'es-s', source: 'source', target: 'switch' },
        { id: 'es-o', source: 'switch', target: 'output' },
      ],
    },
    videoUrl: 'https://www.youtube.com/embed/IcrBqCFLHIY',
  },
  // You can add more topics here, such as "How Transistors Create Bits"
];