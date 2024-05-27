import { deleteExperimentSchema, type getExperimentsData } from "@/lib/schemas/experimentGet";
import { useState } from "react"
import { FaCheck, FaTrash } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";
import { type KeyedMutator } from "swr";
import { deleteExperimentFetch } from "@/core/apiHandlers/fetchers";
const DeleteButton = ({ name, refreshPage, selectedExperiment, setSelectedExperiment }: {
    name: string
    refreshPage: KeyedMutator<getExperimentsData>,
    selectedExperiment: string
    setSelectedExperiment: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
    const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false)
    return <div
        className='mr-4'
    >
        {deleteConfirm ?
            <div className="flex flex-row -mr-4">
                <FaXmark className="fill-red-500 mr-2 cursor-pointer transform hover:scale-125 duration-300 ease-in-out" size={26} onClick={() => { setDeleteConfirm(false) }} />
                <FaCheck className="fill-green-500 cursor-pointer transform hover:scale-125 duration-300 ease-in-out" size={24} onClick={() => {
                    deleteExperimentFetch(name, deleteExperimentSchema).then(async () => { await refreshPage() }).catch((err) => { console.error(err) })
                    setDeleteConfirm(false)
                    if (selectedExperiment === name) {
                        setSelectedExperiment("")
                    }
                }} />
            </div>
            :
            <FaTrash className="fill-red-500 cursor-pointer transform hover:scale-125 duration-300 ease-in-out" size={27} onClick={() => { setDeleteConfirm(true) }} />}
    </div>

}

export default DeleteButton
