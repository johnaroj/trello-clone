"use client"
import getUrl from '@/lib/getUrl';
import { useBoardStore } from '@/store/BoardStore';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps

}: Props) {
    const { deleteTask } = useBoardStore();

    const [imageUrl, setImageUrl] = React.useState<string | null>(null);

    useEffect(() => {
        if (todo.image) {
            const fetchImage = async () => {
                const url = await getUrl(todo.image!);
                if (url) setImageUrl(url.toString())
            }
            fetchImage();
        }
    }, [todo])

    return (
        <div
            className='bg-white rounded-md space-y-2 p-2 drop-shadow-md'
            {...draggableProps} {...dragHandleProps} ref={innerRef}
        >
            <div className="flex justify-between items-center p-5">
                <p>{todo.title}</p>
                <button onClick={() => deleteTask(index, todo, id)} className='text-red-500 hover:text-red-600'>
                    <XCircleIcon className='h-8 w-8 ml-5' />
                </button>
            </div>
            {imageUrl && (
                <div className="h-full w-full rounded-b-md">
                    <Image
                        src={imageUrl}
                        alt="Task Image"
                        width={400}
                        height={200}
                        className='rounded-b-md w-full object-contain'
                    />
                </div>
            )}
        </div>
    )
}

export default TodoCard