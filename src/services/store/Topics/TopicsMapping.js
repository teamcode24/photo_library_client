import axios from 'axios'
import TopicURL from '../../configuration/TopicURL'
import { SendOff, AxiosSuccess, AxiosError, makeCancelable } from '../Common'
import { TopicsActionTypes } from './TopicsReducer'
import { Token } from '../Token'

export const TopicsSelector = state => ({
    topics: state.home.topic.topics,
    topic: state.home.topic.topic,
})

export const TopicsDispatch = dispatch => ({
    getTopics: input => {
        var path = input?.path || ""
        var getTopicPromise = axios.get(TopicURL.GET_TOPICS(path), {
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
        var getTopicPromise = axios.get(TopicURL.GET_TOPIC(path), {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    TopicsActionTypes.GET_TOPIC
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
})
