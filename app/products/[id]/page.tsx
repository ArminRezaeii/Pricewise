import { getProductById } from "@/lib/actions";
import { redirect } from "next/navigation";
interface Props {
  params: { id: string };
}
export default async function pageDetails({ params: { id } }: Props) {
  const product = await getProductById(id);
  if(!product) redirect('/')
  return <div>pageDetails</div>;
}
