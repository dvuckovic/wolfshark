import axios from 'axios';

const server = window.location.hostname;
const port = window.location.port;

const api = axios.create({
    baseURL: `http://${server}:${port}/api`,
});

export default {
    host () {
        return {
            host: `http://${server}:${port}`,
        };
    },

    codes () {
        return {
            statusCodes: {
                QUEUED: 1,
                PROCESSING: 2,
                COMPLETED: 3,
                ERROR: 4,
            },
            outputCodes: {
                SCREEN: 1,
                GLOBE: 2,
            },
        };
    },

    codeLookup () {
        return {
            statusCodesLookup: {
                1: 'QUEUED',
                2: 'PROCESSING',
                3: 'COMPLETED',
                4: 'ERROR',
            },
            outputCodesLookup: {
                1: 'SCREEN',
                2: 'GLOBE',
            },
        };
    },

    getJobs () {
        return api.get('job');
    },

    createJob (job) {
        return api.post('job', job);
    },
};
