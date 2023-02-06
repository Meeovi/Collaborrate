export declare class Users {
    id: bigint;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    password: string;
    phone?: string | null;
    permissions?: string | null;
    created_at?: Date | null;
    mediamanager?: string | null;
}
