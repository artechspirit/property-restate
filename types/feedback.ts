export type FeedbackStatus = "pending" | "resolved" | "in-progress" | "waiting";

export type Feedback = {
  id: number;
  category: string;
  sub_category: string;
  unit: string;
  status: FeedbackStatus;
  keluhan: string;
  created_at: string;
};

export type FeedbackCategory = {
  id: number;
  name: string;
};

export type FeedbackSubCategory = {
  id: number;
  name: string;
  id_category: number;
};

export type FeedbackPayload = {
  id_category: number;
  id_sub_category: number;
  unit: string;
  keluhan: string;
};
