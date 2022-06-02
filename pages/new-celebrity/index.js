import NewCelebrityForm from "../../components/celebrities/NewCelebrityForm"


const NewCelebrityPage = () => {
    const addCelebrityHandler = (enteredData) => {
        console.log(enteredData);
    }

    return <NewCelebrityForm onAddCelebrity={addCelebrityHandler} />
}

export default NewCelebrityPage;