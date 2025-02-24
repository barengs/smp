import React from "react";
import Card from "@/components/ui/Card";
import CardWelcome from "./common/CardWelcome";
import WidgetTop from "./common/WidgetTop";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
          <CardWelcome />
        </div>
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <WidgetTop />
          </div>
        </div>
      </div>
      <Card title="Starter Kit">Your Dashboard</Card>
    </div>
  );
};

export default Dashboard;
