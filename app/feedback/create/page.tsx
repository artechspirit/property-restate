"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useFeedbackCategory,
  useFeedbackSubCategory,
  useCreateFeedback,
} from "@/hooks/useFeedback";
import { toast } from "sonner";
import { feedbackSchema } from "@/validation/feedbackSchema";

export default function ComplaintForm() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      unit: "",
      id_category: "",
      id_sub_category: "",
      keluhan: "",
    },
  });

  const watchedCategory = watch("id_category");

  useEffect(() => {
    if (!watchedCategory) {
      setSelectedCategoryId(null);
    }
  }, [watchedCategory]);

  const { data: categories, isLoading: loadingCategories } =
    useFeedbackCategory();
  const { data: subcategories, isLoading: loadingSubcategories } =
    useFeedbackSubCategory(selectedCategoryId ?? 0);
  const createFeedback = useCreateFeedback();

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      id_category: parseInt(data.id_category),
      id_sub_category: parseInt(data.id_sub_category),
    };

    createFeedback.mutate(payload, {
      onSuccess: () => {
        toast.success("Keluhan berhasil dikirim!", {
          position: "top-center",
          className: "bg-green-500 text-white",
        });
        reset();
        setSelectedCategoryId(null);
      },
      onError: () => {
        toast.error("Gagal mengirim keluhan. Coba lagi.", {
          position: "top-center",
          className: "bg-red-500 text-white",
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-5 mx-auto"
    >
      {/* Unit */}
      <div>
        <Label className="mb-2">Unit</Label>
        <Input
          {...register("unit")}
          placeholder="Contoh: F9 - Kavling"
          className="h-[40px]"
        />
        <p className="text-red-500 text-sm">{errors.unit?.message}</p>
      </div>

      {/* Kategori */}
      <div>
        <Label className="mb-2">Kategori</Label>
        <Controller
          name="id_category"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedCategoryId(Number(value));
                setValue("id_sub_category", "");
              }}
              value={field.value}
            >
              <SelectTrigger className="w-full h-[40px]">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {!loadingCategories &&
                  categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id.toString()}>
                      {cat.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
        <p className="text-red-500 text-sm">{errors.id_category?.message}</p>
      </div>

      {/* Sub Kategori */}
      <div>
        <Label className="mb-2">Sub Kategori</Label>
        <Controller
          name="id_sub_category"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={field.value}
              disabled={!selectedCategoryId || !subcategories?.length}
            >
              <SelectTrigger className="w-full h-[40px]">
                <SelectValue placeholder="Pilih Sub Kategori" />
              </SelectTrigger>
              <SelectContent>
                {!loadingSubcategories &&
                  subcategories?.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id.toString()}>
                      {sub.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
        <p className="text-red-500 text-sm">
          {errors.id_sub_category?.message}
        </p>
      </div>

      {/* Keluhan */}
      <div>
        <Label className="mb-2">Feedback</Label>
        <Textarea
          {...register("keluhan")}
          rows={4}
          placeholder="Tuliskan keluhan Anda..."
        />
        <p className="text-red-500 text-sm">{errors.keluhan?.message}</p>
      </div>

      {/* Upload (tidak aktif) */}
      <div>
        <Label className="mb-2">Upload Gambar</Label>
        <Input type="file" multiple accept="image/*" />
        <p className="text-sm text-gray-500 mt-1">
          Fitur upload belum diaktifkan (opsional).
        </p>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={createFeedback?.isPending}
        className="rounded-sm bg-panglima-green"
      >
        {createFeedback.isPending ? "Mengirim..." : "Simpan"}
      </Button>
    </form>
  );
}
