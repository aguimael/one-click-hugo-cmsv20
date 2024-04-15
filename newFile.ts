// stackbit.config.ts
export default defineStackbitConfig({
    contentSources: [
        new GitContentSource({
            models: [
                {
                    name: "Page",
                    type: "page",
                    urlPath: "/{slug}",
                    filePath: "content/pages/{slug}.json",
                    fields: [{ name: "title", type: "string", required: true }]
                }
                // ...
            ]
            // ...
        })
    ]
});
