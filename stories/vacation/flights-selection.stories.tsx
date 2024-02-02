import type { Meta, StoryObj } from "@storybook/react";
import FlightsSelection from "@/components/vacation/flights-selection";

const meta = {
  title: "Vacation/Roundtrip Flights",
  component: FlightsSelection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlightsSelection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gateways: [
      {
        gateway: "ABE",
        city: "ALLENTOWN",
        state: "PA",
        country: "USA",
        airportName: "Lehigh Valley Intl Arpt",
        stateName: "PENNSYLVANIA",
      },
      {
        gateway: "ABI",
        city: "ABILENE",
        state: "TX",
        country: "USA",
        airportName: "Abilene Municipal Arpt",
        stateName: "TEXAS",
      },
      {
        gateway: "ABQ",
        city: "ALBUQUERQUE",
        state: "NM",
        country: "USA",
        airportName: "Albuquerque Intl Sunport",
        stateName: "NEW MEXICO",
      },
      {
        gateway: "ABR",
        city: "ABERDEEN",
        state: "SD",
        country: "USA",
        airportName: "ABERDEEN REGIONAL AIRPORT",
        stateName: "SOUTH DAKOTA",
      },
      {
        gateway: "ACA",
        city: "ACAPULCO",
        state: "GUERRERO",
        country: "MEXICO",
        airportName: "Alvarez Intl Arpt",
        stateName: "GUERRERO",
      },
      {
        gateway: "ACK",
        city: "NANTUCKET",
        state: "MA",
        country: "USA",
        airportName: "Nantucket Memorial",
        stateName: "MASSACHUSETTS",
      },
      {
        gateway: "ACT",
        city: "WACO",
        state: "TX",
        country: "USA",
        airportName: "Waco Regional Arpt",
        stateName: "TEXAS",
      },
      {
        gateway: "ACY",
        city: "ATLANTIC CITY",
        state: "NJ",
        country: "USA",
        airportName: "Atlantic City Intl Arpt",
        stateName: "NEW JERSEY",
      },
      {
        gateway: "ADL",
        city: "ADELAIDE",
        state: "SOUTH AUSTRALIA",
        country: "AUSTRALIA",
        airportName: "Adelaide Arpt",
        stateName: "SOUTH AUSTRALIA",
      },
      {
        gateway: "AEX",
        city: "ALEXANDRIA",
        state: "LA",
        country: "USA",
        airportName: "Alexandria Intl Arpt",
        stateName: "LOUISIANA",
      },
    ],
    brand: "beaches",
    selected: {
      arrivalGateway: "ABE",
      departureGateway: "ABE",
      flightType: "economy",
    },
    resortGateways: [
      {
        resortCode: "BPP",
        city: "Beaches Turks & Caicos",
        country: "TCI",
        gateway: "MIA",
      },
      {
        resortCode: "BPP",
        city: "Beaches Turks & Caicos",
        country: "TCI",
        gateway: "FLL",
      },
    ],
  },
  render: (args) => <FlightsSelection {...args} />,
};
