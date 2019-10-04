

export const getProjectComments = (projects) => {
    let comments;
    console.log('projects: ',projects );

    try {
        comments = JSON.parse(localStorage.getItem('comments'));
    } catch (error) {
        console.log('Error in ' + getProjectComments.name + ' : ' + error);
        return projects;
    }

    for (let [key, value] of Object.entries(comments)) {
        if (key === projects) {
            return value;
        }
    }
};
