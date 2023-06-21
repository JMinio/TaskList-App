
export const HideControl = ({ isChecked, setShowCompleted, handleDeleteTask }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure?')) {
            handleDeleteTask()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox"
                    className="form-check-input"
                    checked={isChecked}
                    onChange={(e) => setShowCompleted(e.target.checked)} />
                <label>Mostrar tareas hechas.</label>
            </div>

            <button
                className="btn btn-danger btn-sm"
                onClick={handleDelete}>
                Clear
            </button>
        </div>
    )
}