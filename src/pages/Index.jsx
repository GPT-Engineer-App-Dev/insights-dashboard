import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzE0Mzk2NzkyfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaShoppingCart />
            <Text ml={2}>Sales</Text>
          </StatLabel>
          <StatNumber>1,587</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaDollarSign />
            <Text ml={2}>Revenue</Text>
          </StatLabel>
          <StatNumber>$46,760</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            15.89%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaUsers />
            <Text ml={2}>New Customers</Text>
          </StatLabel>
          <StatNumber>245</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            9.12%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Growth</Text>
          </StatLabel>
          <StatNumber>18.2%</StatNumber>
          <StatHelpText>Yearly Growth</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
