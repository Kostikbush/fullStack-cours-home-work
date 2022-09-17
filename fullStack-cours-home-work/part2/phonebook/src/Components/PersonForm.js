export const PersonForm = ({
    handleAddPerson,
    newName,
    newNumber,
    handleNewNameInput,
    handleNewNumberInput
  }) => {
    return (
      <form onSubmit={handleAddPerson}>
      <div>name: <input value={newName} onChange={handleNewNameInput}/></div>
      <div>number: <input type='number' value={newNumber} onChange={handleNewNumberInput}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
  }