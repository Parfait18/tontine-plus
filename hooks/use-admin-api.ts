"use client";

import { useState } from "react";
import { useToast } from "./use-toast";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

interface ApiError {
  message: string;
  status: number;
}

export function useAdminApi() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (error: ApiError) => {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: error.message || "Une erreur est survenue",
    });
    return { data: null, error: error.message, isLoading: false };
  };

  const fetchData = async <T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw { message: "Erreur serveur", status: response.status };
      }

      const data = await response.json();
      return { data, error: null, isLoading: false };
    } catch (error) {
      return handleError(error as ApiError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    isLoading,
  };
}