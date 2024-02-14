import React from 'react';
import Image, {ImageProps} from 'next/image';
import path from 'path';
import fs from 'fs';

export default async function Dynamic_Blur_Image(props:ImageProps) {

	const {src,alt,width,height,style,className} = props;

	const base64 = fs.readFileSync(path.join(process.cwd(),'public','placeholder.webp'),'base64')

	return (
		<>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				placeholder={'blur'}
				blurDataURL={base64}
				style={style}
				className={className}
			/>
		</>
	);
}