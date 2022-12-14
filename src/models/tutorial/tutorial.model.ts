import type { BadgeOnTutorial } from "../badge/badge.model";
import type { Activity } from "../activity/activity.model";

export type Tutorial = {
    id: string;
    title: string;
    urlVideo: string;
    progress: number;
    titleVideo: string;
    description: string;
    image_url: string;
    outside_url: string;
    image_title: string;
    created_at: Date | null;
    tutorial_type: number;
    updated_at: Date | null;
    squad_id: string | null;
    activity: Activity[];
    BadgeTutorial: BadgeOnTutorial[];
}