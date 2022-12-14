import { Question } from "../question/question.model";
import { Tutorial } from "../tutorial/tutorial.model";

export type Activity = {
    id: string;
    description: string;
    title: string;
    image_title: string;
    image_url: string;
    created_at: Date | null;
    updated_at: Date | null;
    progress: number;
    tutorial: Tutorial | null;
    tutorial_id: string | null;
    question: Question[];
}