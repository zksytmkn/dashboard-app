import { Card, Col, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from "@tremor/react";
import CardFundaService from "@/components/card-funda-service";
import CardKPI from "@/components/card-kpi";
import CardSales from "@/components/card-sales";
import CardUserAction from "@/components/card-user-action";
import CardUser from "@/components/card-user";

export default function Home() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 mt-6">
              <Col numColSpan={1} numColSpanLg={2}>
                <Card>
                  <CardSales />
                </Card>
              </Col>
              <Card>
                <CardFundaService />
              </Card>
              <Card>
                <CardUserAction />
              </Card>
              <Card>
                <CardUser />
              </Card>
              <Card>
                <CardKPI />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <CardSales />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
