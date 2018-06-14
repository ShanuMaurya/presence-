const DiscordRPC = require("discord-rpc");

const ClientId = '456423224960352268';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `Modification of Pεтяσℓ Mαятιηι`,
    state: 'Working on Pεтяσℓ.BrainZ',
    largeImageKey: 'hr2',
    largeImageText: 'work',
    smallImageKey: 'hr',
    smallImageText: 'work',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
