import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Marcos Duarte</strong>, sua <strong>Camiseta Beyond the Limits</strong> já a caminho de sua casa. 
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}