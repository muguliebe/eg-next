import { useEffect } from 'react'

/**
 * ref 로 지정한 엘리먼트 바깥쪽의 마우스 클릭 이벤트
 * @param ref
 * @param callback
 */
const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}

export default useOutsideClick
