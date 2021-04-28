import { post } from "@util/http";

const backend = "yourbackendurl";

const handler = async (req, res) => {
  let statusCode = 200;

  const route = "/contact";
  const url = `${backend}${route}`;
  const data = req.body;

  const errValidation = "Failed validation";
  const errCommunication = "Communication error with mail provider";

  // only accept POST requests from front-end
  if (req.method !== "POST") {
    res.status(404).json({
      ok: false,
      message: `"POST" required on route "${route}"; got "${req.method}"`,
    });

    return;
  }

  // send payload to Serverless back-end and await response
  const response = await post({ url, data });

  if (response.message == errValidation) {
    statusCode = 400;
  } else if (response.message == errCommunication) {
    statusCode = 500;
  }

  res.status(statusCode).json({
    ok: response.ok,
    validation: response.validation,
    message: response.message,
  });
};

export default handler;
