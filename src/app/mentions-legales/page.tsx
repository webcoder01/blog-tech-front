import { LegalNoticeRequest } from "@/infrastructure/request/LegalNoticeRequest";
import { ApiClient } from "@/infrastructure/request/ApiClient";
import { LegalNotice } from "@/app/_components/LegalNotice/LegalNotice";

async function getData() {
  const legalNoticeData = new LegalNoticeRequest(new ApiClient());

  return await legalNoticeData.get();
}

export default async function Page() {
  const legalNoticeData = await getData();

  return <LegalNotice content={legalNoticeData.content} />;
}
