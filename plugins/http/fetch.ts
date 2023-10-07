import { $fetch } from "ohmyfetch";
import { baseURL } from "@/constants";

export const apiFetch = $fetch.create({ baseURL });
