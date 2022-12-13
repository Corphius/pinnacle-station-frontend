import type { Tutorial } from "../tutorial/tutorial.model";

export type Squad = {
    id: string;
    name: string;
    product_manager: string;
    tech_manager: string;
    initial_time: Date | null;
    description: string;
    members: string[];
    created_at: Date | null;
    updated_at: Date | null;
    tutorial: Tutorial[];
}