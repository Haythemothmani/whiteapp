import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { KEYS } from "./queries";
import { createSampleApi } from "../api/api";

export const useCreateSample = (): UseMutationResult<void, string, any> => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (sample: any) => createSampleApi(sample),
        onSuccess: () => {
            client.invalidateQueries({queryKey: KEYS.sample()});
            console.log("success ***********");
        }
    })
    
}