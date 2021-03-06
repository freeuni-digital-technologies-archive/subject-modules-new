import { expect } from 'chai'
import { WebTester } from "website-tester";
import * as path from "path";

describe('webTester', () => {
    const webTester = new WebTester({
        targetFiles: ['index'],
        testsLocation: path.resolve('./test/files/empty_project/tests.js')
    })
    it.skip('failing assignment', () => {
        const loc = path.resolve('./test/files/empty_project')
        return webTester.testSubmission(loc, false)
            .then((res) => {
                expect(res).length(2)
                expect(res[0].passed).eql(false)
            })
            .catch(e => console.log('******error', e))
    }).timeout(15000)
    it.skip('passing assignment', () => {
        const loc = path.resolve('./test/files/passing_project')
        return webTester.testSubmission(loc, false)
            .then((res) => {
                expect(res).length(2)
                expect(res[0].passed).eql(true)
            })
            .catch(e => console.log('******error', e))
    }).timeout(15000)
    after((done) => webTester.finish() && done())
})