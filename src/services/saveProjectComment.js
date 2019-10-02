

export const saveProjectComment =({ projectId, comment }) => {

    let comments;

    try {
        comments = JSON.parse(localStorage.getItem('comments'));
    } catch (error) {
        console.log('Error in ' + saveProjectComment.name + ' : ' + error);
    }

    if (comments) {
        comments[projectId] = comment;
    }
    else {
        comments = { [projectId]: comment };
    }

    let result;

    try {
        result = JSON.stringify(comments);
    } catch (error) {
        console.log('Error in ' + saveProjectComment.name + ' : ' + error);
        result = '';
    }

    localStorage.setItem('comments', result);
};
