import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzQ4MWEwNW03QGdlY2d1ZGxhdmFsbGVydW1pYy5pbiIsImV4cCI6MTc3ODMwNzYyNSwiaWF0IjoxNzc4MzA2NzI1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzRkZTViOWQtNTVhNC00ZTc0LTkyOTgtNmFjOTk0ZDhmNmJiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2luZ2FsdXJpIGtvbmRhIHJvaGFuIiwic3ViIjoiNmZlNTJmNjAtMGVkOS00NTA1LTllMzgtMzA3MDlkMWMxZDQ1In0sImVtYWlsIjoiMjM0ODFhMDVtN0BnZWNndWRsYXZhbGxlcnVtaWMuaW4iLCJuYW1lIjoic2luZ2FsdXJpIGtvbmRhIHJvaGFuIiwicm9sbE5vIjoiMjM0ODFhMDVtNyIsImFjY2Vzc0NvZGUiOiJlSmRDdUMiLCJjbGllbnRJRCI6IjZmZTUyZjYwLTBlZDktNDUwNS05ZTM4LTMwNzA5ZDFjMWQ0NSIsImNsaWVudFNlY3JldCI6InZtcHJUc0VKdWJhZkdRbUEifQ.VM6na54Pc8fDV3olnREQ5elcbGGGnNmSrV3FQ7ZE7bA";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};