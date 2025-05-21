import { getServiceDetail } from "@/lib/servicedetail";
import ServicePageSingle from "@/sections/(Service)/ServicePageSingle";
import { notFound } from "next/navigation";

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  try {
    const service = await getServiceDetail(slug);
    return (
      <div>
        <ServicePageSingle service={service} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching service:", error);
    notFound(); 
  }
}