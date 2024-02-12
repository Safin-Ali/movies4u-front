import { useEffect } from 'react';

interface ArgOfuseReactEffect {
	callback:Function,
	dependencies?:any,
	returnCallback?: Function
}

export const useReactEffect = ({
	callback=() => {},
	dependencies=[],
	returnCallback = () => {}
}:ArgOfuseReactEffect) => {
	useEffect(() => {
		callback()

		return returnCallback()
	},[dependencies])
}