const TaskModal = (props) => {
    const { showModal, handleModal } = props;
    return (
        <div className={`fixed inset-0 z-50 flex transition-opacity duration-300 ease-in-out ${showModal ? "opacity-100 visible" : "opacity-0 invisible"} items-center justify-center bg-black/50`}>

            {/* Modal */}
            <div
                className={`w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl
                transform transition-all duration-300 ease-out
                ${showModal
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-95 translate-y-4 opacity-0"
                    }`}
            >

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <div className=" p-2  rounded-full bg-[#d9dceb91] flex items-center justify-center">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <h3 className="text-xl font-semibold">Create New Task</h3>
                    </div>
                    <i className="fa-solid fa-xmark cursor-pointer" onClick={handleModal}></i>
                </div>

                <form className="form-container">

                    <div>
                        <label className="form-label">Task Title *</label>
                        <input
                            type="text"
                            placeholder="Enter task title..."
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label className="form-label">Description</label>
                        <textarea
                            placeholder="Add more details"
                            className="form-input"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="min-w-0">
                            <label className="form-label">Priority</label>
                            <select className="form-input w-full">
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className="min-w-0">
                            <label className="form-label">Date</label>
                            <input
                                type="date"
                                className="form-input w-full"
                            />
                        </div>
                    </div>
                    <div className="important flex flex-row gap-1">
                        <input type="checkbox" id="important" />
                        <label htmlFor="important">Mark as important</label>
                    </div>
                    <div className="btn flex justify-end gap-2 ">
                        <button className="bg-[#d9dceb] text-black px-3 py-2 cursor-pointer rounded-md hover:bg-[#b7bacacb]" onClick={handleModal}>Cancel</button>
                        <button className="bg-[#6249E5] text-white px-3 py-2 cursor-pointer rounded-md hover:bg-[#4927f1]">Create Task</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default TaskModal;