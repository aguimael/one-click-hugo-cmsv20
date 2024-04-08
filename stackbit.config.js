export default {
    mapModels({ models }) {
      return models.map((model) => {
        return {
          ...model,
          // Add or adjust model properties ...
        }
      })
    },
  }