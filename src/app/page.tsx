import { AskAIButton } from "@/components/ask-ai-button";
import { NewNoteButton } from "@/components/new-note-button";
import { NoteTextInput } from "@/components/note-text-input";
import { getUser } from "@/db/supabase/server";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const noteIdParam = (await searchParams).noteId;
  const user = await getUser();

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

  const note = await prisma.note.findUnique({
    where: { id: noteId, authorId: user?.id },
  });

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>

      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />

      {/* <HomeToast /> */}
    </div>
  );
}
