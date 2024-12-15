import MainpageLayout from "@/Layout/MainpageLayout/MainpageLayout";
import { useRouter } from "next/router";

function ServicePage() {
  const router = useRouter();
  const { id } = router.query;

  return <MainpageLayout />;
}

export default ServicePage;
