const pageConfig = {
  // Title for your status page
  title: "Kel Cuprum Infrastructure",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/kel-cu', label: 'GitHub' },
    { link: 'https://kelcu.ru', label: 'Site' },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'site',
      name: 'Main Site',
      method: 'GET',
      target: 'https://kelcuprum.ru',
    },
    {
      id: 'api',
      name: 'Alina API',
      method: 'GET',
      target: 'https://api.kelcuprum.ru',
    },
    {
      id: 'waterfiles',
      name: 'WaterFiles',
      method: 'GET',
      target: 'https://wf.kelcu.ru',
    },
    {
      id: 'repo',
      name: 'Maven Repository',
      method: 'GET',
      target: 'https://maven.kelcu.ru/#',
    },
    {
      id: 'waterplayer',
      name: 'WaterPlayer Site',
      method: 'GET',
      target: 'https://waterplayer.ru',
    },
    {
      id: 'waterplayer-api',
      name: 'WaterPlayer API',
      method: 'GET',
      target: 'https://wplayer.ru',
    },
    {
      id: 'pplhelper',
      name: 'PPL Helper Site',
      method: 'GET',
      target: 'https://pplh.ru',
    },
    {
      id: 'pplhelper-api',
      name: 'PPL Helper API',
      method: 'GET',
      target: 'https://api.pplh.ru',
      expectedCodes: [200, 404],
    },
    {
      id: 'red',
      name: 'Redirects',
      method: 'GET',
      target: 'https://kelcu.ru',
      expectedCodes: [200, 404],
    },
    {
      id: 'clovi',
      name: 'Clovi',
      method: 'GET',
      target: 'https://clovi.art',
      expectedCodes: [200, 404],
    }
  ],
  notification: {
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
