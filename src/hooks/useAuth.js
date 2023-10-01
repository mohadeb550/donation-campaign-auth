

import { useContext } from "react"
import { AuthContext } from "../Authentication/Auth"

export function useAuth() {
 return useContext(AuthContext);

}
