import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Note, NotesResponse, CreateNoteDto } from "../types/note";

// GET notes
export const fetchNotes = async (params: {
  search?: string;
  tag?: string;
  page?: number;
  perPage?: number;
  sortBy?: "created" | "updated";
}): Promise<NotesResponse> => {
  const response: AxiosResponse<NotesResponse> = await axios.get(
    "/notes",
    { params }
  );

  return response.data; 
};

// CREATE note
export const createNote = async (
  data: CreateNoteDto
): Promise<Note> => {
  const response: AxiosResponse<Note> = await axios.post(
    "/notes",
    data
  );

  return response.data;
};

// DELETE note
export const deleteNote = async (
  id: string
): Promise<Note> => {
  const response: AxiosResponse<Note> = await axios.delete(
    `/notes/${id}`
  );

  return response.data;
};

