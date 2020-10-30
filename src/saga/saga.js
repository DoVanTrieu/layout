import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
export function* watcherSaga() {
    console.log('watcherSaga')
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}
function fetchData() {
    return axios({
        method: "GET",
        url: "http://localhost:8003/1/TeamJson.json"
    });
}

function* workerSaga() {
    console.log('workerSaga')
    try {
        const response = yield call(fetchData);
        const data = response.data;
        const newTeam = { "id": "d1885bc1-97d9-4ea3-aad5-191fc800d3e1", "name": "Kylie", "creator": "e310b134-405b-4ab8-bdaf-28fec5e8c7871", "memberIds": [{ "id": "8261d750-f1db-454f-b3ec-2597602f7bd8", "email": "2019nab@veritone.com", "firstName": "NAB", "lastName": "2019", "status": "active" }, { "id": "f14e2c99-6a88-499b-8547-7740c7322e25", "email": "mkennedy+mediademo@veritone.com", "firstName": "Michael", "lastName": "Kennedy", "status": "active" }, { "id": "f4163c1d-6758-40a8-9433-1d454345f6bf", "email": "rupert.watson@jigsaw24.com", "firstName": "Rupert", "lastName": "Watson", "status": "active" }, { "id": "180d6ac9-02a5-4053-9f8e-cff7b7fed00b", "email": "speterson+mediademo@veritone.com", "firstName": "Sven", "lastName": "Peterson", "status": "active" }, { "id": "83fda858-8fb2-4741-a1d7-d304dc1a20e7", "email": "tringering+mediademo@veritone.com", "firstName": "Tristan", "lastName": "Ringering", "status": "active" }, { "id": "dad2e8da-2598-4f39-8f0b-1ea061ff89c7", "email": "iasher+mediademo@veritone.com", "firstName": "Ilan", "lastName": "Asher", "status": "active" }], "managerIds": [{ "id": "e310b134-405b-4ab8-bdaf-28fec5e8c787", "email": "kchao+mediademo@veritone.com", "firstName": "Kylie", "lastName": "Chao", "status": "active" }, { "id": "96aaa0d3-95a0-4357-a579-1a190e1ca9af", "email": "ktruong+mediademo@veritone.com", "firstName": "Khuong", "lastName": "Truong", "status": "active" }, { "id": "b745eb04-0410-446d-a1af-440877d32a6c", "email": "tmcbride+mediademo@veritone.com", "firstName": "Tami", "lastName": "McBride", "status": "active" }, { "id": "298af11e-ced9-4bd5-acb0-0fc390264188", "email": "gbateman+mediademo@veritone.com", "firstName": "Garron", "lastName": "Bateman", "status": "active" }] };
        const cards = [
            ...data,
           newTeam
          ];
        // dispatch a success action to the store with card
        yield put({ type: "API_CALL_SUCCESS", payload: cards });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE",payload: error });
    }
}