interface GetRoomMessagesRequest {
  roomId: string;
}

export async function getRoomMessages({ roomId }: GetRoomMessagesRequest) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`
  );

  const data: {
    messages: Array<{
      id: string;
      room_id: string;
      message: string;
      reaction_count: number;
      answered: boolean;
    }>;
  } = await response.json();

  console.log(data);

  return {
    messages: data.messages.map((item) => {
      return {
        id: item.id,
        text: item.message,
        amountOfReactions: item.reaction_count,
        answered: item.answered,
      };
    }),
  };
}
