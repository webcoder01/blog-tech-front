import Markdown from "react-markdown";

interface LegalNoticeProps {
  content: string;
}

export function LegalNotice({ content }: LegalNoticeProps) {
  return (
    <main>
      <h1>Mentions légales</h1>
      <section>
        <Markdown>{content}</Markdown>
      </section>
    </main>
  );
}
