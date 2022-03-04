import { expect } from 'chai'
import { Submission } from 'dt-types'
import { SubjectModule } from 'main-module/types/module'
import { Partitions } from 'main-module/partitions'
import * as dfs from './types'
import { notify } from 'main-module/notifications'

const fakeModule: SubjectModule = dfs.defaultModule
fakeModule.emailTemplates = {
    error: () => "error template",
    invalid: () => "invalid template"
}

describe('selecting correct email template', () => {
    // შემოწმებისას თემფლეითებს უბრალოდ არგუმენტი ჭირდებათ
    const s = dfs.defaultSubmission()
    const errorSubmission = dfs.defaultSubmission('error')
    const passedSubmission = dfs.defaultSubmission('passed')
    const invalidSubmission = dfs.defaultSubmission('invalid')
    const results: Partitions<Submission[]> = {
        error: [errorSubmission],
        passed: [passedSubmission],
        invalid: [invalidSubmission]
    }
    const hw = dfs.defaultConfig()
    hw.emailTemplates = {
        invalid: () => "invalid hw template"
    }
    const emails = notify(results,
        dfs.notifyAll, 
        () => '',
        hw,
        dfs.testRun(),
        fakeModule.emailTemplates)
    const findEmail = (s: Submission): string => emails.find(e => e.to == s.emailAddress)!.text
    it('if module overrides a default, it should be used', () => {
        expect(findEmail(errorSubmission)).equal(fakeModule.emailTemplates!.error!(s))
    })
    it(`homework override takes precedence over module override`, () => {
        expect(findEmail(invalidSubmission)).equal(hw.emailTemplates!.invalid!(s))
    })
    it('when no other override is defined, default should be returned', () => {      
        expect(findEmail(passedSubmission).length).greaterThan(0)
    })
})