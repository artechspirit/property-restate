"use client";

import Button from "@/components/CustomButton";
import { useFeedbackList } from "@/hooks/useFeedback";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function FeedbackDetail() {
  const params = useParams();
  const { id } = params;
  const { data } = useFeedbackList();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (id && data) {
      const selectedItem = data.find((item) => item.id === Number(id));
      setItem(selectedItem);
      setLoading(false);
    }
  }, [id, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        <p>Loading...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Feedback not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          📋 Feedback Detail
        </h1>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-medium">ID:</span> {item.id}
          </p>
          <p>
            <span className="font-medium">Created At:</span>{" "}
            {new Date(item.created_at).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Status:</span> {item.status}
          </p>
          <p>
            <span className="font-medium">Category:</span> {item.category}
          </p>
          <p>
            <span className="font-medium">Subcategory:</span>{" "}
            {item.sub_category}
          </p>
          <p>
            <span className="font-medium">Complaint:</span> {item.keluhan}
          </p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            🌟 Rating & Review
          </h2>
          <p>
            <span className="font-medium">CSA:</span> ⭐⭐⭐⭐⭐
          </p>
          <p>
            <span className="font-medium">Konstruksi:</span> ⭐⭐⭐⭐⭐
          </p>
          <p className="mt-2 italic text-gray-600">
            “Keren banget pengerjaannya, membuat saya menangis melihat hasil
            pengerjaannya...”
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
