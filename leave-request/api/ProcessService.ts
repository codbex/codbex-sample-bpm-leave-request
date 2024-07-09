import { Controller, Post, response } from "sdk/http"
import { process } from "sdk/bpm"
import { user } from "sdk/security";

@Controller
class ProcessService {

    @Post("/processes")
    public startProcess(parameters: any) {
        const processKey = 'leave-request';

        const processParams = {
            "requester": user.getName(),
            "toDate": parameters.toDate,
            "fromDate": parameters.fromDate
        };
        const processInstanceId = process.start(processKey, processParams);

        response.setStatus(response.ACCEPTED);
        return {
            processInstanceId: processInstanceId,
            processKey: processKey,
            parameters: processParams,
            message: `Started process instance with id [${processInstanceId}] for process with key [${processKey}]`
        };
    }

}
