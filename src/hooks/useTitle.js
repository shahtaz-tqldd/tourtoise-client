import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Tourtoise - ${title}`
    },[title])
}
export default useTitle