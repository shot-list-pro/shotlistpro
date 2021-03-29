import React from "react";
import Header from "../components/Header";
import UploadZone from "../components/UploadZone";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { ProductionContext } from "../context/productionContext";
import { useEffect, useContext } from "react";

const ProductionPage = () => {
  const { id } = useParams();
  const { production, getAProduction } = useContext(ProductionContext);

  useEffect(() => {
    getAProduction(id);
  }, []);

  console.log(production);
  return (
    <>
      <Header />
      <UploadZone img={production.thumbnail} />
      <TitleBar production={production} />
      {/*<Description /> */}
      <Footer />
    </>
  );
};

export default ProductionPage;
