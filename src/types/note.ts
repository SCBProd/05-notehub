export type NoteTag = "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: NoteTag;
}

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}
export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}
export interface CreateNoteDto {
  title: string;
  content: string;
  tag: Tag;
}
export interface ApiError {
  message: string;
  error?: string;
}