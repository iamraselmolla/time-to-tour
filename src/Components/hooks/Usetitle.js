import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Time To Tour`;
    },[title])
}
export default useTitle;