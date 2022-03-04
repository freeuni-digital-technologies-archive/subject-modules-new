import { SubjectModule, defaultPrepareSubmission } from "main-module/types/module"
import { Submission } from 'dt-types'
import { Partitions } from "main-module/partitions"
import { RunOpts } from "main-module/runs"
import { HwConfig } from "main-module/homework"

export const defaultModule: SubjectModule = {
    downloadAtInterval: async () => "",
    testSubmission: async() => [],
    prepareSubmission: defaultPrepareSubmission,
    asynchronousTest: false
}

export function defaultSubmission (emailId = 'abcde14') {
    return new Submission(
        emailId,
        emailId,
        emailId + '@freeuni.edu.ge',
        '',
        '',
    )
}

export const notifyAll: Partitions<boolean> = {
    crashed: true,
    notSubmitted: true,
    late: true,
    invalid: true,
    error: true,
    failed: true,
    passed: true,
    none: true
}

export function testRun(): RunOpts {
    return {  trial: true }
}

export function defaultConfig(): HwConfig  {
    return {
        id: 'hw0',
        name: 'test homework',
        module: '',
        deadline: '',
        testFileName: '',
        configPath: ''
    }
}
