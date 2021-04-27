import { css } from "styled-components";

// import GothamBoldOtf from '@fonts/Circular_Font_Family/Gotham-Bold.otf';
// import GothamBold_ttf from "@fonts/Circular_Font_Family/GothamBold.ttf";
// import GothamBook_ttf from "@fonts/Circular_Font_Family/GothamBook.ttf";
// import GothamMedium_ttf from "@fonts/Circular_Font_Family/GothamMedium.ttf";

// import GothamBoldItalic_ttf from "@fonts/Circular_Font_Family/GothamBoldItalic.ttf";
// import GothamBookItalic_ttf from "@fonts/Circular_Font_Family/GothamBookItalic.ttf";
// import GothamMediumItalic_ttf from "@fonts/Circular_Font_Family/GothamMediumItalic.ttf";

import ProductSansBold_ttf from "../fonts/Circular_Font_Family/ProductSans-Bold.ttf";
import ProductSansMedium_ttf from "../fonts/Circular_Font_Family/ProductSans-Medium.ttf";
import ProductSansRegular_ttf from "../fonts/Circular_Font_Family/ProductSans-Regular.ttf";
import ProductSansLight_ttf from "../fonts/Circular_Font_Family/ProductSans-Light.ttf";

import ProductSansBoldItalic_ttf from "../fonts/Circular_Font_Family/ProductSans-BoldItalic.ttf";
import ProductSansMediumItalic_ttf from "../fonts/Circular_Font_Family/ProductSans-MediumItalic.ttf";
// import ProductSansRegularItalic_ttf from "../fonts/Circular_Font_Family/ProductSans-RegularItalic.ttf";
import ProductSansLightItalic_ttf from "../fonts/Circular_Font_Family/ProductSans-LightItalic.ttf";

const ProductSansNormalWeights = {
	300: ProductSansLight_ttf,
	400: ProductSansRegular_ttf,
	500: ProductSansMedium_ttf,
	700: ProductSansBold_ttf,
};

const ProductSansItalicWeights = {
	300: ProductSansLightItalic_ttf,
	// 400: ProductSansRegularItalic_ttf,
	500: ProductSansMediumItalic_ttf,
	700: ProductSansBoldItalic_ttf,
};

const productSans = {
	name: "ProductSans",
	normal: ProductSansNormalWeights,
	italic: ProductSansItalicWeights,
};

const createFontFaces = (family, style = "normal") => {
	let styles = "";

	for (const [weight, ttf] of Object.entries(family[style])) {
		styles += `
    @font-face {
      font-family: '${family.name}';
      src: url(${ttf}) format('truetype');
      font-weight: ${weight};
      font-style: ${style};
      font-display: auto;
    }`;
	}
	return styles;
};

const ProductSansNormal = createFontFaces(productSans);
const ProductSansItalic = createFontFaces(productSans, "italic");

const Fonts = css`
	${ProductSansNormal + ProductSansItalic}
`;

export default Fonts;
