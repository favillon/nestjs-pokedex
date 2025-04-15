export const EnvConfig = () => ({
    env : process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB,
    dirStatic: process.env.DIR_STATIC || 'public',
    defaultLimit : Number(process.env.DEFAULT_LIMIT) || 10,
})