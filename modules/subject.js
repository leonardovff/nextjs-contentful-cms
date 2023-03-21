import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
