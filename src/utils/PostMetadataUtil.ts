export class PostMetadataUtil {
  static getMetadata(
    postTitle: string | undefined,
    postDescription: string | undefined,
  ): { title: string | undefined; description: string | undefined } {
    return {
      title: `Blog de Antoine Raymond | ${postTitle}`,
      description: postDescription,
    };
  }
}
