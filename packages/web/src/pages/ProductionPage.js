import { Container } from "@chakra-ui/react";
import Header from "../components/Header";
import UploadZone from "../components/UploadZone";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import ProductionContent from "../components/ProductionContent";

import { useParams } from "react-router-dom";
import { ProductionContext } from "../context/productionContext";
import { useEffect, useContext } from "react";

const ProductionPage = () => {
  const { id } = useParams();
  const { production, getAProduction } = useContext(ProductionContext);

  useEffect(() => {
    getAProduction(id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <UploadZone img={production.thumbnail} />
      <TitleBar production={production} />
      <ProductionContent production={production} />
      <Footer />
    </>
  );
};

export default ProductionPage;
