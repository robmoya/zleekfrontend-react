import request from 'superagent';

const ZLEEK_API_URL = 'https://7u3b9exy11.execute-api.us-west-2.amazonaws.com/Production/ZleekMealPlanner';


let Api = {

    getMealPlan: function (mealParams){
        let requestUrl = `${ZLEEK_API_URL}`;

        return request.post(requestUrl)
        .type('application/json')
        .accept('json')
        .send(mealParams)
        .then((data) => {
            // console.log(data.body);
            return data.body[0].mealPlan;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default Api
