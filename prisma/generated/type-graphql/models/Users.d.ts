export declare class Users {
    id: bigint;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    password: string;
    interface_locale?: string | null;
    value?: string | null;
    permissions?: string | null;
    created_at?: Date | null;
    emails?: string | null;
    mediamanager?: string | null;
    messages?: string | null;
    projects?: string | null;
    workspaces?: string | null;
}
