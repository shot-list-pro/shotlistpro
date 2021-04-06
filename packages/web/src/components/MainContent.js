import { Heading, Grid, Box, Button, Icon, Text } from "@chakra-ui/react";
import ProductionCard from "./ProductionsCard";
import { ReactComponent as SlateIcon } from "../assets/slate-icon.svg";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductionContext } from "../context/productionContext";
const MainContent = () => {
  const { productions, getAllProductions } = useContext(ProductionContext);

  useEffect(() => {
    getAllProductions();
  }, []);

  return (
    <Box paddingTop={10} paddingBottom={20}>
      <Heading
        py={8}
        px={{ base: 5, sm: 10, md: 50, xl: 100 }}
        size="lg"
        textTransform="uppercase"
        fontWeight="light"
      >
        Current Productions
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(auto-fit, 300px)",
          sm: "repeat(auto-fit, 360px)",
          md: "repeat(auto-fit, 460px)",
        }}
        gap={{ base: 10, md: 20, lg: 20 }}
        gridAutoFlow="row"
        justifyContent="center"
        w="full"
        justify={["center", "center", "start", "center"]}
        px={[5, 10, 50, 100]}
      >
        {/* Loop over Productions and Create Cards */}
        {/* Link to single production page */}
        {productions.map(production => (
          <Link to={{ pathname: `/productions/${production._id}` }}>
            <ProductionCard key={production._id} data={production} />
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
