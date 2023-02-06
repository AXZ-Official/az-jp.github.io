const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;

const useDiscordInvite = (): string => (
  `https://discord.gg/${DISCORD_INVITE_CODE}`
);

export { useDiscordInvite };
