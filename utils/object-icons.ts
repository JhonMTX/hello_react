import {  useState } from "react";


type TypeIconFeature =
 { id: number; name: string; i: string; }

const iconFeature:TypeIconFeature[] = [
    {id:1, name:"Rolls Royce Transfer",i:"rollsRoyceTransfer"},
{id:2,name: 'Private Car Transfer',i:'privateCarTransfer'},
{id:3, name: 'Room Service',i:'roomService'},
{id:4, name: 'Concierge Service',i:'conciergeService'},
{id:5, name: 'Butler Service',i:'butlerService'},
{id:6, name: 'Handicap Friendly',i:'handicapFriendly'},
{id:9, name: 'In-Room Bar w/ select Liquors',i:'premiumSpirits'},
{id:10, name: 'In-Room Local Beer & Wine',i:'beerWine'},
{id:11, name: 'Roundtrip Airport Transfers',i:'airpotTransfer'},
{id:12, name: 'Free Wifi',i:'freeWifi'},
{id:13, name: 'Soaking Tubs',i:'soakingTub'},
{id:14, name: 'In-Room Washer & Dryer',i:'washerDryer'},
{id:15, name: 'BMW Transfer Service',i:'loveNest'},
{id:16, name: 'VIP Arrival Service',i:''},
{id:17, name: 'Mini Cooper Transfer',i:'miniCooper'}
];


export default function SearchIconFeature(id: number): string {
    var stringIcon = "clock";
    iconFeature.forEach((items:TypeIconFeature )=>{
        if(id == items.id){
            stringIcon= items.i;
        }
    });
    return stringIcon;
}


