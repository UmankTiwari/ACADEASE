export const terminalTopics = [
  {
    id: 'navigation',
    title: 'File Navigation',
    description: 'Learn how to navigate directories and files in the terminal',
    commandList: [
      { cmd: 'ls', description: 'List files and directories' },
      { cmd: 'cd', description: 'Change directory' },
      { cmd: 'pwd', description: 'Print working directory' }
    ],
    tips: 'Use Tab to auto-complete file and directory names'
  },
  {
    id: 'file-operations',
    title: 'File Operations',
    description: 'Create, read, and manipulate files from the command line',
    commandList: [
      { cmd: 'touch', description: 'Create a new file' },
      { cmd: 'mkdir', description: 'Create a new directory' },
      { cmd: 'rm', description: 'Remove files' }
    ],
    tips: 'Be careful with rm - it permanently deletes files!'
  }
];
