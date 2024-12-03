import dayjs from "dayjs";
import "dayjs/locale/fr";

export class PostDateUtil {
  static getReadableFormat(postDate: string): string {
    return dayjs(postDate).locale("fr").format("DD MMMM YYYY");
  }
}
