import * as contentful from 'contentful';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms

  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export const getSubjectLists = async () => {
    try {  
        const data = await client.getEntries("YxizVhKcPFjaAq5c");
        return data;
    } catch (error) {
        console.log(error);
        return [];
    } 
}

export const getSubjectListsByTags = async (tag) => {
    try {  
        const data = await client.getEntries({
            'metadata.tags': tag
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    } 
}

export const getSubject = async (id) => {
    try {  
        const data = await client.getEntry(id);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    } 
}
