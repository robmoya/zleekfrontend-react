import request from 'superagent';

const ZLEEK_API_URL = 'https://y3f0fa30xc.execute-api.us-west-2.amazonaws.com/Production/ZleekMealPlanner';


let Api = {

    getMealPlan: function (mealParams){
        let requestUrl = `${ZLEEK_API_URL}`;

        return request.post(requestUrl)
        .type('application/json')
        .accept('json')
        .send(mealParams)
        .then((data) => {
            return data.body;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default Api
