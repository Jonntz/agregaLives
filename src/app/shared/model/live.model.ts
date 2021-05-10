import { SafeResourceUrl } from "@angular/platform-browser";

export class Live {
  id!: string;
  liveName: string = '';
  channelName: string = '';
  liveDate: string = '';
  liveTime: string = '';
  liveLink: string = '';
  registrationName: string = '';
  urlSafe!: SafeResourceUrl;
}
