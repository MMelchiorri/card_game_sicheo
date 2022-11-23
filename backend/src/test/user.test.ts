import UserModel from "../Model/UserModel";
import fetch from "node-fetch";
jest.mock("node-fetch");
import httpMocks from 'node-mocks-http'

import HttpRequestMock from "http-request-mock";

import {
  sign_up,
  sign_in,
  start_game,
  update_score,
  get_score,
  update_nickname,
} from "../Controller/UserController";

let userModel: UserModel;



describe("test for user model", () => {
  test("test for getting score board", async () => {

	const request_score = httpMocks.createRequest({
		method:'GET',
		url:'http://up2twin016.sicheo.cloud:5000/user/score'
	});
	
	const response_score = httpMocks.createResponse();

	const next_mock = jest.fn()

	await get_score(request_score,response_score,next_mock)

	//const data = response_score._getJSONData()
	console.log(response_score._getData())
	//console.log(data)

	//expect(get_score).toHaveBeenCalledTimes(1)


  });
});