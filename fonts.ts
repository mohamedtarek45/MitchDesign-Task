import { Space_Grotesk,Inter,Poppins  } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 

});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // اختياري حسب احتياجك
  subsets: ["latin"], // مهم للغات
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
