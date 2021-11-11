export interface IGithubResponseData {
    login: string,
    avatar_url: string,
    followers: number,
    following: number,
    public_repos: number,
    bio: string | null,
    name: string | null,
    location: string | null
    blog: string | null
}

export interface ISearchHistoryTable {
    userName: string,
    isSearchSuccessful: boolean
}