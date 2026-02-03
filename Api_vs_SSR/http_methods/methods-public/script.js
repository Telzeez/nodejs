
const userValue = document.getElementById('name-input');
const formAlert = document.getElementById('form-alert')
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();
    const nameValue = userValue.value
        try{
            // data to send to express
          const {data} = await axios.post('/api/people', {name: nameValue})
          const h5 = document.createElement('h5');
          h5.textContent = data.person
          resultContainer.appendChild(h5)

            // refresh list after successful post
            fetchPeople();

            userValue.value = " ";


        }
        catch(error){
            formAlert.textContent = error.response.data.msg
        } })
const resultContainer = document.getElementById('result');

const fetchPeople = async () => {
    try{
        const {data} = await axios.get('/api/people') //fetch data from my server
        const people= data.data.map(person=> (
            `<h5>${person.name}</h5>`
        ));
        resultContainer.innerHTML = people.join("")
    }catch(error){
        resultContainer.innerHTML = `<p class="danger">Cant fetch data</p>`
    }
}
fetchPeople()
