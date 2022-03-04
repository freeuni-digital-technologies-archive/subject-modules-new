import { expect } from 'chai'
import * as fileReader from 'codehskarel-tester/karelFileReader'
import * as path from "path";

describe('read the file and extract non exported function', () => {
    it('add move function', () => {
        const submissionFile = path.resolve(__dirname, './files/simple.k')
        const { main, world, karel } = fileReader.setUpSubmission(submissionFile, {})
        main()
        expect(karel.position).eql({ x: 3, y: 1 })
    })
    it.skip('replace repeat and other structures', () => {
        const submissionFile = path.resolve(__dirname, './files/repeat.k')
        const { main, world, karel } = fileReader.setUpSubmission(submissionFile)
        main()
        expect(karel.position).eql({ x: 3, y: 3 })
        expect(karel.world.beepers).length(3)
    })
})