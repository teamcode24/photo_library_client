export const TopicsActionTypes = {
    GET_TOPICS_LIST: "GET_TOPICS_LIST",
    GET_TOPICS: "GET_TOPICS",
    GET_TOPIC: "GET_TOPIC",
}

const initialTopicsState = {
    topicsList: [],
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
        case TopicsActionTypes.GET_TOPICS_LIST:
            var topicList1 = action.payload.data.topics.map((item, index) => ({
                text: item.title,
                link: "/t/" + item.title.replace(" ", "_"),
            }))
            var data3 = {
                ...state,
                topicsList: topicList1,
            }
            return data3
        default:
            return state

    }
}
