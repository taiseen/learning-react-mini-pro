const endpoint = (runModel) => {
    console.log(runModel);
}

const api = {
    ai: {
        model: () => {
            const model = 'gpt-4-turbo';
            return model;
        },

        apiRun: () => {
            const model = api.ai.model();
            endpoint(model);
        }
    }
}

api.ai.apiRun();
