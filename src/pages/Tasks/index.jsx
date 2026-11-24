import { useState } from "react";
import TaskModal from "./components/taskModal";

const Tasks = () => {
    const  [showModal,setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <section className="tasks mt-4">
            <button onClick={handleModal} className="bg-[#654BE9] p-3 px-4  rounded-xl text-white block  ml-auto cursor-pointer hover:bg-[#6453b9] font-bold">+ New Tasks</button>
            <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                    <button className="filter-btn">All(24)</button>
                    <button className="filter-btn">Pending(7)</button>
                    <button className="filter-btn">In Progress(7)</button>
                    <button className="filter-btn">Completed(12)</button>
                </div>

                <button className="p-3 px-4  rounded-xl shadow-sm cursor-pointer">
                    Sort By: Latest
                </button>


            </div>

            <div className="cards mt-3 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                <div className="card bg-[#f3f3f3] border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-xl p-3">
                    <div className="flex justify-center items-start">
                        <div className="flex gap-4 items-center">
                            <input className=" scale-170" type="checkbox" />
                            <div className="">
                                <h3 className="font-bold">Complete Project</h3>
                                <p>finish auth and layout implementation</p>
                            </div>
                        </div>
                        <span className="bg-red-100 text-red-700 py-1 px-2 rounded-sm">High</span>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <i className="fa-regular fa-calendar-days" />
                            <span>Due: {new Date().toLocaleDateString()}</span>
                        </div>

                        <div className="flex gap-4">
                            <i onClick={handleModal} className="fa-solid fa-pencil cursor-pointer" />
                            <i className="fa-solid fa-trash cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <TaskModal  showModal={showModal} handleModal={handleModal} />

        </section>

    )
}
export default Tasks;