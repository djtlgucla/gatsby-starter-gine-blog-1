module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/dtlmd/0131295c57b34fb2840b34b87bfcfc73?v=0ad453b9ab114e1d89f259a895624c66"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/dtlmd/2d2633298da943c7b96ac5f6e58908bc?v=ff5a72fa1bd9425db2510dff12cd6dc5"
            }
        }
    ],
}
