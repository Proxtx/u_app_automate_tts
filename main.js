import { clients, refreshClients } from "../../private/clients.js";

export class App {
  constructor(config) {
    this.config = config;
  }

  async tts(content) {
    await refreshClients();

    let client = clients[this.config.client];

    return (
      await client.request("automate_tts", "tts", [
        {
          text: content,
        },
      ])
    ).result
      ? "Success"
      : "Error";
  }
}
