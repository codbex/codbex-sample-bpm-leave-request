import { Controller, Post, response } from "sdk/http"
import { process } from "sdk/bpm"

@Controller
class ProcessService {

    @Post("/processes")
    public startProcess(parameters: any) {
        const processKey = 'leave-request';
        const params = parameters ? parameters : {};
        const processInstanceId = process.start(processKey, params);

        response.setStatus(response.ACCEPTED);
        return {
            processInstanceId: processInstanceId,
            processKey: processKey,
            parameters: params,
            message: `Started process instance with id [${processInstanceId}] for process with key [${processKey}]`
        };
    }

}
