# Dreambooth Finetunning JS

A javascript library to create and run dreambooth models on replicate.

## Install

```bash
npm i dreambooth-finetunning-js
```

## Usage

### Creating a model

1. Go to replicate.com and get your API key.

2. Zip your pictures and upload them to somewhere accessible via HTTP. Get the download link.

3.

```javascript
import DreamboothFineTunningJS from "dreambooth-finetunning-js";

const API_KEY = "$YOUR_API_KEY";
const dbft = new DreamboothFineTunningJS(API_KEY);

const instanceData = "$LINK_TO_YOUR_ZIPPED_PICURES";
const model = "$YOUR_REPLICATE_USERNAME/$ANY_NAME_U_WANT_FOR_YOUR_MODEL";
const className = "$CLASS_OF_YOUR_SUBJECT"; // examples: man, woman, dog etc
const webhookCompleted = ""; // webhook to be called once the model is created. If may leave it empty.
const maxTrainSteps = 2000; // max number of train steps. Leave it as 2000 if you don't know what it means.

dbft
  .createModel(instanceData, model, className, webhookCompleted, maxTrainSteps)
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### Running a model

1. Login on replitcate, go to your dashboard and wait for the 'Succeded' status in your model.

2. Go to models, click on the model you created, go to versions and copy version string.

```javascript
import DreamboothFineTunningJS from "dreambooth-finetunning-js";

const API_KEY = "$YOUR_API_KEY";
const dbft = new DreamboothFineTunningJS(API_KEY);

const prompt = "$YOUR_PROMPT_AFTER_CJW"; // example: a cjw dog in a bucket, digital art
const verion = "$VERSION_STRING";

dbtf
  .runModel(prompt, version)
  .then(res => console.log(res))
  .catch(err => console.log(err));
```
