export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}
export interface UserLink {
    id: number;
    title: string | undefined;
    original_link: string;
    short_code: string;
    qr_link: string;
    clicks: number;
    updated_at: string;
    created_at: string;
    // Add any other link properties you need
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedLinks<T> {
    data: T[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    per_page: number;
    total: number;
}

export interface FlashMessage {
    message?: string;
    link?: UserLink; // You might want to define more specific properties
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    links: PaginatedLinks<UserLink>;
    link: UserLink;
    flash: FlashMessage;
};
