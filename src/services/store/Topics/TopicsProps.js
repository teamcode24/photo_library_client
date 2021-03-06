import axios from 'axios'
import TopicURL from '../../configuration/TopicURL'
import { SendOff, AxiosSuccess, AxiosError, makeCancelable } from '../Common'
import { TopicsActionTypes } from './TopicsReducer'
import { Token } from '../Token'

export const TopicsSelector = state => ({
    topicsList: state.home.topic.topicsList,
    topics: state.home.topic.topics,
    topicInfo: state.home.topic.topicInfo,
})

export const TopicsDispatch = dispatch => ({
    getTopics: input => 
    {
        var getTopicPromise = axios.get(TopicURL.GET_TOPICS, {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    TopicsActionTypes.GET_TOPICS
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(getTopicPromise)
    },
    getTopic: input => {
        var path = input?.path || ""
        var getTopicPromise = axios.get(TopicURL.GET_TOPIC_INFO(path), {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    TopicsActionTypes.GET_TOPIC_INFO
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(getTopicPromise)
    },
    getTopicList: input => {
        var getTopicListPromise = axios.get(TopicURL.GET_TOPIC_LIST, {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    TopicsActionTypes.GET_TOPICS_LIST
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(getTopicListPromise)
    },
})
