import { useParams } from "react-router-dom";
import { Message } from "./message";
import { getRoomMessages } from "../http/get-room-messages";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Messages() {
    const { roomId } = useParams()

    if (!roomId) {
        throw new Error('Messages component must be used within room page')
    }

    // const { messages } = use(getRoomMessages({ roomId }))

    const { data } = useSuspenseQuery({
        queryKey: ['messages', roomId],
        queryFn: () => getRoomMessages({ roomId }),
    })

    console.log(data)

    return (
        <ol className="list-decimal list-outside px-3 space-y-8">
            <Message text='Qual é a maneira mais criativa que você já resolveu um problema de programação?' amountOfReactions={100} answered />
            <Message text='Qual é a sua linguagem de programação favorita e por quê?' amountOfReactions={50} />
            <Message text='Qual é o maior desafio que você já enfrentou ao desenvolver um projeto?' amountOfReactions={75} />
            <Message text='Qual é a sua abordagem para lidar com bugs em seu código?' amountOfReactions={80} />
            <Message text='Qual é a sua opinião sobre o uso de frameworks no desenvolvimento de software?' amountOfReactions={90} />
        </ol>
    )
}