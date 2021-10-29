import {useContext} from 'react';
import {UserContext,TokenContext} from '../01_认识自定义hook_context共享';
function useUserContext() {
    const user = useContext(UserContext)
    const token = useContext(TokenContext)
    return [user, token]
}
export default useUserContext