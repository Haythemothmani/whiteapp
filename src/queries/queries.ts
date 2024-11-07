import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { DEFAULT_CACHETIME } from "../constants/constants"
import { getSamplesApi } from "../api/api"

export const KEYS = {
    sample: () => ["sample"]
}

export const useGetSamples = (enabled = true): UseQueryResult<any> => {
    return useQuery<any>({
        queryKey: KEYS.sample(),
        queryFn: () => getSamplesApi(),
        enabled,
        gcTime: DEFAULT_CACHETIME
    })
}