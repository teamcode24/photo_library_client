export const TopicsActionTypes = {
    GET_TOPICS: "GET_TOPICS",
    GET_TOPIC: "GET_TOPIC",
}

const initialTopicsState = {
    topics: [],
    topic: {}
}

export const TopicsReducer = (state = initialTopicsState, action) => {
    switch (action.type) {
        case TopicsActionTypes.GET_TOPICS:
            var topics1 = action.payload.data.topics
            var data1 = {
                ...state,
                topics: topics1,
            }
            return data1
        case TopicsActionTypes.GET_TOPIC:
            var topic1 = action.payload.data.topics[0]
            var data2 = {
                ...state,
                topic: topic1,
            }
            return data2
        default:
            return state

    }
}
