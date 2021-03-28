const USER_ID_REGEX = /^[^:]*:(.*)$/;
export function getDomainFromUserId(userId: string): string | undefined {
    const match = userId.match(USER_ID_REGEX);
    if (match) {
        return match[1];
    }
}
