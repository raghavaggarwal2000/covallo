import { Box, LightingIcon } from "./icon";
import { Product } from "./type";

export const category:any = [
    {
        categoryName: "Distribution Boxes",
        icon: Box,
        video: "/video/trailLight.webm",
        homePageData:{
            heading: "Distribution",
            subHeading: "Bringing Brightness To Your Life",
            description: "Add a Touch of Style to your spaces."
        },
    },
    {
        categoryName: "Bas Bar",
        icon: LightingIcon,
        video: "/video/trailLight.webm",
        homePageData:{
            heading: "Bas Bar",
            subHeading: "Bringing Brightness To Your Life",
            description: "Add a Touch of Style to your spaces."
        },
    },
    {
        categoryName: "TPN Boxes",
        icon: LightingIcon,
        video: "/video/trailLight.webm",
        homePageData:{
            heading: "TPN Boxes",
            subHeading: "Bringing Brightness To Your Life",
            description: "Add a Touch of Style to your spaces."
        },
    },
    {
        categoryName: "Led lighting",
        icon: LightingIcon,
        video: "/video/trailLight.webm",
        homePageData:{
            heading: "trail light",
            subHeading: "Bringing Brightness To Your Life",
            description: "Add a Touch of Style to your spaces."
        },
    },
];


export const productsList: any= {
    "Distribution Boxes":{
        "Double door":{
            subCategoryVideo: "/video/lighting/cob.webm",
            headerImage: "/cobImage.webp",
            description: "Illuminate your home with the best COB spot lights from Fybros. Designed for superior brightness and energy efficiency, our COB spot lights are perfect for accentuating any space. Buy COB spot light online and discover a range of high-performance LED spot lights ideal for home use. Whether you're highlighting architectural features, artwork, or creating ambient lighting, our COB spot light offer the perfect solution. Manufactured by top COB spot light manufacturers in India, these lights guarantee durability and reliable performance. Available at competitive prices, our COB spotlights provide excellent value without compromising on quality. Explore our collection to find the best COB spot light for your home and transform your lighting experience. Shop now at Fybros for the best prices and elevate your home's illumination with our premium LED spot lights.",
            // products:[{
            //     id:"0",
            // }]
        },
        "Single door":{
              subCategoryVideo: "/video/fan.mp4",
        },
        "TPN":{
              subCategoryVideo: "/video/lighting/cob.webm",
        },
        "MCB Box":{
              subCategoryVideo: "/video/lighting/cob.webm",
        },
    },
    "Bas Bar": {
        
    },
    "TPN Boxes":{
        
    },
    "Led lighting":{
        
    },
};

export const allProducts: Product[] = [
    {   
        id: 0,
        name: "NEO Cob Spot Light",
        price: "250",
        smallDesc:"3W",
        smallImage:"/cobSmallImage.webp",
        category:"Distribution Boxes",
        subCategory:"Double door",
        allImages: ["/products/one.webp", "/products/two.webp", "/products/three.webp"],
    },
    {
        id: 1,
        name: "NEO Cob Spot Dard",
        price: "2550",
        smallDesc:"10W",
        smallImage:"/cobSmallImage.webp",
        category:"Distribution Boxes",
        subCategory:"Single door",
        allImages: ["/products/one.webp", "/products/two.webp", "/products/three.webp"],
    },
    {
        id: 2,
        name: "NEO Cob Spot Lighttttttt",
        price: "125220",
        smallDesc:"3WwW",
        smallImage:"/cobSmallImage.webp",
        category:"Distribution Boxes",
        subCategory:"Double door",
        allImages: ["/products/one.webp", "/products/two.webp", "/products/three.webp"],
    },
];