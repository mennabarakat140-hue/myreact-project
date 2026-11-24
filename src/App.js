import {Footer, Sidebar} from "./Components";
// import ToDo from "./Todolist";
// import Contact from "./Contact";
// import UsersData from './Users.json';
// {
//             UsersData.map(user=>{
//                 return <Post key={user.id} title={user.name} description={user.email}/>
//             })
//         }



function App (){
    return (
        <>
            {/* <Contact/> */}
            {/* <ToDo/> */}
            <Sidebar/>
            <Footer/>
        </>
        
    );
};
export default App;