import { useRef, useContext, useEffect, LegacyRef } from 'react'
import { useOnScreen } from './useOnScreen'
import { NavContext } from '../context/NavContext'

export const useNav = (navLinkId: string) => {
	const ref = useRef<HTMLElement>(null)

	const { setActiveNavLinkId } = useContext(NavContext)
	
	const isOnScreen = useOnScreen(ref)

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId)
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId])

	return ref
}