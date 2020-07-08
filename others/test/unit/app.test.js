const request = require('supertest');
var should = require('should');
const expect = require('chai').expect;
var app = require('../../server');

describe('POST api/v1/login', () => {
    describe('Test the login page', () => {
        describe('Test to cheeck if email and password exists', () => {
            beforeEach(() => {
                app = require('../../server');
            });

            afterEach(async() => {
                await app.close();
            });
            //sample correct JSON data which is in database
            describe('Signing in with a verified email and password', () => {
                it('should respond 200', (done) => {
                    request
                        .agent(app)
                        .post('/login')
                        .send({ username: 'boyroberto@gmail.com', password: 'emirateboy' })
                        .expect(200)
                        .expect('message', 'Success');
                    done();
                });
            });
            describe('Signing in with an unverified email and password', () => {
                //sample incorrect JSON data which is not in database
                it('should respond with 404', (done) => {
                    request
                        .agent(app)
                        .post('/login')
                        .send({ username: 'incorrect@gmail.com', password: 'Patch' })
                        .expect(404)
                        .expect('msg', 'user not found');
                    done();
                });
            });
        });
    });
});