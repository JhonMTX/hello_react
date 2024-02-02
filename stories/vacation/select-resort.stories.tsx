import SelectResort from "@/components/vacation/select-resort";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: 'Vacation/SelectResort',
  component: SelectResort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
   args: {
     resorts: 
     [
      {
        "resort": "BNG",
        "rstCode": "BNG",
        "resortType": "B",
        "country": "JAMAICA",
        "resortShortName": "Beaches Negril",
      },
      {
        "resort": "BBO",
        "rstCode": "BBO",
        "resortType": "B",
        "country": "JAMAICA",
        "resortShortName": "Beaches Ocho Rios",
      },
      {
        "resort": "BTC",
        "rstCode": "BTC",
        "resortType": "B",
        "country": "TURKS & CAICOS",
        "resortShortName": "Beaches Turks & Caicos",
      },
      {
        "resort": "NGA",
        "rstCode": "NGA",
        "resortType": "P",
        "country": "JAMAICA",
        "resortShortName": "Grand Pineapple Beach Negril",
      },
      {
        "resort": "FCR",
        "rstCode": "FCR",
        "resortType": "R",
        "country": "BAHAMAS",
        "resortShortName": "Fowl Cay Resort",
      }
     ],
     brand: "sandals",
     name: "",
     value: "",
     placeholder: "Select Sandals Resort ...",
     error: "",
   },
   render: function Render(args) {
     const [{value}, updateArgs] = useArgs<{value: string}>();

     function onChange(value:string) {
       updateArgs({value: value});
     }

     return (
       <SelectResort {...args} resorts={args.resorts} name={""} value={value} onChange={onChange}/>
     );
   },
} ;