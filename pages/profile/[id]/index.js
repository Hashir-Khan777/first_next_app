import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  return (
    <div>
      <h1>Hello profile {router.query.id}</h1>
    </div>
  );
}
