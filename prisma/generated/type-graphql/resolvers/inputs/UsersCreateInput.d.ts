export declare class UsersCreateInput {
    id?: bigint | undefined;
    username: string;
    first_name: string;
    last_name?: string | undefined;
    email: string;
    password: string;
    phone?: string | undefined;
    permissions?: string | undefined;
    created_at?: Date | undefined;
    mediamanager?: string | undefined;
}
