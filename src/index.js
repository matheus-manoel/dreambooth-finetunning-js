import fetch from "node-fetch";

class DreamboothFineTunningJS {
  constructor(apiKey = "") {
    this.apiKey = apiKey || process.env.DREAMBOOTH_API_KEY;
  }

  async createModel(
    instanceData,
    model,
    className = "dog",
    webhookCompleted = "",
    maxTrainSteps = 2000
  ) {
    const body = {
      input: {
        instance_prompt: `a photo of a cjw ${className}`,
        class_prompt: `a photo of a ${className}`,
        instance_data: instanceData,
        max_train_steps: maxTrainSteps
      },
      model,
      webhook_completed: webhookCompleted
    };

    const response = await fetch(
      "https://dreambooth-api-experimental.replicate.com/v1/trainings",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.apiKey}`
        }
      }
    );

    return await response.json();
  }

  async runModel(prompt, version) {
    const body = {
      input: {
        prompt
      },
      version
    };

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token 3c795a0515965488a0ed2adb7667484cd97af9f2`
      }
    });

    return await response.json();
  }
}

module.exports = DreamboothFineTunningJS;
