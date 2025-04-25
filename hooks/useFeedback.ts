import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import {
  Feedback,
  FeedbackCategory,
  FeedbackPayload,
  FeedbackSubCategory,
} from "@/types/feedback";
import axios from "axios";

export const useFeedbackList = () =>
  useQuery<Feedback[]>({
    queryKey: ["feedback"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("feedback");
      return data;
    },
  });

export const useFeedbackCategory = () =>
  useQuery<FeedbackCategory[]>({
    queryKey: ["feedback-category"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("feedback-category");
      return data;
    },
  });

export const useFeedbackSubCategory = (id_category: number) =>
  useQuery<FeedbackSubCategory[]>({
    queryKey: ["feedback-sub-category", id_category],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`feedback-sub-category`, {
        params: { id_category },
      });
      return data;
    },
    enabled: !!id_category,
  });

export const useCreateFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: FeedbackPayload) => {
      const formData = new FormData();
      formData.append("unit", data.unit);
      formData.append("id_category", data.id_category.toString());
      formData.append("id_sub_category", data.id_sub_category.toString());
      formData.append("keluhan", data.keluhan);

      const response = await axios.post("/api/proxy/feedback", formData);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
  });
};
