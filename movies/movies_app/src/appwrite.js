// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(PROJECT_ID)
// const database = new Databases(client)


// export const updateSearchCount = async(searchTerm,movie)=>{
//     // console.log(PROJECT_ID,DATABASE_ID,COLLECTION_ID)
//     // 1 use appwrite sdk to check if doc exists // update count
//     try{
//         const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,queries:[
//             MediaQueryList.equal('searchTerm')
//         ])
//     }catch(error){
//         console.error(error)
//     }
//     // 2 if not set count as 1
// }
