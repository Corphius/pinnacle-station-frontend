export type Question = {
    id: string;
    title: string;
    description: string;
    image_url: string;
    answer_options: string[];
    created_at: Date | null;
    updated_at: Date | null;
    correct_answer_id: number;
    activity_id: string | null;
}