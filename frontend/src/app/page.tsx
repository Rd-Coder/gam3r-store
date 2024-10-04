import { GridProdutos } from "@/components/produto/grid";
import produtos from "@/core/produto/constants";

export default function Home() {
  return (
    <GridProdutos produtos={produtos} className="mt-10"/>
  );
}
