export const getDomainFromEmail = (email) => {
    let domain = email.split('@').pop()
    return domain
}
