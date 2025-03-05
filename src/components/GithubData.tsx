import { useDispatch, useSelector } from "react-redux"
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, LogOut, Loader } from "lucide-react"
import { auth, githubProvider } from "@/lib/firebase"
import { AppDispatch, RootState } from "@/utils/store"
import { useEffect } from "react"
import {
  clearGithubData,
  fetchUserData,
  fetchUserRepos,
  setAccessToken,
} from "../utils/slices/githubSlice"

const useAppDispatch = () => useDispatch<AppDispatch>()

const GitHubData = () => {
  const dispatch = useAppDispatch() // Use the typed dispatch
  const { user, loading, error } = useSelector(
    (state: RootState) => state.github
  )

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleLogin = async () => {
    try {
      githubProvider.addScope("repo")
      githubProvider.addScope("read:user")

      const result = await signInWithPopup(auth, githubProvider)
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      if (token) {
        dispatch(setAccessToken(token))
        await dispatch(fetchUserData(token)) // Now TypeScript is happy
        await dispatch(fetchUserRepos(token)) // Now TypeScript is happy
      }
    } catch (error) {
      console.error("Auth Error:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch(clearGithubData())
    } catch (error) {
      console.error("Logout Error:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Connection</CardTitle>
      </CardHeader>
      <CardContent>
        {loading.user ? (
          <div className="flex justify-center p-4">
            <Loader className="animate-spin h-6 w-6" />
          </div>
        ) : user ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.login}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Disconnect GitHub
            </Button>
          </div>
        ) : (
          <Button onClick={handleLogin}>
            <Github className="w-4 h-4 mr-2" />
            Connect with GitHub
          </Button>
        )}

        {error.user && (
          <p className="text-red-500 mt-2 text-sm">{error.user}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default GitHubData
